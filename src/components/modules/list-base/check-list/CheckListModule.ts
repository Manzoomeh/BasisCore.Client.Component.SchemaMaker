import IModuleContainer from "../../../workspace/IModuleContainer";
import ListBaseModule from "../ListBaseModule";
import layout from "./assets/layout.html";
import "./assets/style.css";
export default class CheckListModule extends ListBaseModule {
  constructor(owner: HTMLElement, component: IModuleContainer) {
    super(layout, owner, component);
  }
}
