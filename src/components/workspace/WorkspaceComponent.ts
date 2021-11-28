import ISource from "../../basiscore/ISource";
import IUserDefineComponent from "../../basiscore/IUserDefineComponent";
import ComponentBase from "../ComponentBase";
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
    console.log("OnDragOver", ev);
    ev.preventDefault();
  }

  private onDrop(ev: DragEvent) {
    console.log("OnDrop", ev);
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    (ev.target as any).appendChild(document.getElementById(data));
  }

  public initializeAsync(): void | Promise<void> {}
  public runAsync(source?: ISource) {}
}
