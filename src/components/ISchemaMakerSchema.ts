import { IQuestionSchema, IQuestion, ISection } from "basiscore";

export default interface ISchemaMakerSchema extends IQuestionSchema {
  schemas: Array<ISchemaMakerQuestion>;
}

export interface ISchemaMakerQuestion {
  schemaId: string;
  paramUrl: string;
  schemaType: ModuleType;
  title: string;
  image: string;
  questions: Array<IQuestion>;
  sections: Array<ISection>;
}

export type ModuleType = "question" | "section" | "part";
