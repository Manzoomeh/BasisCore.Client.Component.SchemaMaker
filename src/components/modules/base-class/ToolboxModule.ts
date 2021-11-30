import "./assets/style.css";
import layout from "./assets/layout.html";
export default class ToolboxModule {
  public readonly owner: HTMLElement;
  public readonly container: Element;

  constructor(template: string, owner: HTMLElement, replace: boolean) {
    this.owner = owner;
    if (replace) {
      this.owner.innerHTML = "";
    }
    const range = new Range();
    this.container = document.createElement("div");
    this.container.appendChild(range.createContextualFragment(layout));

    const moduleContainer = this.container.querySelector(
      "[data-module-container]"
    );
    this.owner.appendChild(this.container);
    if (template?.length > 0) {
      range.setStart(moduleContainer, 0);
      range.setEnd(moduleContainer, 0);

      range.insertNode(range.createContextualFragment(template));

      this.container
        .querySelector("[data-drop-area]")
        ?.addEventListener("dragover", this.onDragOver.bind(this));
    }
    this.container
      .querySelector("[data-btn-remove]")
      .addEventListener("click", (e) => {
        e.preventDefault();
        this.container.remove();
        if (replace) {
          const defaultValue = owner.getAttribute("data-default");
          owner.innerHTML = defaultValue ?? "";
        }
      });
  }

  private onDragOver(ev: DragEvent) {
    const draggedType = ev.dataTransfer.getData("type");
    const acceptableTypes = (ev.target as HTMLElement)?.getAttribute(
      "data-drop-acceptable-type"
    );
    ev.stopPropagation();
    if (
      draggedType &&
      acceptableTypes &&
      acceptableTypes?.indexOf(draggedType) > -1
    ) {
      ev.preventDefault();
    }
  }
}
