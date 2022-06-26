import IWorkspaceComponent from "../workspace/IWorkspaceComponent";
import ToolboxModule from "./base-class/ToolboxModule";
import {
  IQuestionPart,
  ViewType,
  IAnswerSchema,
  IUserActionResult,
} from "basiscore";
import SchemaUtil from "../../SchemaUtil";
import IPartBaseModuleDataModel from "./IPartBaseModuleDataModel";

export default abstract class PartBaseModule<
  TModelType extends IPartBaseModuleDataModel
> extends ToolboxModule {
  protected readonly data: Partial<TModelType> = {};
  protected readonly questionPartModel: IQuestionPart;
  protected readonly schemaId: ViewType;

  constructor(
    layout: string,
    owner: HTMLElement,
    workspace: IWorkspaceComponent,
    schemaId: ViewType,
    questionPart?: IQuestionPart
  ) {
    super(layout, owner, true, workspace);

    this.schemaId = schemaId;
    this.questionPartModel = questionPart;
    this.data.viewType = schemaId;
    if (questionPart) {
      this.data.viewType = schemaId;
      this.data.caption = questionPart.caption;
      this.data.cssClass = questionPart.cssClass;
      this.data.validations = questionPart.validations;
    }
  }

  protected getAnswerSchema(): IAnswerSchema {
    var ans: IAnswerSchema = {
      schemaVersion: "1.0",
      schemaId: this.schemaId,
      paramUrl: this.schemaId,
      lastUpdate: "",
      lid: 0,
      usedForId: this.usedForId,
      properties: [],
    };
    SchemaUtil.addCaptionProperty(ans, this.data.caption);
    SchemaUtil.addCssClassProperty(ans, this.data.cssClass);
    SchemaUtil.addValidationProperties(ans, this.data.validations);

    return ans;
  }

  public update(result: IUserActionResult): void {
    const caption = SchemaUtil.getCaptionProperty(result);
    if (caption != null) {
      this.data.caption = caption;
    }

    const cssClass = SchemaUtil.getCssClassProperty(result);
    if (cssClass != null) {
      this.data.cssClass = cssClass;
    }
    this.data.validations = SchemaUtil.applyValidationsProperties(
      this.data.validations,
      result
    );
  }

  public getPartSchema(part: number): IQuestionPart {
    const retVal: IQuestionPart = {
      part: part,
      viewType: this.data.viewType.toLowerCase(),
      ...(this.data.cssClass && { cssClass: this.data.cssClass }),
      ...(this.data.validations && { validations: this.data.validations }),
      ...(this.data.caption && { caption: this.data.caption }),
      ...(this.data.dependency && { dependency: this.data.dependency }),
      ...(this.questionPartModel && { method: this.questionPartModel?.method }),
    };
    return retVal;
  }
}
