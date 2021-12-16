import IAnswerSchema from "../../basiscore/schema/IAnswerSchema";
import ISource from "../../basiscore/ISource";
import IUserDefineComponent from "../../basiscore/IUserDefineComponent";
import ComponentBase from "../ComponentBase";
import ISchemaMakerSchema, {
  ISchemaMakerQuestion,
} from "../ISchemaMakerSchema";
import ISchemaMakerComponent from "../schema-maker/ISchemaMakerComponent";
import DefaultSource from "../SourceId";
import layout from "./assets/layout.html";
import "./assets/style.css";

export default class PropertyBoxComponent extends ComponentBase {
  private _sourceId: string;
  private _source: ISchemaMakerSchema;
  private readonly _rootComponent: ISchemaMakerComponent;

  constructor(owner: IUserDefineComponent) {
    super(owner, layout, "data-bc-sm-property-container");
    this._rootComponent = owner.dc.resolve<ISchemaMakerComponent>(
      "schema_maker_component"
    );
  }

  public async initializeAsync(): Promise<void> {
    const callbackFunction = this.owner.storeAsGlobal(
      this.getSchemaAsync.bind(this)
    );
    this.container
      .querySelector("[schemaCallback]")
      ?.setAttribute("schemaCallback", callbackFunction);
    this._sourceId = await this.owner.getAttributeValueAsync("DataMemberName");
    this.owner.addTrigger([
      this._sourceId,
      DefaultSource.DISPLAY_PROPERTY,
      "SchemaMakerComponent_PropertyBoxComponent.answer",
    ]);
    this.owner.processNodesAsync(Array.from(this.container.childNodes));
  }

  public runAsync(source?: ISource) {
    if (source) {
      switch (source.id) {
        case this._sourceId: {
          this._source = source.rows[0] as ISchemaMakerSchema;
          break;
        }
        case DefaultSource.DISPLAY_PROPERTY: {
          const answer = source.rows[0] as IAnswerSchema;
          this.owner.setSource(
            "SchemaMakerComponent_PropertyBoxComponent.question",
            answer
          );
          break;
        }
        case "schemamakercomponent_propertyboxcomponent.answer": {
          this._rootComponent
            .getOwner()
            .setSource(DefaultSource.PROPERTY_RESULT, source.rows[0]);
          this.owner.setSource(
            "SchemaMakerComponent_PropertyBoxComponent.question",
            null
          );
        }
      }
    }
  }

  public getSchemaAsync(
    context: any,
    schemaId: string,
    version: string,
    lid: number
  ): Promise<ISchemaMakerQuestion> {
    schemaId = schemaId.toLowerCase();
    return Promise.resolve(
      this._source.schemas.find((x) => x.schemaId.toLowerCase() == schemaId)
    );
  }
}
