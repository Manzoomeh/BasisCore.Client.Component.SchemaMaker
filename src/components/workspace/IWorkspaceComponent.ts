import { IQuestionSchema, IUserDefineComponent } from "basiscore";
import ToolboxModule from "../modules/base-class/ToolboxModule";

export default interface IWorkspaceComponent {
  getComponent(): IUserDefineComponent;
  onRemove(moduleId: number);
  getModule(moduleId: number): ToolboxModule;
}

export interface IQuestionSchemaBuiltIn extends IQuestionSchema {
  mid: number;
  groupHashId: string;
}