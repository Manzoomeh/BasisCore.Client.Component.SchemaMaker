import { IDependency, IValidationOptions, ViewType } from "bclib/dist/bclib";

export default interface IPartBaseModuleDataModel {
  viewType: string | ViewType;
  cssClass?: string;
  validations?: IValidationOptions;
  caption?: string;
  dependency?: Array<IDependency>;
}
