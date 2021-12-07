import IContainerModule from "../IContainerModule";
import "./assets/style.css";
import PartBaseModule from "../PartBaseModule";
import {
  IQuestionPart,
  ViewType,
} from "../../../basiscore/schema/IQuestionSchema";
import IListBaseModuleDataModel from "./IListBaseModuleDataModel";
import { SchemaUtil } from "../../../SchemaUtil";
export default abstract class ListBaseModule extends PartBaseModule<IListBaseModuleDataModel> {
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
}
