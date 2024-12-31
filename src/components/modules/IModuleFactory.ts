import ToolboxModule from "./base-class/ToolboxModule";
import IWorkspaceComponent from "../workspace/IWorkspaceComponent";

export default interface IModuleFactory {
  create(
    schemaId: string,
    owner: HTMLElement,
    container: IWorkspaceComponent,
    isABuiltIn: boolean,
    noAccessToEdit: boolean,
    data?: any,
  ): ToolboxModule;
}
