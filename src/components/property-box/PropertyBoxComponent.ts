import { IAnswerSchema } from "../../basiscore/IAnswerSchema";
import ISource from "../../basiscore/ISource";
import IUserDefineComponent from "../../basiscore/IUserDefineComponent";
import ComponentBase from "../ComponentBase";
import ISchemaMakerSchema, {
  ISchemaMakerQuestion,
} from "../ISchemaMakerSchema";
import DefaultSource from "../SourceId";
import layout from "./assets/layout.html";
import "./assets/style.css";

export default class PropertyBoxComponent extends ComponentBase {
  private _sourceId: string;
  private _source: ISchemaMakerSchema;

  constructor(owner: IUserDefineComponent) {
    super(owner, layout, "data-bc-sm-property-container");
  }

  public async initializeAsync(): Promise<void> {
    const callbackFunction = this.owner.storeAsGlobal(
      this.getSchemaAsync.bind(this),
      "getSchemaAsync"
    );
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
          console.log(source);
        }
      }
    }
  }

  public getSchemaAsync(
    schemaId: string,
    version: string
  ): Promise<ISchemaMakerQuestion> {
    return Promise.resolve(
      this._source.schemas.find((x) => x.schemaId == schemaId)
    );
  }
}
