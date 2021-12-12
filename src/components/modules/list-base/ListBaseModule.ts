import IContainerModule from "../IContainerModule";
import "./assets/style.css";
import PartBaseModule from "../PartBaseModule";
import {
  IQuestionPart,
  ViewType,
} from "../../../basiscore/schema/IQuestionSchema";
import IListBaseModuleDataModel from "./IListBaseModuleDataModel";
import SchemaUtil from "../../../SchemaUtil";
import IAnswerSchema from "../../../basiscore/schema/IAnswerSchema";
import IUserActionResult from "../../../basiscore/schema/IUserActionResult";
export default abstract class ListBaseModule extends PartBaseModule<IListBaseModuleDataModel> {
  private static readonly FIX_VALUES_ID = 4;
  private static readonly URL_ID = 5;
  protected data: IListBaseModuleDataModel;
  constructor(
    layout: string,
    owner: HTMLElement,
    component: IContainerModule,
    schemaId: ViewType,
    questionPart: IQuestionPart
  ) {
    super(layout, owner, component, schemaId, questionPart);
    if (questionPart) {
      this.data = SchemaUtil.toListBaseModuleDataModel(questionPart);
    } else {
      this.data = {
        viewType: schemaId,
      };
    }
  }

  protected getAnswerSchema(): IAnswerSchema {
    var ans = super.getAnswerSchema();
    SchemaUtil.addFixValueProperty(
      ans,
      this.data.fixValues,
      ListBaseModule.FIX_VALUES_ID
    );
    SchemaUtil.addSimpleValueProperty(
      ans,
      this.data.link,
      ListBaseModule.URL_ID
    );
    return ans;
  }

  protected update(userAction: IUserActionResult): void {
    console.log(userAction);
    this.data.fixValues = SchemaUtil.getFixValueProperty(
      userAction,
      this.data.fixValues,
      ListBaseModule.FIX_VALUES_ID
    );

    this.data.link = SchemaUtil.getPropertyValue(
      userAction,
      ListBaseModule.URL_ID
    );
    console.log(this.data);
  }
}
