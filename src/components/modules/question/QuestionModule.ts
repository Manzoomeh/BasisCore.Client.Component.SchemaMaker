import { IAnswerSchema } from "../../../basiscore/IAnswerSchema";
import { IQuestion } from "../../../basiscore/IQuestionSchema";
import IUserActionResult from "../../../basiscore/IUserActionResult";
import { SchemaUtil } from "../../../SchemaUtil";
import IContainerModule from "../IContainerModule";
import AutocompleteModule from "../autocomplete/AutocompleteModule";
import ToolboxModule from "../base-class/ToolboxModule";
import CheckListModule from "../list-base/check-list/CheckListModule";
import SelectModule from "../list-base/select/SelectModule";
import ContainerModule from "../section/ContainerModule";
import LongTextModule from "../text-base/long-text/LongTextModule";
import ShortTextModule from "../text-base/short-text/ShortTextModule";
import layout from "./assets/layout.html";
import partLayout from "./assets/part-layout.html";
import "./assets/style.css";
import IQuestionModuleDataModel from "./IQuestionModuleDataModel";

export default class QuestionModule extends ContainerModule {
  private static readonly TITLE_ID = 1;
  private static readonly PART_ID = 2;

  private readonly _data: Partial<IQuestionModuleDataModel>;

  get title(): string {
    return this._data.title;
  }

  set title(value: string) {
    this._data.title = value;
    this.container.querySelector("[data-bc-title]").innerHTML = value;
  }

  get part(): number {
    return this._data.part;
  }

  set part(value: number) {
    if (this._data.part != value) {
      this._data.part = value;
      const row = this.container.querySelector("[data-tr]");
      let cols = row.querySelectorAll("td[data-bc-sm-part-container]");
      if (cols.length > value) {
        while (cols.length != value) {
          cols[cols.length - 1].remove();
          cols = row.querySelectorAll("td[data-bc-sm-part-container]");
        }
      } else if (cols.length < value) {
        while (cols.length != value) {
          const col = this.moduleContainer
            .getComponent()
            .toHTMLElement(partLayout);
          row.appendChild(col);
          cols = row.querySelectorAll("td[data-bc-sm-part-container]");
        }
      }
    }
  }

  constructor(
    owner: HTMLElement,
    container: IContainerModule,
    data?: IQuestion
  ) {
    super(layout, owner, container);

    this.container.addEventListener("drop", this.onDrop.bind(this));
    if (data) {
      this._data = SchemaUtil.ToQuestionModuleDataModel(data);
    } else {
      this._data = {};
      this.title = "Question Title";
      this.part = 1;
    }
  }

  protected getAnswerSchema(): IAnswerSchema {
    var ans: IAnswerSchema = {
      schemaVersion: "1.0",
      schemaId: "question",
      lastUpdate: "",
      lid: 0,
      usedForId: this.usedForId,
      properties: [
        SchemaUtil.createShortText(this.title, QuestionModule.TITLE_ID),
        SchemaUtil.createSelect(this.part, QuestionModule.PART_ID),
      ],
    };
    return ans;
  }

  private onDrop(e: DragEvent) {
    e.preventDefault();
    e.stopPropagation();
    var schemaId = e.dataTransfer.getData("schemaId");
    const owner = e.target as HTMLElement;
    const createdModule = this.factory(schemaId, owner);
    if (createdModule) {
      this.modules.push(createdModule);
    }
  }

  private factory(schemaId: string, owner: HTMLElement): ToolboxModule {
    let module: ToolboxModule = null;
    switch (schemaId) {
      case "short-text": {
        module = new ShortTextModule(owner, this.moduleContainer);
        break;
      }
      case "long-text": {
        module = new LongTextModule(owner, this.moduleContainer);
        break;
      }
      case "select": {
        module = new SelectModule(owner, this.moduleContainer);
        break;
      }
      case "check-list": {
        module = new CheckListModule(owner, this.moduleContainer);
        break;
      }
      case "auto-complete": {
        module = new AutocompleteModule(owner, this.moduleContainer);
        break;
      }
    }

    return module;
  }

  protected update(result: IUserActionResult): void {
    const title = SchemaUtil.getPropertyValue(result, QuestionModule.TITLE_ID);
    if (title != null) {
      this.title = title;
    }
    const part = SchemaUtil.getPropertyValue(result, QuestionModule.PART_ID);
    if (part != null) {
      this.part = part;
    }
  }
}
