import PopUpOutPut from "../../popUpOutput";

export default interface IQuestionModuleDataModel {
  titleData : PopUpOutPut,
  title: string | PopUpOutPut;
  part: number;
  multi: boolean;
  cssClass: string;
  help: string;
  useInList?: boolean;
}
