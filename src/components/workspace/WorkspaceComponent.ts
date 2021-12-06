import ISource from "../../basiscore/ISource";
import IUserDefineComponent from "../../basiscore/IUserDefineComponent";
import ComponentBase from "../ComponentBase";
import SectionModule from "../modules/section/SectionModule";
import QuestionModule from "../modules/question/QuestionModule";
import ToolboxModule from "../modules/base-class/ToolboxModule";
import layout from "./assets/layout.html";
import "./assets/style.css";
import DefaultSource from "../SourceId";
import { IAnswerSchema } from "../../basiscore/IAnswerSchema";
import IContainerModule from "../modules/IContainerModule";
import IUserActionResult from "../../basiscore/IUserActionResult";

export default class WorkspaceComponent
  extends ComponentBase
  implements IContainerModule
{
  private readonly board: HTMLDivElement;
  private readonly _modules: Array<ToolboxModule> = [];

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
    const module = this.factory(schemaId, owner);
    this._modules.push(module);
  }

  public initializeAsync(): void {
    this.owner.addTrigger([DefaultSource.PROPERTY_RESULT]);
  }

  public runAsync(source?: ISource) {
    if (source?.id == DefaultSource.PROPERTY_RESULT) {
      const result: IAnswerSchema = source.rows[0];
      this.applyPropertyResult(source.rows[0]);
    }
  }

  private factory(schemaId: string, owner: HTMLElement): ToolboxModule {
    let retVal: ToolboxModule = null;
    switch (schemaId) {
      case "question": {
        retVal = new QuestionModule(owner, this);
        break;
      }
      case "section": {
        retVal = new SectionModule(owner, this);
        break;
      }
    }
    return retVal;
  }

  private applyPropertyResult(userAction: IUserActionResult) {
    const module = this._modules.find((x) => x.tryApplyUpdate(userAction));
  }
}
