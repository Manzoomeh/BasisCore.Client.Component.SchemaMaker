import IQuestionSchema, {
  IQuestion,
  ISection,
} from "../basiscore/schema/IQuestionSchema";

export default interface ISchemaMakerSchema extends IQuestionSchema {
  schemas: Array<ISchemaMakerQuestion>;
}

export interface ISchemaMakerQuestion {
  schemaId: string;
  schemaType: ModuleType;
  title: string;
  image: string;
  questions: Array<IQuestion>;
  sections: Array<ISection>;
}

export type ModuleType = "question" | "section" | "part";
