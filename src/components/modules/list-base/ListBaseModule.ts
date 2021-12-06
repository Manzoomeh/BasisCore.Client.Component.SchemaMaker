import IModuleContainer from "../../workspace/IModuleContainer";
import ToolboxModule from "../base-class/ToolboxModule";
import "./assets/style.css";
export default abstract class ListBaseModule extends ToolboxModule {
  constructor(layout: string, owner: HTMLElement, component: IModuleContainer) {
    super(layout, owner, false, component);
  }
}
