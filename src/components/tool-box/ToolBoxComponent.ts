import ISource from "../../basiscore/ISource";
import IUserDefineComponent from "../../basiscore/IUserDefineComponent";
import ComponentBase from "../ComponentBase";
import ISchemaMakerSchema from "../ISchemaMakerSchema";
import layout from "./assets/layout.html";
import itemLayout from "./assets/item-layout.html";
import "./assets/style.css";
import tempSchemasJson from "../tempSchemasJson"

export default class ToolBoxComponent extends ComponentBase {
  private _sourceId: string;

  constructor(owner: IUserDefineComponent) {
    super(owner, layout, "data-bc-sm-toolbox-container");
  }

  public async initializeAsync(): Promise<void> {
    this._sourceId = await this.owner.getAttributeValueAsync("DataMemberName");
    this.owner.addTrigger([this._sourceId]);
  }

  public runAsync(source?: ISource) {
    if (source?.id == this._sourceId) {
      const schema = source.rows[0] as ISchemaMakerSchema;
      this.crateUI(schema);
    }
  }

  private crateUI(source: ISchemaMakerSchema) {
    // add event click to icon
    this.container
      .querySelector("[data-bc-toolbox-icon]")
      .addEventListener("click", (e) => {
        e.preventDefault();
        const modeContainer = this.container.querySelector("[data-bc-toolbox-container]");
        const mode = modeContainer.getAttribute("data-bc-toolbox-mode");
        if (mode == "show") {
          modeContainer.setAttribute("data-bc-toolbox-mode", "");
        } else {
          modeContainer.setAttribute("data-bc-toolbox-mode", "show");
        }
      });

    const container = this.container.querySelector(
      "[data-bc-toolbox-container-list]"
    );
    const part = this.container.querySelector("[data-bc-toolbox-part-list]");
    (source.schemas ? source.schemas : tempSchemasJson).forEach((schema) => {
      const copyLayout = itemLayout
        .replace("@schemaId", schema.schemaId.toLowerCase())
        .replace("@schemaType", schema.schemaType.toLowerCase())
        .replace("@title", schema.title)
        .replace("@image", schema.image);
      const item = this.owner.toNode(copyLayout);
      if (schema.schemaType == "part") {
        part.appendChild(item);
      } else {
        container.appendChild(item);
      }
    });
  }
}
