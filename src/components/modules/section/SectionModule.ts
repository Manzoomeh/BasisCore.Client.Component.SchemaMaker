import ToolboxModule from "../base-class/ToolboxModule";
import layout from "./assets/layout.html";
import "./assets/style.css";
export default class SectionModule extends ToolboxModule {
  constructor(owner: HTMLElement) {
    super(layout, owner, false);
  }
}
