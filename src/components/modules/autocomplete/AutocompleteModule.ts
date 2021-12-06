import IModuleContainer from "../../workspace/IModuleContainer";
import ToolboxModule from "../base-class/ToolboxModule";
import layout from "./assets/layout.html";
import "./assets/style.css";
export default class AutocompleteModule extends ToolboxModule {
  constructor(owner: HTMLElement, component: IModuleContainer) {
    super(layout, owner, true, component);
  }
}
