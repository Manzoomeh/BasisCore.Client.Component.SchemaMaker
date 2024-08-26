import SchemaUtil from "../../../../SchemaUtil";
import IWorkspaceComponent from "../../../workspace/IWorkspaceComponent";
import TextBaseModule from "../TextBaseModule";
import layout from "./assets/layout.html";
import "./assets/style.css";
import IDateQuestionPart from "./IDateQuestionPart";
import {
  IFixValue,
  IQuestionPart,
  ViewType,
  IAnswerSchema,
  IUserActionResult,
} from "basiscore";

export default class DatePickerModule extends TextBaseModule {
  private readonly TODAY_BUTTON_ID = 3;
  private readonly YEARS_LIST_ID = 4;
  private readonly MONTH_LIST_ID = 5;
  protected readonly RANGE_DATES_ID = 6;
  protected readonly SWITCH_TYPE_ID = 7;
  protected readonly STYLE_ID = 8;

  constructor(
    owner: HTMLElement,
    component: IWorkspaceComponent,
    isABuiltIn: boolean,
    questionPart: IDateQuestionPart
  ) {
    super(
      layout,
      owner,
      component,
      "component.calendar.datepicker",
      isABuiltIn,
      questionPart
    );
    if (questionPart) {
      if (questionPart.options) {
        this.data.options = {
          todayButton: questionPart.options.todayButton,
          yearsList: questionPart.options.yearsList,
          monthList: questionPart.options.monthList,
          rangeDates: questionPart.options.rangeDates,
          switchType: questionPart.options.switchType,
          style: questionPart.options.style,
        };
      }
    }
  }

  protected getAnswerSchema(): IAnswerSchema {
    if (!this.data.options) {
      this.data.options = {};
    }
    var ans = super.getAnswerSchema();
    SchemaUtil.addSimpleValueProperty(
      ans,
      this.data.options.todayButton == true ? 1 : 0,
      this.TODAY_BUTTON_ID
    );
    SchemaUtil.addSimpleValueProperty(
      ans,
      this.data.options.yearsList == true ? 1 : 0,
      this.YEARS_LIST_ID
    );
    SchemaUtil.addSimpleValueProperty(
      ans,
      this.data.options.monthList == true ? 1 : 0,
      this.MONTH_LIST_ID
    );
    SchemaUtil.addSimpleValueProperty(
      ans,
      this.data.options.rangeDates == true ? 1 : 0,
      this.RANGE_DATES_ID
    );
    SchemaUtil.addSimpleValueProperty(
      ans,
      this.data.options.switchType == true ? 1 : 0,
      this.SWITCH_TYPE_ID
    );
    SchemaUtil.addSimpleValueProperty(
      ans,
      this.data.options.style,
      this.STYLE_ID
    );
    return ans;
  }
  public update(userAction: IUserActionResult): void {
    super.update(userAction);
    if (!this.data.options) {
      this.data.options = {};
    }
    this.data.options.monthList =
      SchemaUtil.getPropertyValue(userAction, this.MONTH_LIST_ID) == 1;
    this.data.options.yearsList =
      SchemaUtil.getPropertyValue(userAction, this.YEARS_LIST_ID) == 1;
    this.data.options.rangeDates =
      SchemaUtil.getPropertyValue(userAction, this.RANGE_DATES_ID) == 1;
    this.data.options.todayButton =
      SchemaUtil.getPropertyValue(userAction, this.TODAY_BUTTON_ID) == 1;
    this.data.options.switchType =
      SchemaUtil.getPropertyValue(userAction, this.SWITCH_TYPE_ID) == 1;
    this.data.options.style =
      SchemaUtil.getPropertyValue(userAction, this.STYLE_ID) ?? undefined;
  }
  public getPartSchema(part: number): IQuestionPart {
    const retVal = super.getPartSchema(part);
    if (!this.data.options) this.data.options = {};
    this.data.options.dateProvider = "basisCalendar";
    retVal.options = this.data.options;
    return retVal;
  }
}
