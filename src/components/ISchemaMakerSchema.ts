import IQuestionSchema, {
  IQuestion,
  ISection,
} from "../basiscore/IQuestionSchema";

export default interface ISchemaMakerSchema extends IQuestionSchema {
  schemas: Array<ISchemaMakerQuestion>;
}

export interface ISchemaMakerQuestion {
  schemaId: string;
  schemaType: string;
  title: string;
  image: string;
  questions: Array<IQuestion>;
  sections: Array<ISection>;
}
