import ListBaseModule from "../ListBaseModule";
import layout from "./assets/layout.html";
import "./assets/style.css";
export default class CheckListModule extends ListBaseModule {
  constructor(owner: HTMLElement) {
    super(layout, owner);
  }
}
