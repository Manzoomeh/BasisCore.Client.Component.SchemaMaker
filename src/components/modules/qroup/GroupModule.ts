import ToolboxModule from "../ToolboxModule";
import layout from "./assets/layout.html";
import "./assets/style.css";
export default class GroupModule extends ToolboxModule {
  constructor(owner: HTMLElement) {
    super(layout, owner);
  }
}
