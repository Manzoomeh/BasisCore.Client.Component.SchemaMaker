import ISource from "../../basiscore/ISource";
import IUserDefineComponent from "../../basiscore/IUserDefineComponent";
import ComponentBase from "../ComponentBase";
import GroupModule from "../modules/section/SectionModule";
import QuestionModule from "../modules/question/QuestionModule";
import ToolboxModule from "../modules/base-class/ToolboxModule";
import layout from "./assets/layout.html";
import "./assets/style.css";
import TextBaseModule from "../modules/text-base/TextBaseModule";

export default class WorkspaceComponent extends ComponentBase {
  private readonly board: HTMLDivElement;
  constructor(owner: IUserDefineComponent) {
    super(owner, layout, "data-bc-sm-toolbox-container");
    this.board = this.container.querySelector("[data-bc-sm-board]");

    this.board.addEventListener("dragover", this.onDragOver.bind(this));
    this.board.addEventListener("drop", this.onDrop.bind(this));
  }

  private onDragOver(e: DragEvent) {
    const draggedType = e.dataTransfer.getData("type");
    const acceptableTypes = (e.target as HTMLElement)?.getAttribute(
      "data-drop-acceptable-type"
    );
    e.stopPropagation();
    if (
      draggedType &&
      acceptableTypes &&
      acceptableTypes?.indexOf(draggedType) > -1
    ) {
      e.preventDefault();
    }
  }

  private onDrop(e: DragEvent) {
    console.log("OnDrop in workspace", e);
    e.preventDefault();
    var moduleType = e.dataTransfer.getData("type");
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
