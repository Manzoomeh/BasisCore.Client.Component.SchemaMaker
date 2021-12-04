import { IAnswerSchema } from "../../basiscore/IAnswerSchema";
import IQuestionSchema from "../../basiscore/IQuestionSchema";
import ISource from "../../basiscore/ISource";
import IUserDefineComponent from "../../basiscore/IUserDefineComponent";
import ComponentBase from "../ComponentBase";
import layout from "./assets/layout.html";
import "./assets/style.css";

export default class PropertyBoxComponent
  extends ComponentBase
  implements IPropertyBox
{
  private _sourceId: string;
  private readonly questionSchemaList: Map<string, IQuestionSchema> = new Map<
    string,
    IQuestionSchema
  >();
  constructor(owner: IUserDefineComponent) {
    super(owner, layout, "data-bc-sm-property-container");
    this.owner.dc.registerInstance("property_box", this);
  }

  addQuestionSchema(questionSchema: IQuestionSchema) {
    this.questionSchemaList.set(questionSchema.schemaId, questionSchema);
  }
  editAnswerSchema(scheme: IAnswerSchema) {
    throw new Error("Method not implemented.");
  }

  public async initializeAsync(): Promise<void> {
    this._sourceId = await this.owner.getAttributeValueAsync("DataMemberName");
    this.owner.addTrigger([this._sourceId]);
  }
  public runAsync(source?: ISource) {
    //console.log(source);
  }
}

interface IPropertyBox {
  addQuestionSchema(schema: IQuestionSchema);
  editAnswerSchema(scheme: IAnswerSchema);
}
