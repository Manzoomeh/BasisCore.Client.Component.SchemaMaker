import ISource from "../../basiscore/ISource";
import IUserDefineComponent from "../../basiscore/IUserDefineComponent";
import ComponentBase from "../ComponentBase";
import ToolboxModule from "../modules/base-class/ToolboxModule";
import layout from "./assets/layout.html";
import "./assets/style.css";
import DefaultSource from "../SourceId";
import IAnswerSchema from "../../basiscore/schema/IAnswerSchema";
import IContainerModule from "../modules/IContainerModule";
import IUserActionResult from "../../basiscore/schema/IUserActionResult";
import IModuleFactory from "../modules/IModuleFactory";
import IQuestionSchema from "../../basiscore/schema/IQuestionSchema";
import ISchemaMakerSchema from "../ISchemaMakerSchema";
import IToken from "../../basiscore/IToken";
import ContainerModule from "../modules/ContainerModule";

export default class WorkspaceComponent
  extends ComponentBase
  implements IContainerModule
{
  private _sourceId: string;
  private readonly board: HTMLDivElement;
  private readonly _modules: Array<ToolboxModule> = [];
  private resultSourceIdToken: IToken<string>;

  get id(): number {
    return 0;
  }

  constructor(owner: IUserDefineComponent) {
    super(owner, layout, "data-bc-sm-toolbox-container");
    this.board = this.container.querySelector("[data-bc-sm-board]");
    this.board.addEventListener("dragover", this.onDragOver.bind(this));
    this.board.addEventListener("drop", this.onDrop.bind(this));
  }

  private onDragOver(e: DragEvent) {
    const draggedType = e.dataTransfer.getData("schemaType");
    const acceptableTypes = (e.target as HTMLElement)?.getAttribute(
      "data-drop-acceptable-schema-type"
    );
    e.stopPropagation();
    if (
      draggedType &&
      acceptableTypes &&
      acceptableTypes?.indexOf(draggedType) > -1
    ) {
      e.preventDefault();
    }
  }

  public getComponent(): IUserDefineComponent {
    return this.owner;
  }

  public onRemove(module: ToolboxModule) {
    const index = this._modules.indexOf(module);
    if (index > -1) {
      this._modules.splice(index, 1);
    }
  }

  private onDrop(e: DragEvent) {
    e.preventDefault();
    var schemaId = e.dataTransfer.getData("schemaId");
    const owner = e.target as HTMLElement;
    const factory = this.owner.dc.resolve<IModuleFactory>("IModuleFactory");
    const module = factory.create(schemaId, owner, this);
    this._modules.push(module);
  }

  public async initializeAsync(): Promise<void> {
    this._sourceId = await this.owner.getAttributeValueAsync("DataMemberName");
    this.resultSourceIdToken = this.owner.getAttributeToken("resultSourceId");
    const buttonSelector = await this.owner.getAttributeValueAsync("button");
    this.owner.addTrigger([DefaultSource.PROPERTY_RESULT]);
    if (buttonSelector) {
      document
        .querySelectorAll(buttonSelector)
        .forEach((btn) =>
          btn.addEventListener(
            "click",
            this.generateQuestionSchemaAsync.bind(this)
          )
        );
    }
  }

  public runAsync(source?: ISource) {
    if (source) {
      switch (source.id) {
        case DefaultSource.PROPERTY_RESULT: {
          const result: IAnswerSchema = source.rows[0];
          this.applyPropertyResult(source.rows[0]);
          break;
        }
      }
    }
  }

  private async generateQuestionSchemaAsync(e: MouseEvent) {
    e.preventDefault();
    if (this.resultSourceIdToken) {
      const source = await this.owner.waitToGetSourceAsync(this._sourceId);
      const schema = source.rows[0] as ISchemaMakerSchema;
      const retVal: IQuestionSchema = {
        baseVocab: schema.baseVocab,
        lid: schema.lid,
        schemaId: schema.schemaId,
        schemaVersion: schema.schemaVersion,
        sections: null,
        questions: null,
      };
      this._modules.forEach((x) => (x as ContainerModule).fillSchema(retVal));

      const resultSourceId = await this.resultSourceIdToken.getValueAsync();
      this.owner.setSource(resultSourceId, retVal);
    }
  }

  private applyPropertyResult(userAction: IUserActionResult) {
    const module = this._modules.find((x) => x.tryApplyUpdate(userAction));
  }
}
