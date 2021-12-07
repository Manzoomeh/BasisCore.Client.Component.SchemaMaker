import IContainerModule from "./IContainerModule";
import ToolboxModule from "./base-class/ToolboxModule";
import { IQuestionPart } from "../../basiscore/schema/IQuestionSchema";
import IAnswerSchema from "../../basiscore/schema/IAnswerSchema";
import IUserActionResult from "../../basiscore/schema/IUserActionResult";
import { SchemaUtil } from "../../SchemaUtil";
import IPartBaseModuleDataModel from "./IPartBaseModuleDataModel";

export default abstract class PartBaseModule<
  TModelType extends IPartBaseModuleDataModel
> extends ToolboxModule {
  private static readonly CAPTION_ID = 1;
  private static readonly CSS_CLASS_ID = 2;

  protected abstract readonly data: TModelType;
  protected readonly questionPartModel: IQuestionPart;
  protected readonly schemaId: string;

  constructor(
    layout: string,
    owner: HTMLElement,
    component: IContainerModule,
    schemaId: string,
    questionPart?: IQuestionPart
  ) {
    super(layout, owner, false, component);
    this.schemaId = schemaId;
    this.questionPartModel = questionPart;
  }

  protected getAnswerSchema(): IAnswerSchema {
    var ans: IAnswerSchema = {
      schemaVersion: "1.0",
      schemaId: this.schemaId,
      lastUpdate: "",
      lid: 0,
      usedForId: this.usedForId,
      properties: [
        SchemaUtil.createShortText(
          this.data.caption,
          PartBaseModule.CAPTION_ID
        ),
        SchemaUtil.createShortText(
          this.questionPartModel?.cssClass,
          PartBaseModule.CSS_CLASS_ID
        ),
      ],
    };
    return ans;
  }

  protected update(result: IUserActionResult): void {
    const caption = SchemaUtil.getPropertyValue(
      result,
      PartBaseModule.CAPTION_ID
    );
    if (caption != null) {
      this.data.caption = caption;
    }

    const cssClass = SchemaUtil.getPropertyValue(
      result,
      PartBaseModule.CSS_CLASS_ID
    );
    if (cssClass != null) {
      this.data.cssClass = cssClass;
    }

    console.log(this.questionPartModel);
  }

  //public abstract getPartSchema(part: number): IQuestionPart;

  public getPartSchema(part: number): IQuestionPart {
    const retVal: IQuestionPart = {
      part: part,
      viewType: this.data.viewType,
      cssClass: this.data.cssClass ?? null,
      validations: this.data.validations ?? null,
      caption: this.data.caption ?? null,
      dependency: this.data.dependency ?? null,
      method: this.questionPartModel?.method ?? null,
    };
    return retVal;
  }
}
