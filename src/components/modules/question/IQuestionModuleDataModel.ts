import { IQuestion } from "basiscore";

export default interface IQuestionModuleDataModel {
  title: string;
  part: number;
  multi: boolean;
  cssClass: string;
  help: string;
  useInList?: boolean;
}
export interface IpopUpAnswer {
  value?: string;
  id?: string;
}
export interface IQuestionBuiltIn extends Omit<IQuestion, 'parts'> {
  default?: boolean;
  parts: Array<IQuestionModulePopUpDataModel>;
  titleData : object;
}
export interface IQuestionModulePopUpDataModel
  extends IQuestionModuleDataModel {
  titleData: IpopUpAnswer ;
}
