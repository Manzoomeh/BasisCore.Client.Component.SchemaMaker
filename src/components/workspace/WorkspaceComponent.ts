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
import IWorkspaceComponent, {
  IQuestionSchemaBuiltIn,
} from "./IWorkspaceComponent";
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
  private _objectTypeUrl: string;
  private _groupsUrl: string;
  private _defaultQuestionsUrl: string;

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

  private highlightLine(lineNumber) {
    const lines = this.removeSpanAndBrTags(this._textArea.innerHTML).split(
      "\n"
    );
    if (lineNumber <= lines.length) {
      lines[lineNumber - 1] = `<span class="highlight">${
        lines[lineNumber - 1]
      }</span>`;
      this._textArea.innerHTML = lines.join("\n");
    }
  }

  private initDragula() {
    const addingModuleInDropTemplate = (el: Element) => {
      var schemaId = el.getAttribute("data-schema-Id");
      el.removeAttribute("data-bc-toolbox-item");
      el.innerHTML = "";
      const owner = el as HTMLElement;
      const factory = this.owner.dc.resolve<IModuleFactory>("IModuleFactory");
      const module = factory.create(schemaId, owner, this, false);
      el.setAttribute(
        "data-bc-module-id",
        module.usedForId?.toString() ?? "-1"
      );
      el.setAttribute(
        "data-bc-module-id",
        module.usedForId?.toString() ?? "-1"
      );
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
    this._objectTypeUrl = await this.owner.getAttributeValueAsync(
      "objectTypeUrl",
      ""
    );
    this._groupsUrl = await this.owner.getAttributeValueAsync("groupsUrl", "");
    this._defaultQuestionsUrl = await this.owner.getAttributeValueAsync(
      "defaultQuestionsUrl",
      ""
    );
    //this.owner.setSource("details.data",);
    this.owner.addTrigger([DefaultSource.PROPERTY_RESULT, this._sourceId]);
    const resultSourceId = await this.resultSourceIdToken?.getValueAsync();
    this._internalSourceId = this.owner.getRandomName(resultSourceId);
    const schemaCommand = this.container.querySelector(
      "div[data-get-schema-preview] basis[core='schema']"
    );
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
      .addEventListener("click", (e) =>
        this.delay(this.generateAndSetQuestionSchemaAsync.bind(this), e)
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
      btn.addEventListener("click", (e) => {
        this.cancelEditJson();
        const name = (e.target as Element).attributes.getNamedItem(
          "data-bc-sm-tab-button"
        ).value;
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

    const jsonDownload = this.container.querySelector(
      "[data-bc-sm-json-download]"
    );
    const cancelSaveJson = this.container.querySelector(
      "[data-bc-sm-cancel-save-form]"
    );
    const saveJsonForm = this.container.querySelector(
      "[data-bc-sm-save-json-form]"
    );
    const jsonSave = this.container.querySelector("[data-bc-sm-save-form]");
    const editForm = this.container.querySelector("[data-bc-sm-edit-form]");
    const jsonCopy = this.container.querySelector("[data-bc-sm-json-copy]");

    jsonCopy.addEventListener("click", (e) => {
      const copyText = this.container.querySelector(
        "[data-bc-sm-preview-json]"
      ) as HTMLDivElement;
      window.getSelection().selectAllChildren(copyText);
      navigator.clipboard.writeText(copyText.textContent);
    });
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

    saveJsonForm.addEventListener("click", () => {
      this.errorContainer.innerHTML = "";

      try {
        const json = JSON.parse(
          this.removeSpanAndBrTags(this._textArea.innerHTML)
        );
        this.errorContainer.textContent = "JSON is valid.";
        this._textArea.style.display = "none";
        this.errorContainer.style.display = "none";
        this.container.querySelector<HTMLElement>(
          "[data-bc-sm-preview-json]"
        ).style.display = "block";
        const newJson = JSON.stringify(json, null, 4);
        const html = Prism.highlight(newJson, Prism.languages.json, "json");
        this.container.querySelector<HTMLTextAreaElement>(
          "[data-bc-sm-preview-json]"
        ).innerHTML = html;
        this.container.querySelector<HTMLElement>(
          "[data-bc-sm-save-json-form]"
        ).style.display = "none";
        this.container.querySelector<HTMLElement>(
          "[data-bc-sm-cancel-save-form]"
        ).style.display = "none";
        this._result = json;
        this.owner.setSource(this._internalSourceId, json);
        jsonDownload.setAttribute("data-get-btn-disabled", "");
        jsonCopy.setAttribute("data-get-btn-disabled", "");
        jsonSave.setAttribute("data-get-btn-disabled", "");
        editForm.setAttribute("data-get-btn-disabled", "");
        this.createUIFromQuestionSchema(json);
      } catch (error) {
        this.errorContainer.style.display = "flex";
        this.errorContainer.textContent = error.message;
        const errorLocation = error.message.match(/position (\d+)/);
        if (errorLocation && errorLocation[1]) {
          const position = parseInt(errorLocation[1], 10);
          const { lineNumber } = this.getLineAndColumnNumbers(
            this._textArea.innerHTML,
            position
          );
          this.highlightLine(lineNumber);
        }
      }
    });
    if (resultSourceId && resultSourceId != "") {
      jsonSave?.addEventListener("click", async (e) => {
        if (jsonSave.getAttribute("data-get-btn-disabled") != "true") {
          this.owner.setSource(resultSourceId, this._result);
        }
      });
    } else if (!resultSourceId || resultSourceId == "") {
      jsonSave.remove();
    }
    editForm.addEventListener("click", () => {
      jsonDownload.setAttribute("data-get-btn-disabled", "true");
      jsonCopy.setAttribute("data-get-btn-disabled", "true");
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
      this.cancelEditJson();
    });

    if (this._objectTypeUrl && this._objectTypeUrl != "") {
      this.loadObjectTypes();
    } else {
      this.container.querySelector("[data-bc-sm-object-type]").remove();
      this.container.querySelector("[data-bc-sm-schema-group]").remove();
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
    } else {
      this.owner.processNodesAsync(Array.from(this.container.childNodes));
      if (this._saveDraft) {
        setTimeout(this.loadDraft.bind(this, "bc-sm-auto-draft"), 100);
      }
    }
  }

  private createUIFromQuestionSchema(question: IQuestionSchema) {
    const board = this.container.querySelector("[data-bc-sm-board]");
    board.innerHTML = "";
    this.createUIElements(board, question, false);
  }

  private createUIElements(
    board: Element,
    questionSchema: IQuestionSchema,
    isABuiltIn: boolean
  ) {
    if (questionSchema) {
      const sections = new Map<Number, Element>();
      if (questionSchema.sections) {
        questionSchema.sections.forEach((x) => {
          const sectionModule = this.createContainer(
            questionSchema,
            "section",
            "section",
            x,
            isABuiltIn
          );
          sections.set(x.id, sectionModule);
          board.appendChild(sectionModule);
        });
      }
      if (questionSchema.questions) {
        questionSchema.questions.forEach((question) => {
          const questionModule = this.createContainer(
            questionSchema,
            "question",
            "question",
            question,
            isABuiltIn
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
              const partModule = this.createContainer(
                questionSchema,
                part.viewType,
                "question",
                part,
                isABuiltIn
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

  private createContainer(
    question: IQuestionSchema,
    schemaId: string,
    schemaType: ModuleType,
    data: any,
    isABuiltIn: boolean
  ): Element {
    const container = document.createElement("div");
    container.setAttribute("data-schema-id", schemaId);
    container.setAttribute("data-schema-type", schemaType);
    const factory = this.owner.dc.resolve<IModuleFactory>("IModuleFactory");
    const module = factory.create(schemaId, container, this, isABuiltIn, data);
    container.setAttribute("data-bc-module-id", module.usedForId.toString());
    this._modules.set(module.usedForId, module);
    return container;
  }

  private cancelEditJson(): void {
    const jsonDownload = this.container.querySelector(
      "[data-bc-sm-json-download]"
    );
    const jsonCopy = this.container.querySelector("[data-bc-sm-json-copy]");

    const jsonSave = this.container.querySelector("[data-bc-sm-save-form]");
    const editForm = this.container.querySelector("[data-bc-sm-edit-form]");

    const json = JSON.stringify(this._result, null, 4);
    const html = Prism.highlight(json, Prism.languages.json, "json");
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
    jsonCopy.setAttribute("data-get-btn-disabled", "");
    jsonSave.setAttribute("data-get-btn-disabled", "");
    editForm.setAttribute("data-get-btn-disabled", "");
  }
  findElementByPropId(array: Array<any>, propId: number) {
    return array.find((element) => element.propId === propId);
  }
  private async generateQuestionSchemaAsync(): Promise<
    Partial<IQuestionSchema>
  > {
    const source = await this.owner.waitToGetSourceAsync(this._sourceId);
    const schema = source.rows[0] as ISchemaMakerSchema;
    const detailSource = this.owner.tryToGetSource("details.data");
    let lid 
    let schemaName 
    let schemaVersion
    if(detailSource){
          const rowProperties = detailSource.rows[0]?.properties;
    schemaVersion = this.findElementByPropId(rowProperties, 3)?.added
      ? this.findElementByPropId(rowProperties, 3)?.added[0].parts[0].values[0].value
      : this.findElementByPropId(rowProperties, 3)?.edited ?
        this.findElementByPropId(rowProperties, 3)?.edited[0].parts[0].values[0].value: undefined;
    lid =
      this.findElementByPropId(rowProperties, 2)?.added ? this.findElementByPropId(rowProperties, 2)?.added[0].parts[0].values[0]
        .value : this.findElementByPropId(rowProperties, 2)?.edited  ?
        this.findElementByPropId(rowProperties, 2)?.edited[0].parts[0].values[0]
          .value : undefined
    schemaName = this.findElementByPropId(rowProperties, 1)?.added
      ? this.findElementByPropId(rowProperties, 1)?.added[0].parts[0].values[0]
          .value
      : this.findElementByPropId(rowProperties, 1)?.edited
      ? this.findElementByPropId(rowProperties, 1)?.edited[0].parts[0].values[0]
          .value
      : undefined;
    }
    lid = lid ?? document.querySelector(".bc_language_id [data-sys-select-option]")["value"] ?parseInt(document.querySelector(".bc_language_id [data-sys-select-option]")["value"]) : undefined
    schemaName =
      schemaName ??
      document.querySelector(".bc_schema_name [data-bc-text-input]")["value"];
    schemaVersion =
      schemaVersion ??
      document.querySelector(".bc_schema_version [data-bc-text-input]")["value"];

    const mid = parseInt(
      this.container.querySelector<HTMLSelectElement>(
        "[data-bc-sm-schema-object-type-select]"
      )?.value
    );
    const selectGroups = this.container.querySelectorAll<HTMLSelectElement>(
      "[data-bc-sm-schema-group-select]"
    );
    let groupHashId = "";
    for (let i = selectGroups.length - 1; i >= 0; i--) {
      const selectGroupValue = selectGroups[i].value;
      if (selectGroupValue != "0") {
        groupHashId = selectGroups[i].value;
        break;
      }
    }

    const retVal: Partial<IQuestionSchemaBuiltIn> = {
      ...(schema?.baseVocab && { baseVocab: schema.baseVocab }),
      ...(lid && { lid: lid }),
      ...(mid && { mid: mid }),
      ...(groupHashId && { groupHashId: groupHashId }),
      ...(schema?.schemaId && { schemaId: schema.schemaId }),
      ...(schema?.paramUrl && { paramUrl: schema.paramUrl }),
      ...(schemaVersion && { schemaVersion: schemaVersion }),
      ...(schemaName && { name: schemaName.value ?? schemaName }),
      ...(schemaName && {
        nameData: schemaName.value ? schemaName : undefined,
      }),
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
  delay(callback, e) {
    setTimeout(() => {
      callback(e);
    }, 50);
  }
  private async generateAndSetQuestionSchemaAsync(e: MouseEvent) {
    e.preventDefault();
    const retVal = await this.generateQuestionSchemaAsync();
    this.owner.setSource(this._internalSourceId, retVal);
    this._result = retVal as JSON;
    // Prism highlight
    const json = JSON.stringify(retVal, null, 4);
    const html = Prism.highlight(json, Prism.languages.json, "json");
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

  async loadObjectTypes() {
    const objectTypes = await this.requestJsonAsync(this._objectTypeUrl, "GET");
    const objectTypesContainer = this.container.querySelector(
      "[data-bc-sm-schema-object-type-select]"
    );
    objectTypesContainer.innerHTML = "";
    this.addFirstItem(objectTypesContainer);
    if (objectTypes.length > 0) {
      objectTypes.forEach((object) => {
        const option = document.createElement("option");
        option.value = object.id.toString();
        option.text = object.value;
        objectTypesContainer.appendChild(option);
      });
    }
    objectTypesContainer.addEventListener("change", (e) => {
      e.preventDefault();
      const id = (objectTypesContainer as HTMLSelectElement).value;
      this.resetGroupSection();
      this.removeDefaultQuestions();
      if (Number(id) > 0) {
        this.loadDefaultQuestions(Number(id));
        this.loadGroups(Number(id), "");
      }
    });
  }

  private addFirstItem(select: Element) {
    const firstOption = document.createElement("option");
    firstOption.value = "0";
    firstOption.textContent = "لطفا یکی از موارد را انتخاب کنید";
    select.appendChild(firstOption);
  }

  async loadDefaultQuestions(id: number) {
    const questions = await this.requestJsonAsync(
      `${this._defaultQuestionsUrl}?mid=${id}`,
      "GET"
    );
    let questionsBuiltIn: IQuestionSchemaBuiltIn = questions.sources[0].data[0];

    const board = this.container.querySelector("[data-bc-sm-board]");
    this.createUIElements(board, questionsBuiltIn, true);
  }

  removeDefaultQuestions() {
    const defaultQuestions = this.container
      .querySelector("[data-bc-sm-board]")
      .querySelectorAll("[data-bc-built-in-selector]");
    defaultQuestions.forEach((element) => {
      const moduleId = element
        .closest("[data-bc-module-id]")
        .getAttribute("data-bc-module-id");

      this._modules.forEach((element) => {
        if (element.usedForId == parseInt(moduleId)) {
          this._modules.delete(parseInt(moduleId));
        }
      });

      element.closest("[data-bc-module-id]").remove();
    });
  }

  resetGroupSection() {
    const groupContainer = this.container
      .querySelector("[data-bc-sm-schema-group]")
      .querySelector("[data-bc-requirements-answer]");
    groupContainer.innerHTML = `<select data-bc-sm-schema-group-select data-sys-select-option="" disabled></select>`;
    groupContainer.setAttribute("data-load", "active");
  }

  async loadGroups(
    mid: number,
    parent_hashid: string,
    selectEl?: HTMLSelectElement
  ) {
    const groups = await this.requestJsonAsync(this._groupsUrl, "POST", {
      mid: mid,
      parent_hashid: parent_hashid,
    });

    if (groups.length > 0) {
      if (selectEl) {
        selectEl.nextElementSibling.innerHTML = "";
        selectEl.nextElementSibling.setAttribute("data-load", "active");
      }

      const groupsContainer = this.container.querySelector(
        '[data-bc-sm-schema-group-child][data-load="active"]'
      );
      groupsContainer.innerHTML = "";

      if (parent_hashid != "0") {
        const select = document.createElement("select");
        select.setAttribute("data-bc-sm-schema-group-select", "");
        select.setAttribute("data-sys-select-option", "");
        this.addFirstItem(select);

        groups.forEach((object) => {
          const option = document.createElement("option");
          option.value = object.hashid;
          option.text = object.title;
          select.appendChild(option);
        });

        (select as Element).addEventListener("change", (e) => {
          e.preventDefault();
          this.loadGroups(mid, select.value, select);
        });

        groupsContainer.appendChild(select);
        const div = document.createElement("div");
        div.setAttribute("data-bc-sm-schema-group-child", "");
        div.setAttribute("data-load", "active");
        groupsContainer.appendChild(div);
        groupsContainer.setAttribute("data-load", "");
      }
    }
  }

  async requestJsonAsync(
    url: string,
    method: "POST" | "GET" = "GET",
    data?: object
  ): Promise<any> {
    const init: any = {
      method: method,
    };
    if (data) {
      init.body = JSON.stringify(data);
    }
    const response = await fetch(url, init);
    const result = await response.json();
    return result;
  }
}
