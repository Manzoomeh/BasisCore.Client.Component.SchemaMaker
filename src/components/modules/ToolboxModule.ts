export default class ToolboxModule {
  public readonly owner: HTMLElement;
  public readonly container: Element;

  constructor(layout: string, owner: HTMLElement) {
    this.owner = owner;
    this.container = document.createElement("div");

    this.owner.appendChild(this.container);
    if (layout?.length > 0) {
      const range = new Range();
      range.setStart(this.container, 0);
      range.setEnd(this.container, 0);
      range.insertNode(range.createContextualFragment(layout));
    }
  }
}
