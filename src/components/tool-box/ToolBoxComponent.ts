import ISource from "../../basiscore/ISource";
import IUserDefineComponent from "../../basiscore/IUserDefineComponent";
import ComponentBase from "../ComponentBase";
import ISchemaMakerSchema from "../ISchemaMakerSchema";
import layout from "./assets/layout.html";
import itemLayout from "./assets/item-layout.html";
import "./assets/style.css";
import ISchemaMakerComponent from "../schema-maker/ISchemaMakerComponent";

export default class ToolBoxComponent extends ComponentBase {
  private _sourceId: string;

  constructor(owner: IUserDefineComponent) {
    super(owner, layout, "data-bc-sm-toolbox-container");
  }

  // private p() {
  //   this.container
  //     .querySelectorAll<HTMLElement>("[data-bc-toolbox-item]")
  //     .forEach((item) => {
  //       item.addEventListener("dragstart", this.onDrag.bind(this));
  //     });
  // }

  private onDrag(e: DragEvent) {
    const element = e.target as HTMLElement;
    e.dataTransfer.setData("schemaId", element.getAttribute("data-schema-Id"));
    e.dataTransfer.setData(
      "schemaType",
      element.getAttribute("data-schema-type")
    );
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
    const ul = this.container.querySelector("[data-bc-toolbox-list]");
    source.schemas.forEach((schema) => {
      const copyLayout = itemLayout
        .replace("@schemaId", schema.schemaId)
        .replace("@schemaType", schema.schemaType)
        .replace("@title", schema.title);
      const item = this.owner.toNode(copyLayout);

      ul.appendChild(item);
    });
    ul.querySelectorAll<HTMLElement>("[data-bc-toolbox-item]").forEach(
      (item) => {
        item.addEventListener("dragstart", this.onDrag.bind(this));
      }
    );
  }
}
