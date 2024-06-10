import { HTMLValueType } from "basiscore";


export default interface IQuestionModuleDataModel {
  titleData : HTMLValueType,
  title: string | HTMLValueType;
  part: number;
  multi: boolean;
  cssClass: string;
  help: string;
  useInList?: boolean;
}
