import { IQuestion } from "basiscore";

export default interface IQuestionModuleDataModel {
  title: string;
  part: number;
  multi: boolean;
  cssClass: string;
  help: string;
  useInList?: boolean;
}

export interface IQuestionBuiltIn extends IQuestion {
  default?: boolean
}
