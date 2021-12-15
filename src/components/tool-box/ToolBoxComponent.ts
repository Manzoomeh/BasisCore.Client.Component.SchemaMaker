import ISource from "../../basiscore/ISource";
import IUserDefineComponent from "../../basiscore/IUserDefineComponent";
import ComponentBase from "../ComponentBase";
import ISchemaMakerSchema from "../ISchemaMakerSchema";
import layout from "./assets/layout.html";
import itemLayout from "./assets/item-layout.html";
import "./assets/style.css";

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
    const container = this.container.querySelector(
      "[data-bc-toolbox-container-list]"
    );
    const part = this.container.querySelector("[data-bc-toolbox-part-list]");
    source.schemas.forEach((schema) => {
      const copyLayout = itemLayout
        .replace("@schemaId", schema.schemaId)
        .replace("@schemaType", schema.schemaType)
        .replace("@title", schema.title);
      const item = this.owner.toNode(copyLayout);
      if (schema.schemaType == "part") {
        part.appendChild(item);
      } else {
        container.appendChild(item);
      }
    });
  }
}
