export default interface IQuestionModuleDataModel {
  title: string;
  part: number;
  multi: boolean;
  cssClass: string;
  help: string;
  use_in_list?: boolean;
}
