import { IFixValue } from "bclib/dist/bclib";
import IPartBaseModuleDataModel from "../IPartBaseModuleDataModel";

export default interface IListBaseModuleDataModel
  extends IPartBaseModuleDataModel {
  fixValues?: Array<IFixValue>;
  link?: string;
}
