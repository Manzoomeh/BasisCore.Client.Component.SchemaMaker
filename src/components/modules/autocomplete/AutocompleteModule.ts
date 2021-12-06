import IContainerModule from "../IContainerModule";
import ToolboxModule from "../base-class/ToolboxModule";
import layout from "./assets/layout.html";
import "./assets/style.css";
export default class AutocompleteModule extends ToolboxModule {
  constructor(owner: HTMLElement, component: IContainerModule) {
    super(layout, owner, true, component);
  }
}
