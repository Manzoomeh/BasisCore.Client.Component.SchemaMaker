import { IDependency, IQuestionPart, IValidationOptions, ViewType } from "basiscore";

export default interface IPartBaseModuleDataModel {
  viewType: string | ViewType;
  cssClass?: string;
  validations?: IValidationOptions;
  caption?: string;
  dependency?: Array<IDependency>;
  multiple?: boolean;
  uploadToken?: string;
}
export interface IQuestionPartBuiltIn extends IQuestionPart {
  default?: boolean
}
