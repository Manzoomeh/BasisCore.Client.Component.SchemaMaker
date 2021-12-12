import { IFixValue } from "../../../basiscore/schema/IQuestionSchema";
import IPartBaseModuleDataModel from "../IPartBaseModuleDataModel";

export default interface IListBaseModuleDataModel
  extends IPartBaseModuleDataModel {
  fixValues?: Array<IFixValue>;
  link?: string;
}
