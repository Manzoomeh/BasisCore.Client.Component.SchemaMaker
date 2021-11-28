import ISource from "../../basiscore/ISource";
import IUserDefineComponent from "../../basiscore/IUserDefineComponent";
import ComponentBase from "../ComponentBase";
import GroupModule from "../modules/qroup/GroupModule";
import QuestionModule from "../modules/question/QuestionModule";
import ToolboxModule from "../modules/ToolboxModule";
import layout from "./assets/layout.html";
import "./assets/style.css";

export default class WorkspaceComponent extends ComponentBase {
  private readonly board: HTMLDivElement;
  constructor(owner: IUserDefineComponent) {
    super(owner, layout, "data-bc-sm-toolbox-container");
    this.board = this.container.querySelector("[data-bc-sm-board]");

    this.board.addEventListener("dragover", this.onDragOver.bind(this));
    this.board.addEventListener("drop", this.onDrop.bind(this));
  }

  private onDragOver(ev: DragEvent) {
    //console.log("OnDragOver", ev);
    ev.preventDefault();
  }

  private onDrop(e: DragEvent) {
    console.log("OnDrop", e);
    e.preventDefault();
    var moduleType = e.dataTransfer.getData("text/plain");
    const owner = e.target as HTMLElement;
    this.factory(moduleType, owner);
    console.log(moduleType);
  }

  public initializeAsync(): void | Promise<void> {}
  public runAsync(source?: ISource) {}

  private factory(type: string, owner: HTMLElement): ToolboxModule {
    let retVal: ToolboxModule = null;
    switch (type) {
      case "question": {
        retVal = new QuestionModule(owner);
        break;
      }
      case "group": {
        retVal = new GroupModule(owner);
        break;
      }
    }
    return retVal;
  }
}

export declare type ModuleType = "group" | "question";
