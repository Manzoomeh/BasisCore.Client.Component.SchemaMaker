import {
  IAnswerSchema,
  IQuestionSchema,
  IQuestion,
  IUserActionResult,
  HTMLValueType,
} from "basiscore";
import SchemaUtil from "../../../SchemaUtil";
import IWorkspaceComponent from "../../workspace/IWorkspaceComponent";
import ContainerModule from "../ContainerModule";
import layout from "./assets/layout.html";
import partLayout from "./assets/part-layout.html";
import "./assets/style.css";
import IQuestionModuleDataModel from "./IQuestionModuleDataModel";
import PartBaseModule from "../PartBaseModule";
import IPartBaseModuleDataModel from "../IPartBaseModuleDataModel";

export default class QuestionModule extends ContainerModule {
  private static readonly TITLE_ID = 1;
  private static readonly PART_ID = 2;
  private static readonly MULTI_ID = 3;
  private static readonly CSS_CLASS_ID = 4;
  private static readonly HELP_URL_ID = 5;
  private static readonly USE_IN_LIST_ID = 6;
  private static readonly ADD_LOG_ID = 7;

  private readonly _data: Partial<IQuestionModuleDataModel>;
  private readonly _schema: IQuestion;
  titleData: string;
  get sectionId(): number {
    return 0;
  }
  setTitleData() {
    this._data.titleData =
      typeof this._data.title == "string" ? null : this._data.title;
  }
  getTitleData() {
    return this._data.titleData;
  }
  set addToLog(value: boolean) {
    this._data.addToLog = value;
  }
  get addToLog() {
    return this._data.addToLog;
  }
  set logName(value: string) {
    this._data.logName = value;
  }
  get logName(): string {
    return this._data.logName;
  }

  get title(): string | HTMLValueType {
    return this._data.title;
  }

  set title(value: string | HTMLValueType) {
    try {
      this._data.title = JSON.parse(value as string);
    } catch (err) {
      this._data.title = value;
    }
    this.container.querySelector("[data-bc-title]").innerHTML =
      typeof this._data.title == "string"
        ? this._data.title
        : this._data.title?.value;
    this.setTitleData();
  }

  get part(): number {
    return this._data.part;
  }

  set part(value: number) {
    const currentValue = this.container.querySelectorAll(
      "[data-bc-sm-part-container]"
    ).length;
    if (currentValue != value) {
      this._data.part = value;
      const row = this.container.querySelector("[data-tr]");
      let cols = row.querySelectorAll("div[data-bc-sm-part-container]");
      if (cols.length > value) {
        while (cols.length != value) {
          cols[cols.length - 1].remove();
          cols = row.querySelectorAll("div[data-bc-sm-part-container]");
        }
      } else if (cols.length < value) {
        while (cols.length != value) {
          const col = this.workspace.getComponent().toHTMLElement(partLayout);
          col.setAttribute(
            "data-bc-question-part-number",
            (cols.length + 1).toString()
          );
          row.appendChild(col);
          cols = row.querySelectorAll("div[data-bc-sm-part-container]");
        }
      }
    }
  }

  constructor(
    owner: HTMLElement,
    container: IWorkspaceComponent,
    isABuiltIn: boolean,
    data?: IQuestion
  ) {
    super(layout, owner, container);
    this._schema = data;
    if (this._schema) {
      this._data = {
        title: this._schema.title,
        cssClass: this._schema.cssClass,
        help: this._schema.help,
        multi: this._schema.multi,
        useInList: this._schema.useInList,
        part: this._schema.parts?.length,
      };
    } else {
      this._data = {
        multi: false,
        title: "test title",
        part: 1,
        logName : "test title"
      };
    }
    this.title = this._data.title as string;
    //this.titleData = this.getTitleData()
    this.part = this._data.part;
    if (isABuiltIn) {
      this.setBuiltInAttribute(true);
    }
  }

  protected getAnswerSchema(): IAnswerSchema {
    var ans: IAnswerSchema = {
      schemaVersion: "1.0",
      schemaId: "question",
      paramUrl: "question",
      lastUpdate: "",
      lid: 0,
      usedForId: this.usedForId,
      properties: [],
    };
    SchemaUtil.addSimpleValueProperty(ans, this.title, QuestionModule.TITLE_ID);
    SchemaUtil.addSimpleValueProperty(ans, this.part, QuestionModule.PART_ID);
    SchemaUtil.addSimpleValueProperty(
      ans,
      this._data.multi ? "2" : "1",
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
    SchemaUtil.addSimpleValueProperty(
      ans,
      this._data.useInList ? "2" : "1",
      QuestionModule.USE_IN_LIST_ID
    );
    SchemaUtil.addSimpleValuePropertyToSubSchema(
      ans,
      this._data.addToLog ? "1" : null,
      QuestionModule.ADD_LOG_ID,71,this.logName,this.usedForId
    );
    return ans;
  }

  public update(result: IUserActionResult): void {
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

    const useInList = SchemaUtil.getPropertyValue(
      result,
      QuestionModule.USE_IN_LIST_ID
    );
    const addToLog = SchemaUtil.getPropertyValue(
      result,
      QuestionModule.ADD_LOG_ID
    );
    this.addToLog = addToLog ? true : false;
    if (this.addToLog) {
      const subSchema = SchemaUtil.getSubSchema(result, QuestionModule.ADD_LOG_ID);
      this.logName = SchemaUtil.getPropertyValue(
        subSchema,
        71
      )
    }
    if (useInList != null) {
      this._data.useInList = useInList == "2";
    }
  }

  public fillSchema(schema: IQuestionSchema) {
    const sectionId = this.owner
      .closest("[data-drop-acceptable-container-schema-type]")
      .getAttribute("data-bc-section-id");
    const question: IQuestion = {
      ...(this._schema && { prpId: this._schema.prpId }),
      ...(this._schema && { typeId: this._schema.typeId }),
      ...(this._schema && { ord: this._schema.ord }),
      ...(this._schema && { vocab: this._schema.vocab }),
      ...(this._data.title && {
        title:
          typeof this._data.title == "string"
            ? this._data.title
            : this._data.title.value,
      }),
      ...(this._data.titleData && {
        titleData: this.getTitleData(),
      }),

      ...(this._schema && { wordId: this._schema.wordId }),
      ...(this._data.multi && { multi: this._data.multi }),
      ...(sectionId && { sectionId: parseInt(sectionId) }),
      ...(this._data.cssClass && { cssClass: this._data.cssClass }),
      ...(this._data.help && { help: this._data.help }),
      ...(this._data.useInList && { useInList: this._data.useInList }),
      ...(this._data.addToLog && { addToLog: this._data.addToLog }),
      ...(this.logName && {logName : this.logName}),
      parts: null,
    };

    question.parts = this.getChildModules<
      PartBaseModule<IPartBaseModuleDataModel>
    >().map((x, i) => x.getPartSchema(i + 1));

    if (!schema.questions) {
      schema.questions = new Array<IQuestion>();
    }
    schema.questions.push(question);
  }

  protected setBuiltInAttribute(invisible: boolean) {
    if (invisible) {
      super.setBuiltInAttribute(invisible);
      this.owner.querySelector<HTMLButtonElement>(
        "[data-btn-remove]"
      ).style.display = "none";
      this.owner.querySelector<HTMLButtonElement>(
        "[data-btn-setting]"
      ).style.display = "none";
    }
  }
}
