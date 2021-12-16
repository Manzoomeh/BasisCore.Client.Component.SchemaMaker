import ToolboxModule from "./base-class/ToolboxModule";
import IWorkspaceComponent from "../workspace/IWorkspaceComponent";

export default interface IModuleFactory {
  create(
    schemaId: string,
    owner: HTMLElement,
    container: IWorkspaceComponent,
    data?: any
  ): ToolboxModule;
}
