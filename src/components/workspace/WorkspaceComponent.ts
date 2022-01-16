import ISource from "../../basiscore/ISource";
import IUserDefineComponent from "../../basiscore/IUserDefineComponent";
import ComponentBase from "../ComponentBase";
import ToolboxModule from "../modules/base-class/ToolboxModule";
import layout from "./assets/layout.html";
import "./assets/style.css";
import DefaultSource from "../SourceId";
import IAnswerSchema from "../../basiscore/schema/IAnswerSchema";
import IWorkspaceComponent from "./IWorkspaceComponent";
import IUserActionResult from "../../basiscore/schema/IUserActionResult";
import IModuleFactory from "../modules/IModuleFactory";
import IQuestionSchema from "../../basiscore/schema/IQuestionSchema";
import ISchemaMakerSchema, { ModuleType } from "../ISchemaMakerSchema";
import IToken from "../../basiscore/IToken";
import * as Dragula from "dragula";
import "../../../node_modules/dragula/dist/dragula.min.css";
import ContainerModule from "../modules/ContainerModule";
import * as Prism from "prismjs";
import "../../../node_modules/prismjs/components/prism-json";
import "../../../node_modules/prismjs/themes/prism-coy.css";
export default class WorkspaceComponent
  extends ComponentBase
  implements IWorkspaceComponent
{
  private _sourceId: string;
  private _internalSourceId: string;
  private readonly _modules: Map<number, ToolboxModule> = new Map<
    number,
    ToolboxModule
  >();
  private resultSourceIdToken: IToken<string>;

  constructor(owner: IUserDefineComponent) {
    super(owner, layout, "data-bc-sm-workspace-container");
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
          handle.hasAttribute("data-bc-toolbox-item-img") ||
          handle.hasAttribute("data-bc-toolbox-item-title") ||
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
          handle.hasAttribute("data-bc-toolbox-item-img") ||
          handle.hasAttribute("data-bc-toolbox-item-title") ||
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

    const resultSourceId = await this.resultSourceIdToken.getValueAsync();
    this._internalSourceId = this.owner.getRandomName(resultSourceId);
    const schemaCommand = this.container.querySelector("basis[core='schema']");
    schemaCommand.setAttribute("triggers", this._internalSourceId);

    const scriptElement = this.container.querySelector<HTMLScriptElement>(
      "[data-bc-sm-script]"
    );

    const script_tag = document.createElement("script");
    script_tag.text = scriptElement.text.replace(
      "@internalSourceId",
      this._internalSourceId
    );
    schemaCommand.parentElement.appendChild(script_tag);
    scriptElement.remove();

    if (buttonSelector) {
      document
        .querySelectorAll(buttonSelector)
        .forEach((btn) => 
          btn.addEventListener(
            "click",
            this.generateQuestionSchemaAsync.bind(this)
          )
        );
    };

    this.container.querySelector("[data-bc-sm-schema-result]").addEventListener(
      "click",
      this.generateQuestionSchemaAsync.bind(this)
    );

    // tab event
    const tabs = this.container.querySelector("[data-bc-sm-tabs]");
    const tabButton = this.container.querySelectorAll("[data-bc-sm-tab-button]");
    const contents = this.container.querySelectorAll("[data-bc-sm-tab-section]");

    tabButton.forEach(btn => {
      btn.addEventListener("click", function (e) {
        const name = this.getAttribute("data-bc-sm-tab-button");
        if (name) {
          tabButton.forEach(tBtn => {
            tBtn.setAttribute("data-bc-sm-tab-button-mode", "");
          });
          btn.setAttribute("data-bc-sm-tab-button-mode", "active");

          contents.forEach(content => {
            content.setAttribute("data-bc-sm-tab-section-mode", "");
          });
          const element = tabs.querySelector(`[data-bc-sm-tab-section="${name}"]`);
          element.setAttribute("data-bc-sm-tab-section-mode", "active");
        }
      })
    });

    // add event json copy button
    this.container.querySelector("[data-bc-sm-json-copy]").addEventListener("click", (e) => {
      const copyText = (this.container.querySelector("[data-bc-sm-preview-json]") as HTMLDivElement);
      window.getSelection().selectAllChildren(copyText);
      navigator.clipboard.writeText(copyText.textContent);
    });
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
    } else {
      this.owner.processNodesAsync(Array.from(this.container.childNodes));
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
      this.container.querySelector<HTMLInputElement>(
        "[data-bc-sm-schema-version]"
      ).value = question.schemaVersion;

      this.container
        .querySelector<HTMLSelectElement>(
          `[data-bc-sm-schema-language] [value='${question.lid}']`
        )
        .setAttribute("selected", "");

      this.container.querySelector<HTMLInputElement>(
        "[data-bc-sm-schema-name]"
      ).value = question.name;

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

      const schemaVersion = this.container.querySelector<HTMLInputElement>(
        "[data-bc-sm-schema-version]"
      ).value;
      const lid = parseInt(
        this.container.querySelector<HTMLSelectElement>(
          "[data-bc-sm-schema-language]"
        ).value
      );
      const schemaName = this.container.querySelector<HTMLInputElement>(
        "[data-bc-sm-schema-name]"
      ).value;

      const retVal: Partial<IQuestionSchema> = {
        ...(schema?.baseVocab && { baseVocab: schema.baseVocab }),
        ...(lid && { lid: lid }),
        ...(schema?.schemaId && { schemaId: schema.schemaId }),
        ...(schemaVersion && { schemaVersion: schemaVersion }),
        ...(schemaName && { name: schemaName }),
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
      this.owner.setSource(this._internalSourceId, retVal);

      // Prism highlight
      const json = JSON.stringify(retVal, null, 4);
      const html = Prism.highlight(json, Prism.languages.json, 'json');

      this.container.querySelector<HTMLTextAreaElement>(
        "[data-bc-sm-preview-json]"
      ).innerHTML = html;

      // view form tab
      (this.container.querySelector("[data-bc-sm-tab-button='sm-form-tab']") as HTMLElement).click()
    }
  }

  private applyPropertyResult(userAction: IUserActionResult) {
    const module = this._modules.get(userAction.usedForId);
    if (module) {
      module.update(userAction);
    }
  }
}
