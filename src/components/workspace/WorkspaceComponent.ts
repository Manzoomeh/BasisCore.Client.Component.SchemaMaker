import {
  ISource,
  IUserDefineComponent,
  IAnswerSchema,
  IUserActionResult,
  IQuestionSchema,
  IToken,
} from "basiscore";
import ComponentBase from "../ComponentBase";
import ToolboxModule from "../modules/base-class/ToolboxModule";
import layout from "./assets/layout.html";
import "./assets/style.css";
import DefaultSource from "../SourceId";
import IWorkspaceComponent from "./IWorkspaceComponent";
import IModuleFactory from "../modules/IModuleFactory";
import ISchemaMakerSchema, { ModuleType } from "../ISchemaMakerSchema";
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
  private _saveDraft: boolean;
  private _sourceId: string;
  private _internalSourceId: string;
  private _result: JSON;
  private _textArea: HTMLTextAreaElement;
  private errorContainer: HTMLTextAreaElement;
  private static _current_container_dragula: Dragula.Drake;
  private static _current_part_dragula: Dragula.Drake;
  private readonly _modules: Map<number, ToolboxModule> = new Map<
    number,
    ToolboxModule
  >();
  private resultSourceIdToken: IToken<string>;

  constructor(owner: IUserDefineComponent) {
    super(owner, layout, "data-bc-sm-workspace-container");
    this._textArea = this.container.querySelector("[data-get-edit-json]");
    this.errorContainer = this.container.querySelector("[data-get-edit-error]");
    this.initDragula();
  }

  public getModule(moduleId: number): ToolboxModule {
    return this._modules.get(moduleId);
  }
  private removeSpanAndBrTags(str) {
    return str.replace(/<\/?(span|br|div)\b[^>]*>/g, "");
  }
  private async validateJSON() {
    // Clear any previous error messages and highlights
    this.errorContainer.innerHTML = "";

    try {
      console.log(
        "this.removeSpanAndBrTags(this._textArea.innerHTML) :>> ",
        this.removeSpanAndBrTags(this._textArea.innerHTML)
      );
      // Parse the JSON from the this._textArea value
      const json = JSON.parse(
        this.removeSpanAndBrTags(this._textArea.innerHTML)
      );
      // If parsing succeeded, display a success message
      this.errorContainer.textContent = "JSON is valid.";
      this._textArea.style.display = "none";
      this.errorContainer.style.display = "none";
      this.container.querySelector<HTMLElement>(
        "[data-bc-sm-preview-json]"
      ).style.display = "block";
      const newJson = JSON.stringify(json, null, 4);
      const html = Prism.highlight(newJson, Prism.languages.json, "json");
      console.log("object :>> ", json, html);
      this.container.querySelector<HTMLTextAreaElement>(
        "[data-bc-sm-preview-json]"
      ).innerHTML = html;
      this.container.querySelector<HTMLElement>(
        "[data-bc-sm-save-json-form]"
      ).style.display = "none";
      this.container.querySelector<HTMLElement>(
        "[data-bc-sm-cancel-save-form]"
      ).style.display = "none";
      const source = await this.owner.waitToGetSourceAsync(this._sourceId);
      this.owner.setSource(this._internalSourceId, json);

      this.createUIFromQuestionSchema(json);
    } catch (error) {
      // If parsing failed, display the error message and highlight the error line
      this.errorContainer.style.display = "flex";
      this.errorContainer.textContent = error.message;
      // Get the error location from the error message
      const errorLocation = error.message.match(/position (\d+)/);
      console.log("errorLocation :>> ", errorLocation);
      if (errorLocation && errorLocation[1]) {
        const position = parseInt(errorLocation[1], 10);
        console.log("position :>> ", position);
        // Get the line number and column number of the error
        const { lineNumber, columnNumber } = this.getLineAndColumnNumbers(
          this._textArea.innerHTML,
          position
        );
        console.log("lineNumber,columnNumber :>> ", lineNumber, columnNumber);
        // Highlight the error line in the this._textArea
        this.highlightLine(lineNumber);
      }
    }
  }

  // Helper private to get the line number and column number of a character position in a text
  private getLineAndColumnNumbers(text, position) {
    let lineNumber = 1;
    let columnNumber = 1;

    for (let i = 0; i < position; i++) {
      if (text[i] === "\n") {
        lineNumber++;
        columnNumber = 1;
      } else {
        columnNumber++;
      }
    }

    return { lineNumber, columnNumber };
  }

  // Helper private to highlight a specific line in a textarea
  private highlightLine(lineNumber) {
    const lines = this.removeSpanAndBrTags(this._textArea.innerHTML).split(
      "\n"
    );
    console.log("lines :>> ", lines);
    if (lineNumber <= lines.length) {
      lines[lineNumber - 1] = `<span class="highlight">${
        lines[lineNumber - 1]
      }</span>`;
      this._textArea.innerHTML = lines.join("\n");
    }
  }

  // Helper private to set the cursor position in a textarea

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

    if (WorkspaceComponent._current_container_dragula) {
      WorkspaceComponent._current_container_dragula.destroy();
    }

    if (WorkspaceComponent._current_part_dragula) {
      WorkspaceComponent._current_part_dragula.destroy();
    }
    //Doc: https://github.com/bevacqua/dragula
    //Demo: https://bevacqua.github.io/dragula/
    WorkspaceComponent._current_container_dragula = Dragula({
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

    WorkspaceComponent._current_part_dragula = Dragula({
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
    this._saveDraft =
      (await this.owner.getAttributeValueAsync("saveDraft", "false")) == "true";
    this._sourceId = await this.owner.getAttributeValueAsync("DataMemberName");
    this.resultSourceIdToken = this.owner.getAttributeToken("resultSourceId");
    this.owner.addTrigger([DefaultSource.PROPERTY_RESULT, this._sourceId]);
    const resultSourceId = await this.resultSourceIdToken?.getValueAsync();
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
    if (this._saveDraft) {
      window.addEventListener(
        "beforeunload",
        this.saveAsDraftAsync.bind(this, "bc-sm-auto-draft")
      );
    }
    this.container
      .querySelector("[data-bc-sm-schema-result]")
      .addEventListener(
        "click",
        this.generateAndSetQuestionSchemaAsync.bind(this)
      );

    // this.container
    //   .querySelector("[data-bc-sm-save-draft]")
    //   .addEventListener(
    //     "click",
    //     this.saveAsDraftAsync.bind(this, "bc-sm-manually-draft")
    //   );

    // this.container
    //   .querySelector("[data-bc-sm-load-draft]")
    //   .addEventListener(
    //     "click",
    //     this.loadDraft.bind(this, "bc-sm-manually-draft")
    //   );

    // tab event
    const tabs = this.container.querySelector("[data-bc-sm-tabs]");
    const tabButton = this.container.querySelectorAll(
      "[data-bc-sm-tab-button]"
    );
    const contents = this.container.querySelectorAll(
      "[data-bc-sm-tab-section]"
    );

    tabButton.forEach((btn) => {
      btn.addEventListener("click", function (e) {
        const name = this.getAttribute("data-bc-sm-tab-button");
        if (name) {
          tabButton.forEach((tBtn) => {
            tBtn.setAttribute("data-bc-sm-tab-button-mode", "");
            tBtn.removeAttribute("data-sys-sm-active-tab");
          });
          btn.setAttribute("data-bc-sm-tab-button-mode", "active");
          btn.setAttribute("data-sys-sm-active-tab", "active");

          contents.forEach((content) => {
            content.setAttribute("data-bc-sm-tab-section-mode", "");
          });
          const element = tabs.querySelector(
            `[data-bc-sm-tab-section="${name}"]`
          );
          element.setAttribute("data-bc-sm-tab-section-mode", "active");
        }
      });
    });

    // add event on json copy button
    const jsonCopy = this.container.querySelector("[data-bc-sm-json-copy]");

    jsonCopy.addEventListener("click", (e) => {
      const copyText = this.container.querySelector(
        "[data-bc-sm-preview-json]"
      ) as HTMLDivElement;
      window.getSelection().selectAllChildren(copyText);
      navigator.clipboard.writeText(copyText.textContent);
    });

    // add event on json download button
    const jsonDownload = this.container.querySelector(
      "[data-bc-sm-json-download]"
    );
    jsonDownload.addEventListener("click", (e) => {
      if (jsonDownload.getAttribute("data-get-btn-disabled") != "true") {
        const content = (
          this.container.querySelector(
            "[data-get-json-for-download]"
          ) as HTMLDivElement
        ).innerText;
        const fileName = "freeForm.json";
        const contentType = "text/plain";

        const a = document.createElement("a");
        const file = new Blob([content], { type: contentType });

        a.href = URL.createObjectURL(file);
        a.download = fileName;
        a.click();
      }
    });
    const cancelSaveJson = this.container.querySelector(
      "[data-bc-sm-cancel-save-form]"
    );
    const saveJsonForm = this.container.querySelector(
      "[data-bc-sm-save-json-form]"
    );

    saveJsonForm.addEventListener("click", () => {
      this.validateJSON();
      jsonDownload.setAttribute("data-get-btn-disabled", "");
      jasonCopy.setAttribute("data-get-btn-disabled", "");
      jsonSave.setAttribute("data-get-btn-disabled", "");
      editForm.setAttribute("data-get-btn-disabled", "");
    });
    const jsonSave = this.container.querySelector("[data-bc-sm-save-form]");
    if (resultSourceId && resultSourceId != "") {
      jsonSave?.addEventListener("click", async (e) => {
        if (jsonSave.getAttribute("data-get-btn-disabled") != "true") {
          this.owner.setSource(resultSourceId, this._result);
        }
      });
    } else if (!resultSourceId || resultSourceId == "") {
      jsonSave.remove();
    }
    const editForm = this.container.querySelector("[data-bc-sm-edit-form]");
    editForm.addEventListener("click", () => {
      jsonDownload.setAttribute("data-get-btn-disabled", "true");
      jasonCopy.setAttribute("data-get-btn-disabled", "true");
      jsonSave.setAttribute("data-get-btn-disabled", "true");
      editForm.setAttribute("data-get-btn-disabled", "true");
      this.container.querySelector<HTMLTextAreaElement>(
        "[data-bc-sm-preview-json]"
      ).style.display = "none";
      this._textArea.style.display = "block";
      this._textArea.innerHTML = JSON.stringify(this._result, null, 4);
      this.container.querySelector<HTMLTextAreaElement>(
        "[data-bc-sm-save-json-form]"
      ).style.display = "inline";

      this.container.querySelector<HTMLTextAreaElement>(
        "[data-bc-sm-cancel-save-form]"
      ).style.display = "inline";
    });

    cancelSaveJson.addEventListener("click", () => {
      const json = JSON.stringify(this._result, null, 4);
      const html = Prism.highlight(json, Prism.languages.json, "json");
      console.log("object :>> ", json, html);
      this.container.querySelector<HTMLTextAreaElement>(
        "[data-bc-sm-preview-json]"
      ).style.display = "block";
      this.container.querySelector<HTMLTextAreaElement>(
        "[data-bc-sm-preview-json]"
      ).innerHTML = html;

      // json for download
      this.container.querySelector<HTMLTextAreaElement>(
        "[data-get-json-for-download]"
      ).innerText = JSON.stringify(this._result);
      this.container
        .querySelector("[data-bc-sm-json-download]")
        .setAttribute("data-get-btn-disabled", "");
      this.container.querySelector<HTMLTextAreaElement>(
        "[data-bc-sm-save-json-form]"
      ).style.display = "none";

      this.container.querySelector<HTMLTextAreaElement>(
        "[data-bc-sm-cancel-save-form]"
      ).style.display = "none";

      this._textArea.style.display = "none";
      this.errorContainer.style.display = "none";
      jsonDownload.setAttribute("data-get-btn-disabled", "");
      jasonCopy.setAttribute("data-get-btn-disabled", "");
      jsonSave.setAttribute("data-get-btn-disabled", "");
      editForm.setAttribute("data-get-btn-disabled", "");
    });
  }

  public runAsync(source?: ISource) {
    if (source) {
      console.log("source.rows[0] :>> ", source.rows[0]);
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
      if (this._saveDraft) {
        setTimeout(this.loadDraft.bind(this, "bc-sm-auto-draft"), 100);
      }
    }
  }

  private createUIFromQuestionSchema(question: IQuestionSchema) {
    console.log("question :>> ", question);
    const board = this.container.querySelector("[data-bc-sm-board]");
    board.innerHTML = "";
    const createContainer = (
      schemaId: string,
      schemaType: ModuleType,
      data: any
    ): Element => {
      this.container.querySelector<HTMLInputElement>(
        "[data-bc-sm-schema-version]"
      ).value = question.schemaVersion ?? "";

      this.container
        .querySelector<HTMLSelectElement>(
          `[data-bc-sm-schema-language] [value='${question.lid}']`
        )
        .setAttribute("selected", "");

      this.container.querySelector<HTMLInputElement>(
        "[data-bc-sm-schema-name]"
      ).value = question.schemaName ?? "";

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

  private async generateQuestionSchemaAsync(): Promise<
    Partial<IQuestionSchema>
  > {
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
      ...(schema?.paramUrl && { paramUrl: schema.paramUrl }),
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
    return retVal;
  }
  private async generateAndSetQuestionSchemaAsync(e: MouseEvent) {
    e.preventDefault();
    const retVal = await this.generateQuestionSchemaAsync();
    this.owner.setSource(this._internalSourceId, retVal);
    this._result = retVal as JSON;

    // Prism highlight
    const json = JSON.stringify(retVal, null, 4);
    const html = Prism.highlight(json, Prism.languages.json, "json");
    console.log("object :>> ", json, html);
    this.container.querySelector<HTMLTextAreaElement>(
      "[data-bc-sm-preview-json]"
    ).innerHTML = html;

    // json for download
    this.container.querySelector<HTMLTextAreaElement>(
      "[data-get-json-for-download]"
    ).innerText = JSON.stringify(retVal);
    this.container
      .querySelector("[data-bc-sm-json-download]")
      .setAttribute("data-get-btn-disabled", "");

    // save form
    this.container
      .querySelector("[data-bc-sm-save-form]")
      ?.setAttribute("data-get-btn-disabled", "");
    this.container
      .querySelector("[data-bc-sm-edit-form]")
      ?.setAttribute("data-get-btn-disabled", "");

    // view form tab
    (
      this.container.querySelector(
        "[data-bc-sm-tab-button='sm-form-tab']"
      ) as HTMLElement
    ).click();
  }

  private applyPropertyResult(userAction: IUserActionResult) {
    const module = this._modules.get(userAction.usedForId);
    if (module) {
      module.update(userAction);
    }
  }

  private async saveAsDraftAsync(draftName: string): Promise<void> {
    const schema = await this.generateQuestionSchemaAsync();
    localStorage.setItem(draftName, JSON.stringify(schema));
  }

  private async loadDraft(draftName: string) {
    const schema = JSON.parse(localStorage.getItem(draftName));
    this.createUIFromQuestionSchema(schema);
  }
}
