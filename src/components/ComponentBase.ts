import {
  IComponentManager,
  ISource,
  IUserDefineComponent,
} from "bclib/dist/bclib";
import IComponentOptions from "./IComponentOptions";

export default abstract class ComponentBase implements IComponentManager {
  protected readonly owner: IUserDefineComponent;
  public readonly container: Element;
  protected readonly options: IComponentOptions;

  constructor(owner: IUserDefineComponent, layout: string, dataAttr: string) {
    this.owner = owner;
    this.container = document.createElement("div");
    this.container.setAttribute(dataAttr, "");
    this.owner.setContent(this.container);
    if (layout?.length > 0) {
      const range = new Range();
      range.setStart(this.container, 0);
      range.setEnd(this.container, 0);
      range.insertNode(range.createContextualFragment(layout));
    }
    this.options = this.owner.getSetting<IComponentOptions>(
      "schema-maker.option",
      null
    );
  }
  public abstract initializeAsync(): Promise<void>;
  public abstract runAsync(source?: ISource): any | Promise<any>;
}
