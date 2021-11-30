import AutocompleteModule from "../autocomplete/AutocompleteModule";
import ToolboxModule from "../base-class/ToolboxModule";
import CheckListModule from "../list-base/check-list/CheckListModule";
import SelectModule from "../list-base/select/SelectModule";
import LongTextModule from "../text-base/long-text/LongTextModule";
import ShortTextModule from "../text-base/short-text/ShortTextModule";
import layout from "./assets/layout.html";
import "./assets/style.css";
export default class QuestionModule extends ToolboxModule {
  constructor(owner: HTMLElement) {
    super(layout, owner, false);
    this.container.addEventListener("drop", this.onDrop.bind(this));
  }

  private onDrop(e: DragEvent) {
    e.preventDefault();
    e.stopPropagation();
    var moduleType = e.dataTransfer.getData("class");
    const owner = e.target as HTMLElement;
    this.factory(moduleType, owner);
    console.log(moduleType, owner);
  }

  private factory(type: string, owner: HTMLElement): ToolboxModule {
    let retVal: ToolboxModule = null;
    switch (type) {
      case "short-text": {
        retVal = new ShortTextModule(owner);
        break;
      }
      case "long-text": {
        retVal = new LongTextModule(owner);
        break;
      }
      case "select": {
        retVal = new SelectModule(owner);
        break;
      }
      case "check-list": {
        retVal = new CheckListModule(owner);
        break;
      }
      case "auto-complete": {
        retVal = new AutocompleteModule(owner);
        break;
      }
    }
    return retVal;
  }
}
