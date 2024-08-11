import { IFixValue } from "basiscore";
import IPartBaseModuleDataModel from "../IPartBaseModuleDataModel";
import { IFixValueEx } from "../../@types/IFixValueEx";
export default interface IListBaseModuleDataModel
  extends IPartBaseModuleDataModel {
  fixValues?: Array<IFixValueEx|IFixValue>;
  link?: string;
}
