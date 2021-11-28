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

  private onDrag(e: DragEvent) {
    console.log("Drag start", e);
    const element = e.target as HTMLElement;
    e.dataTransfer.setData("text/plain", element.getAttribute("data-type"));
  }
  public initializeAsync(): void | Promise<void> {}
  public runAsync(source?: ISource) {}
}
