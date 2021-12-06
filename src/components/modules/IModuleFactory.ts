import ToolboxModule from "./base-class/ToolboxModule";
import IContainerModule from "./IContainerModule";

export default interface IModuleFactory {
  create(
    schemaId: string,
    owner: HTMLElement,
    container: IContainerModule,
    data?: any
  ): ToolboxModule;
}
