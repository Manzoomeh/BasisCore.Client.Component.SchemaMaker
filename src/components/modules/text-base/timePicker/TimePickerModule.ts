import SchemaUtil from "../../../../SchemaUtil";
import IWorkspaceComponent from "../../../workspace/IWorkspaceComponent";
import TextBaseModule from "../TextBaseModule";
import layout from "./assets/layout.html";
import "./assets/style.css";
import ITimeQuestionPart from "./ITimeQuestionPart";
import { IQuestionPart, IAnswerSchema, IUserActionResult } from "basiscore";

export default class TimePickerModule extends TextBaseModule {
  private readonly CLOCK_TYPE_ID = 3;
  constructor(
    owner: HTMLElement,
    component: IWorkspaceComponent,
    isABuiltIn: boolean,
    questionPart: ITimeQuestionPart
  ) {
    super(
      layout,
      owner,
      component,
      "component.bc.timepicker",
      isABuiltIn,
      questionPart
    );
    if (!this.data.options) {
      this.data.options = {};
    }
    if (questionPart) {
      this.data.options.clockType = questionPart.options.clockType;
    }
  }

  protected getAnswerSchema(): IAnswerSchema {
    if (!this.data.options) {
      this.data.options = {};
    }
    var ans = super.getAnswerSchema();
    SchemaUtil.addSimpleValueProperty(
      ans,
      this.data.options.clockType == "24h" ? 1 : 0,
      this.CLOCK_TYPE_ID
    );
    return ans;
  }
  public update(userAction: IUserActionResult): void {
    super.update(userAction);
    if (!this.data.options) {
      this.data.options = {};
    }
    this.data.options.clockType =
      SchemaUtil.getPropertyValue(userAction, this.CLOCK_TYPE_ID) == 1 ? "24h" : "12h";
  }
  public getPartSchema(part: number): IQuestionPart {
    const retVal = super.getPartSchema(part);
    retVal.options = this.data.options;
    return retVal;
  }
}
