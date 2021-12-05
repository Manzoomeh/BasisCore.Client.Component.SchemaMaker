import IUserDefineComponent from "../../../basiscore/IUserDefineComponent";
import AutocompleteModule from "../autocomplete/AutocompleteModule";
import ToolboxModule from "../base-class/ToolboxModule";
import CheckListModule from "../list-base/check-list/CheckListModule";
import SelectModule from "../list-base/select/SelectModule";
import LongTextModule from "../text-base/long-text/LongTextModule";
import ShortTextModule from "../text-base/short-text/ShortTextModule";
import layout from "./assets/layout.html";
import "./assets/style.css";
export default class QuestionModule extends ToolboxModule {
  constructor(owner: HTMLElement, component: IUserDefineComponent) {
    super(layout, owner, false, component);
    this.container.addEventListener("drop", this.onDrop.bind(this));
  }

  private onDrop(e: DragEvent) {
    e.preventDefault();
    e.stopPropagation();
    var schemaId = e.dataTransfer.getData("schemaId");
    const owner = e.target as HTMLElement;
    this.factory(schemaId, owner);
    console.log(schemaId, owner);
  }

  private factory(schemaId: string, owner: HTMLElement): ToolboxModule {
    let retVal: ToolboxModule = null;
    switch (schemaId) {
      case "short-text": {
        retVal = new ShortTextModule(owner, this.component);
        break;
      }
      case "long-text": {
        retVal = new LongTextModule(owner, this.component);
        break;
      }
      case "select": {
        retVal = new SelectModule(owner, this.component);
        break;
      }
      case "check-list": {
        retVal = new CheckListModule(owner, this.component);
        break;
      }
      case "auto-complete": {
        retVal = new AutocompleteModule(owner, this.component);
        break;
      }
    }
    return retVal;
  }
}
