import IDisposable from "../../basiscore/IDisposable";
import ISourceOptions from "../../basiscore/ISourceOptions";
import IUserDefineComponent from "../../basiscore/IUserDefineComponent";
import ComponentBase from "../ComponentBase";
import layout from "./assets/layout.html";
import "./assets/style.css";

export default class SchemaMakerComponent extends ComponentBase {
  private runTask: Promise<IDisposable>;

  constructor(owner: IUserDefineComponent) {
    super(owner, layout, "data-bc-sm-main-container");
  }

  initializeAsync(): void | Promise<void> {}
  runAsync(source?: ISourceOptions) {
    if (!this.runTask) {
      this.runTask = this.owner.processNodesAsync(
        Array.from(this.container.childNodes)
      );
    }
    return this.runTask;
  }
}
