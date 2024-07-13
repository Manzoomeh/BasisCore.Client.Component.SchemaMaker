import IPartBaseModuleDataModel from "../IPartBaseModuleDataModel";
import IDatepickerOptions from "./date-picker/DatePickerOptions";

export default interface ITextBaseModuleDataModel
  extends IPartBaseModuleDataModel {
  options?: Partial<IDatepickerOptions>
}
