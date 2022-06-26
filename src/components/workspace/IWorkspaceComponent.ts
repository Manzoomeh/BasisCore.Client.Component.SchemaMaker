import { IUserDefineComponent } from "basiscore";
import ToolboxModule from "../modules/base-class/ToolboxModule";

export default interface IWorkspaceComponent {
  getComponent(): IUserDefineComponent;
  onRemove(moduleId: number);
  getModule(moduleId: number): ToolboxModule;
}
