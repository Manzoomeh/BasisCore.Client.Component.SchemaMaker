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
import ISchemaMakerSchema, { ModuleType } from "../ISchemaMakerSchema";
import IToken from "../../basiscore/IToken";
import * as Dragula from "dragula";
import "../../../node_modules/dragula/dist/dragula.min.css";
import ContainerModule from "../modules/ContainerModule";

export default class WorkspaceComponent
  extends ComponentBase
  implements IContainerModule
{
  private _sourceId: string;
  private readonly _modules: Map<number, ToolboxModule> = new Map<
    number,
    ToolboxModule
  >();
  private resultSourceIdToken: IToken<string>;

  get id(): number {
    return 0;
  }

  constructor(owner: IUserDefineComponent) {
    super(owner, layout, "data-bc-sm-toolbox-container");
    this.initDragula();
  }

  public getModule(moduleId: number): ToolboxModule {
    return this._modules.get(moduleId);
  }

  private initDragula() {
    const addingModuleInDropTemplate = (el: Element) => {
      var schemaId = el.getAttribute("data-schema-Id");
      el.removeAttribute("data-bc-toolbox-item");
      el.innerHTML = "";
      const owner = el as HTMLElement;
      const factory = this.owner.dc.resolve<IModuleFactory>("IModuleFactory");
      const module = factory.create(schemaId, owner, this);
      el.setAttribute("data-bc-module-id", module.usedForId.toString());
      this._modules.set(module.usedForId, module);
    };

    const removeModuleOnSpill = (el: Element) => {
      const id = el.getAttribute("data-bc-module-id");
      if (id) {
        const moduleId = parseInt(id);
        this.onRemove(moduleId);
      }
    };

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
        return (
          acceptableSchemaType &&
          acceptableSchemaType.indexOf(elementSchemaType) > -1
        );
      },
      removeOnSpill: true,
      ignoreInputTextSelection: true,
    })
      .on("drop", (el, target, source, sibling) => {
        if (source.hasAttribute("data-bc-toolbox-container-list")) {
          addingModuleInDropTemplate(el);
        }
      })
      .on("remove", (el, container, source) => {
        removeModuleOnSpill(el);
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
        const len = target.querySelectorAll("[data-bc-module-id]").length;
        return (
          len == 0 || (len == 1 && !el.hasAttribute("data-bc-toolbox-item"))
        );
      },
      removeOnSpill: true,
      ignoreInputTextSelection: true,
    })
      .on("drop", (el, target, source, sibling) => {
        if (source.hasAttribute("data-bc-toolbox-part-list")) {
          addingModuleInDropTemplate(el);
        }
      })
      .on("remove", (el, container, source) => {
        removeModuleOnSpill(el);
      });
  }

  public getComponent(): IUserDefineComponent {
    return this.owner;
  }

  public onRemove(moduleId: number) {
    this._modules.delete(moduleId);
  }

  public async initializeAsync(): Promise<void> {
    this._sourceId = await this.owner.getAttributeValueAsync("DataMemberName");
    this.resultSourceIdToken = this.owner.getAttributeToken("resultSourceId");
    const buttonSelector = await this.owner.getAttributeValueAsync("button");
    this.owner.addTrigger([DefaultSource.PROPERTY_RESULT, this._sourceId]);
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
        case this._sourceId: {
          this.createUIFromQuestionSchema(source.rows[0]);
          break;
        }
      }
    }
  }

  private createUIFromQuestionSchema(question: IQuestionSchema) {
    const board = this.container.querySelector("[data-bc-sm-board]");
    board.innerHTML = "";
    const createContainer = (
      schemaId: string,
      schemaType: ModuleType,
      data: any
    ): Element => {
      const container = document.createElement("div");
      container.setAttribute("data-schema-id", schemaId);
      container.setAttribute("data-schema-type", schemaType);
      const factory = this.owner.dc.resolve<IModuleFactory>("IModuleFactory");
      const module = factory.create(schemaId, container, this, data);
      container.setAttribute("data-bc-module-id", module.usedForId.toString());
      this._modules.set(module.usedForId, module);
      return container;
    };
    if (question) {
      const sections = new Map<Number, Element>();
      if (question.sections) {
        question.sections.forEach((x) => {
          const sectionModule = createContainer("section", "section", x);
          sections.set(x.id, sectionModule);
          board.appendChild(sectionModule);
        });
      }
      if (question.questions) {
        question.questions.forEach((question) => {
          const questionModule = createContainer(
            "question",
            "question",
            question
          );
          if (question.sectionId && sections.has(question.sectionId)) {
            const section = sections.get(question.sectionId);
            section
              .querySelector("[data-drop-acceptable-container-schema-type]")
              .appendChild(questionModule);
          } else {
            board.appendChild(questionModule);
          }
          if (question.parts) {
            question.parts.forEach((part) => {
              const partModule = createContainer(
                part.viewType,
                "question",
                part
              );
              const partContainer = questionModule.querySelector(
                `[data-bc-question-part-number="${part.part}"]`
              );
              partContainer.appendChild(partModule);
            });
          }
        });
      }
    }
  }

  private async generateQuestionSchemaAsync(e: MouseEvent) {
    e.preventDefault();
    if (this.resultSourceIdToken) {
      const source = await this.owner.waitToGetSourceAsync(this._sourceId);
      const schema = source.rows[0] as ISchemaMakerSchema;
      const retVal: Partial<IQuestionSchema> = {
        ...(schema?.baseVocab && { baseVocab: schema.baseVocab }),
        ...(schema?.lid && { lid: schema.lid }),
        ...(schema?.schemaId && { schemaId: schema.schemaId }),
        ...(schema?.schemaVersion && { schemaVersion: schema.schemaVersion }),
      };

      const container = this.container.querySelector(
        "[data-drop-acceptable-container-schema-type]"
      );
      container.childNodes.forEach((x) => {
        if (x instanceof HTMLElement) {
          const id = x.getAttribute("data-bc-module-id");
          if (id) {
            const usedForId = parseInt(id);
            const module = this._modules.get(usedForId);
            if (module instanceof ContainerModule) {
              module.fillSchema(retVal);
            }
          }
        }
      });
      const resultSourceId = await this.resultSourceIdToken.getValueAsync();
      this.owner.setSource(resultSourceId, retVal);
    }
  }

  private applyPropertyResult(userAction: IUserActionResult) {
    const module = this._modules.get(userAction.usedForId);
    if (module) {
      module.update(userAction);
    }
  }
}
