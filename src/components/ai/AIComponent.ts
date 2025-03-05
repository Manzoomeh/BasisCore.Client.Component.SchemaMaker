import { ISource, IUserDefineComponent } from "basiscore";
import ComponentBase from "../ComponentBase";
import ISchemaMakerSchema from "../ISchemaMakerSchema";
import layout from "./assets/layout.html";
import itemLayout from "./assets/item-layout.html";
import "./assets/style.css";
import tempSchemasJson from "../tempSchemasJson";

export default class AIcomponent extends ComponentBase {
  private _sourceId: string;

  constructor(owner: IUserDefineComponent) {
    super(owner, layout, "data-bc-sm-toolbox-container");
  }

  public async initializeAsync(): Promise<void> {

  }

  public runAsync(source?: ISource) {
    if (source?.id == this._sourceId) {

    }
  }

  
}
