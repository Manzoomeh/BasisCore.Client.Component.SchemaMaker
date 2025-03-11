import { IQuestionSchema, IUserDefineComponent, SourceId } from "basiscore";
import ToolboxModule from "../modules/base-class/ToolboxModule";
export default interface IWorkspaceComponent {
  getComponent(): IUserDefineComponent;
  onRemove(moduleId: number);
  getModule(moduleId: number): ToolboxModule;
  createUIFromQuestionSchema(question: IQuestionSchema);
  showResult(retVal: IQuestionSchema);
  SourceId: SourceId;
}

export interface IQuestionSchemaBuiltIn extends IQuestionSchema {
  mid: number;
  groupHashId: string;
}
