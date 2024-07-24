import { IQuestionPart } from "basiscore";

export default interface ITimeQuestionPart extends IQuestionPart {
  clockType: "24h" | "12h";
}
