import "./assets/style.css";
import IWorkspaceComponent from "../../workspace/IWorkspaceComponent";
import PartBaseModule from "../PartBaseModule";
import IListBaseModuleDataModel from "./IListBaseModuleDataModel";
import SchemaUtil from "../../../SchemaUtil";
import { IFixValueEx } from "../../@types/IFixValueEx";
import {
  IFixValue,
  IQuestionPart,
  ViewType,
  IAnswerSchema,
  IUserActionResult,
} from "basiscore";

export default abstract class ListBaseModule extends PartBaseModule<IListBaseModuleDataModel> {
  private static readonly FIX_VALUES_ID = 4;
  private static readonly URL_ID = 5;
  protected data: Partial<IListBaseModuleDataModel>;
  constructor(
    layout: string,
    owner: HTMLElement,
    component: IWorkspaceComponent,
    schemaId: ViewType |string,
    isABuiltIn: boolean,
    noAccessToEdit: boolean,
    questionPart: IQuestionPart
  ) {
    super(layout, owner, component, schemaId, isABuiltIn, noAccessToEdit, questionPart);
    if (questionPart) {
      this.data.link = questionPart.link;
      this.data.fixValues = questionPart.fixValues;
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

  public update(userAction: IUserActionResult): void {
    super.update(userAction);
    this.data.fixValues = SchemaUtil.getFixValueProperty(
      userAction,
      this.data.fixValues ? this.data.fixValues.map((fixedValue,index)=>{
        return {
          ...fixedValue,priority : index + 1
        }
      }) : null ,
      ListBaseModule.FIX_VALUES_ID
    );

    this.data.link = SchemaUtil.getPropertyValue(
      userAction,
      ListBaseModule.URL_ID
    );
  }

  public getPartSchema(part: number): IQuestionPart {
    const retVal = super.getPartSchema(part);
    if (this.data.fixValues) {
      retVal.fixValues = this.data.fixValues.map(
        (item, index) =>
          <IFixValueEx>{
            id: item.id ?? -1 * (index + 1),
            value: item.value,
            valueData: "valueData" in item ? item.valueData:undefined,
            schema: item.schema,
            selected: item.selected,
          }
      );
    }
    if (this.data.link) {
      retVal.link = this.data.link;
    }
    return retVal;
  }
}
