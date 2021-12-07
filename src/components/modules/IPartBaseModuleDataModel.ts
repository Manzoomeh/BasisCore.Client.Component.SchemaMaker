import {
  IDependency,
  IValidationOptions,
  ViewType,
} from "../../basiscore/schema/IQuestionSchema";

export default interface IPartBaseModuleDataModel {
  viewType: string | ViewType;
  cssClass?: string;
  validations?: IValidationOptions;
  caption?: string;
  dependency?: Array<IDependency>;
}
