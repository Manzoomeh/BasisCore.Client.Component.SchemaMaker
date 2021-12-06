import IUserDefineComponent from "../../basiscore/IUserDefineComponent";
import ToolboxModule from "./base-class/ToolboxModule";

export default interface IContainerModule {
  getComponent(): IUserDefineComponent;
  onRemove(module: ToolboxModule);
}
