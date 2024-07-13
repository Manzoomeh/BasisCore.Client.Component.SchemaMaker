import { IQuestionPart } from "basiscore";
import IWorkspaceComponent from "../../../workspace/IWorkspaceComponent";
import TextBaseModule from "../TextBaseModule";
import layout from "./assets/layout.html";
import "./assets/style.css";
import IDateQuestionPart from "./IDateQuestionPart";

export default class DatePickerModule extends TextBaseModule {
  
  private readonly DATE_PROVIDER_ID = 3
  private readonly YEARS_LIST_ID  =4
  private readonly MONTH_LIST_ID  =5
  protected readonly RANGE_DATES_ID = 6
  protected readonly SWITCH_TYPE_ID = 7
  protected readonly TYPE_ID = 8
  protected readonly MODE_ID = 9

  constructor(
    owner: HTMLElement,
    component: IWorkspaceComponent,
    isABuiltIn: boolean,
    questionPart: IDateQuestionPart
  ) {
    super(layout, owner, component, "Datepicker", isABuiltIn, questionPart);
    if(questionPart){
      this.data.options = {
        Culture : questionPart.Culture,
        lid : questionPart.lid,
        yearsList : questionPart.yearsList,
        monthList : questionPart.monthList,
        switchType : questionPart.switchType,
        Type : questionPart.Type,
        Style : questionPart.Style
      }
    }
  }
}
