import { IQuestionPart } from "basiscore";

export default interface IDateQuestionPart extends IQuestionPart {
  Culture?: string;
  lid?: string;
  yearsList?: boolean;
  monthList?: boolean;
  rangeDates?: boolean;
  switchType?: string;
  Type?: string;
  Mode?: string;
  Style?: string;
}
