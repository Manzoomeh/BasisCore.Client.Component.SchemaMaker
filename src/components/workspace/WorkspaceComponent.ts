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
import * as Dragula from "dragula";
import "../../../node_modules/dragula/dist/dragula.min.css";

export default class WorkspaceComponent
  extends ComponentBase
  implements IContainerModule
{
  private _sourceId: string;
  private readonly board: HTMLDivElement;
  private readonly _modules: Array<ContainerModule<ToolboxModule>> = [];
  private resultSourceIdToken: IToken<string>;

  get id(): number {
    return 0;
  }

  constructor(owner: IUserDefineComponent) {
    super(owner, layout, "data-bc-sm-toolbox-container");
    this.board = this.container.querySelector("[data-bc-sm-board]");
    this.init();
  }

  private init() {
    //Doc: https://github.com/bevacqua/dragula
    //Demo: https://bevacqua.github.io/dragula/
    Dragula({
      isContainer: function (el) {
        return (
          el.hasAttribute("data-bc-toolbox-container-list") ||
          el.hasAttribute("data-drop-acceptable-container-schema-type")
        );
      },
      moves: function (el, container, handle) {
        return (
          handle.hasAttribute("data-bc-toolbox-item") ||
          handle.hasAttribute("data-bc-container-handler")
        );
      },
      copy: function (el, source) {
        return source.hasAttribute("data-bc-toolbox-container-list");
      },
      accepts: function (el, target) {
        const elementSchemaType = el.getAttribute("data-schema-type");
        const acceptableSchemaType = target.getAttribute(
          "data-drop-acceptable-container-schema-type"
        );
        const validSchemaType =
          acceptableSchemaType &&
          acceptableSchemaType.indexOf(elementSchemaType) > -1;

        return validSchemaType;
      },
      removeOnSpill: true,
      ignoreInputTextSelection: true,
    }).on("drop", (el, target, source, sibling) => {
      if (source.hasAttribute("data-bc-toolbox-container-list")) {
        var schemaId = el.getAttribute("data-schema-Id");
        el.removeAttribute("data-bc-toolbox-item");
        el.innerHTML = "";
        const owner = el as HTMLElement;
        const factory = this.owner.dc.resolve<IModuleFactory>("IModuleFactory");
        const module = factory.create(
          schemaId,
          owner,
          this
        ) as ContainerModule<ToolboxModule>;
        this._modules.push(module);
      }
    });

    Dragula({
      isContainer: function (el) {
        return (
          el.hasAttribute("data-bc-toolbox-part-list") ||
          el.hasAttribute("data-drop-acceptable-part-schema-type")
        );
      },
      moves: function (el, container, handle) {
        return (
          handle.hasAttribute("data-bc-toolbox-item") ||
          handle.hasAttribute("data-bc-part-handler")
        );
      },
      copy: function (el, source) {
        return source.hasAttribute("data-bc-toolbox-part-list");
      },
      accepts: function (el, target) {
        console.log(target.querySelector("[data-schema-type='part']"));
        const len = target.querySelectorAll("[data-bc-part-module]").length;
        return (
          len == 0 || (len == 1 && !el.hasAttribute("data-bc-toolbox-item"))
        );
      },
      removeOnSpill: true,
      ignoreInputTextSelection: true,
    }).on("drop", (el, target, source, sibling) => {
      if (source.hasAttribute("data-bc-toolbox-part-list")) {
        var schemaId = el.getAttribute("data-schema-Id");
        el.setAttribute("data-bc-part-module", "");
        el.removeAttribute("data-bc-toolbox-item");
        el.innerHTML = "";
        const owner = el as HTMLElement;
        const factory = this.owner.dc.resolve<IModuleFactory>("IModuleFactory");
        const module = factory.create(
          schemaId,
          owner,
          this
        ) as ContainerModule<ToolboxModule>;
        this._modules.push(module);
      }
    });
  }

  public getComponent(): IUserDefineComponent {
    return this.owner;
  }

  public onRemove(module: ToolboxModule) {
    const index = this._modules.indexOf(module as any);
    if (index > -1) {
      this._modules.splice(index, 1);
    }
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
      this._modules.forEach((x) => x.fillSchema(retVal));

      const resultSourceId = await this.resultSourceIdToken.getValueAsync();
      this.owner.setSource(resultSourceId, retVal);
    }
  }

  private applyPropertyResult(userAction: IUserActionResult) {
    const module = this._modules.find((x) => x.tryApplyUpdate(userAction));
  }
}
