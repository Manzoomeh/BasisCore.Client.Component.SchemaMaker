import IUserDefineComponent from "../../../../basiscore/IUserDefineComponent";
import ToolboxModule from "../../base-class/ToolboxModule";
import TextBaseModule from "../TextBaseModule";
import layout from "./assets/layout.html";
import "./assets/style.css";
export default class ShortTextModule extends TextBaseModule {
  constructor(owner: HTMLElement, component: IUserDefineComponent) {
    super(layout, owner, component);
  }
}
