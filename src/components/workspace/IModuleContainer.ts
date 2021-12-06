import IUserDefineComponent from "../../basiscore/IUserDefineComponent";
import ToolboxModule from "../modules/base-class/ToolboxModule";

export default interface IModuleContainer {
  getComponent(): IUserDefineComponent;
  onRemove(module: ToolboxModule);
}
