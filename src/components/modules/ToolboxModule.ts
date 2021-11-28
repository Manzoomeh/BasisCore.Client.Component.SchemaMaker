export default class ToolboxModule {
  public readonly owner: HTMLElement;
  constructor(layout: string, owner: HTMLElement) {
    this.owner = owner;
  }
}
