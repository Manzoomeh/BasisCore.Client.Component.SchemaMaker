import { IQuestionPart } from "basiscore";

export default interface IDateQuestionPart extends IQuestionPart {
  todayButton: boolean;
  yearsList: boolean;
  monthList: boolean;
  rangeDates: boolean;
  switchType: boolean;
  style: string;
}
