import ISource from "../../basiscore/ISource";
import IUserDefineComponent from "../../basiscore/IUserDefineComponent";
import ComponentBase from "../ComponentBase";
import layout from "./assets/layout.html";
import "./assets/style.css";

export default class ToolBoxComponent extends ComponentBase {
  constructor(owner: IUserDefineComponent) {
    super(owner, layout, "data-bc-sm-toolbox-container");
    this.p();
  }

  private p() {
    this.container
      .querySelectorAll<HTMLElement>("[data-bc-toolbox-item]")
      .forEach((item) => {
        item.addEventListener("dragstart", this.onDrag.bind(this));
      });
  }

  private onDrag(ev: DragEvent) {
    console.log("Drag start", ev);
    ev.dataTransfer.setData("text", (ev.target as any).id);
  }
  public initializeAsync(): void | Promise<void> {}
  public runAsync(source?: ISource) {}
}
