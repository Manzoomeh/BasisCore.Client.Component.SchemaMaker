export default interface IQuestionModuleDataModel {
  title: string | {value : string, id : number};
  part: number;
  multi: boolean;
  cssClass: string;
  help: string;
  useInList?: boolean;
}
