import IAnswerSchema from "../../../basiscore/schema/IAnswerSchema";
import IQuestionSchema, {
  IQuestion,
} from "../../../basiscore/schema/IQuestionSchema";
import IUserActionResult from "../../../basiscore/schema/IUserActionResult";
import SchemaUtil from "../../../SchemaUtil";
import IContainerModule from "../IContainerModule";
import ContainerModule from "../ContainerModule";
import layout from "./assets/layout.html";
import partLayout from "./assets/part-layout.html";
import "./assets/style.css";
import IQuestionModuleDataModel from "./IQuestionModuleDataModel";
import PartBaseModule from "../PartBaseModule";
import IPartBaseModuleDataModel from "../IPartBaseModuleDataModel";

export default class QuestionModule extends ContainerModule<
  PartBaseModule<IPartBaseModuleDataModel>
> {
  private static readonly TITLE_ID = 1;
  private static readonly PART_ID = 2;
  private static readonly MULTI_ID = 3;
  private static readonly CSS_CLASS_ID = 4;
  private static readonly HELP_URL_ID = 5;

  private readonly _data: Partial<IQuestionModuleDataModel>;
  private readonly _schema: IQuestion;

  get id(): number {
    return 0;
  }

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
    this._schema = data;
    if (this._schema) {
      this._data = SchemaUtil.toQuestionModuleDataModel(this._schema);
    } else {
      this._data = {
        multi: false,
      };
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
      properties: [],
    };
    SchemaUtil.addSimpleValueProperty(ans, this.title, QuestionModule.TITLE_ID);
    SchemaUtil.addSimpleValueProperty(ans, this.part, QuestionModule.PART_ID);
    SchemaUtil.addSimpleValueProperty(
      ans,
      this._data.multi,
      QuestionModule.MULTI_ID
    );
    SchemaUtil.addSimpleValueProperty(
      ans,
      this._data.cssClass,
      QuestionModule.CSS_CLASS_ID
    );
    SchemaUtil.addSimpleValueProperty(
      ans,
      this._data.help,
      QuestionModule.HELP_URL_ID
    );
    return ans;
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

    const multi = SchemaUtil.getPropertyValue(result, QuestionModule.MULTI_ID);
    if (multi != null) {
      this._data.multi = multi == "2";
    }

    const cssClass = SchemaUtil.getPropertyValue(
      result,
      QuestionModule.CSS_CLASS_ID
    );
    if (cssClass != null) {
      this._data.cssClass = cssClass;
    }

    const helpUrl = SchemaUtil.getPropertyValue(
      result,
      QuestionModule.HELP_URL_ID
    );
    if (helpUrl != null) {
      this._data.help = helpUrl;
    }
  }

  public fillSchema(schema: IQuestionSchema) {
    const question: IQuestion = {
      ...(this._schema && { prpId: this._schema.prpId }),
      ...(this._schema && { typeId: this._schema.typeId }),
      ...(this._schema && { ord: this._schema.ord }),
      ...(this._schema && { vocab: this._schema.vocab }),
      ...(this._data.title && { title: this._data.title }),
      ...(this._schema && { wordId: this._schema.wordId }),
      ...(this._data.multi && { multi: this._data.multi }),
      ...(this.moduleContainer.id && { sectionId: this.moduleContainer.id }),
      ...(this._data.cssClass && { cssClass: this._data.cssClass }),
      ...(this._data.help && { help: this._data.help }),
      parts: null,
    };
    question.parts = this.modules.map((x, i) => x.getPartSchema(i + 1));
    if (!schema.questions) {
      schema.questions = new Array<IQuestion>();
    }
    schema.questions.push(question);
  }
}
