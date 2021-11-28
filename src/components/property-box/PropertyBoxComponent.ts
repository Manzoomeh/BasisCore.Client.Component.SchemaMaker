import ISource from "../../basiscore/ISource";
import IUserDefineComponent from "../../basiscore/IUserDefineComponent";
import ComponentBase from "../ComponentBase";
import layout from "./assets/layout.html";
import "./assets/style.css";

export default class PropertyBoxComponent extends ComponentBase {
  constructor(owner: IUserDefineComponent) {
    super(owner, layout, "data-bc-sm-property-container");
  }

  public initializeAsync(): void | Promise<void> {}
  public runAsync(source?: ISource) {}
}
