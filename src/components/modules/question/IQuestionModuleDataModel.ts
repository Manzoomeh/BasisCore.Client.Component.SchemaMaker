export default interface IQuestionModuleDataModel {
  titleData : {value : string, id : number},
  title: string | {value : string, id : number};
  part: number;
  multi: boolean;
  cssClass: string;
  help: string;
  useInList?: boolean;
}
