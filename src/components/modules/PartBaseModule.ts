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
  protected readonly schemaId: ViewType | string;

  constructor(
    layout: string,
    owner: HTMLElement,
    workspace: IWorkspaceComponent,
    schemaId: ViewType | string,
    isABuiltIn: boolean,
    questionPart?: IQuestionPart
  ) {
    super(layout, owner, true, workspace);

    this.schemaId = schemaId;
    this.questionPartModel = questionPart;
    this.data.viewType = schemaId;
    if (questionPart) {
      this.data.viewType = schemaId;
      this.data.caption =
        typeof questionPart.caption == "string"
          ? questionPart.caption
          : questionPart.caption
          ? 
           "value" in questionPart.caption && questionPart.caption["value"]
          : undefined;
      this.data["captionData"] =
        typeof this.data.caption == "string"
          ? null
          : this.data.caption
          ? this.data.caption
          : undefined;
      this.data.cssClass = questionPart.cssClass;
      this.data.multiple = questionPart.multiple;
      this.data.validations = questionPart.validations;
      this.data.disabled = questionPart.disabled;
    }

    if (isABuiltIn) {
      this.setBuiltInAttribute(true);
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
    SchemaUtil.addCaptionProperty(
      ans,
      this.data["captionData"] ? JSON.stringify(this.data["captionData"]) : this.data.caption
    );
    SchemaUtil.addCssClassProperty(ans, this.data.cssClass);
    SchemaUtil.addValidationProperties(ans, this.data.validations);
    SchemaUtil.addDisabledProperty(ans, this.data.disabled);
    return ans;
  }

  public update(result: IUserActionResult): void {
    const caption = SchemaUtil.getCaptionProperty(result);
    if (caption != null) {
      this.data.caption = caption;
      if (typeof caption != "string") {
        this.data.caption = caption.value;
        this.data["captionData"]= caption;
      }
    }
    const placeHolder = SchemaUtil.getPlaceHolderProperty(result);
    if (placeHolder != null) {
      this.data.placeHolder = placeHolder;
    }
    const disabled = SchemaUtil.getDisabledProperty(result);
    if (disabled != null) {
      this.data.disabled = disabled;
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
    let lowerCaseViewType = this.data.viewType.toLowerCase();
    const retVal: IQuestionPart = {
      part: part,
      viewType:
        lowerCaseViewType == "advancedselect"
          ? "select"
          : lowerCaseViewType == "advancedradio"
          ? "radio"
          : lowerCaseViewType == "advancedchecklist"
          ? "checklist"
          : lowerCaseViewType,
      ...(this.data.cssClass && { cssClass: this.data.cssClass }),
      ...(this.data.validations && { validations: this.data.validations }),
      ...(this.data.caption && { caption: this.data.caption }),
      ...(this.data["captionData"] && { captionData: this.data["captionData"] }),
      ...(this.data.placeHolder && { placeHolder: this.data.placeHolder }),
      ...(this.data.disabled && { disabled: this.data.disabled }),
      ...(this.data.dependency && { dependency: this.data.dependency }),
      ...(this.questionPartModel && {
        method: this.questionPartModel?.method,
      }),
    };
    return retVal;
  }

  protected setBuiltInAttribute(invisible: boolean) {
    if (invisible) {
      super.setBuiltInAttribute(invisible);
      this.owner.querySelector<HTMLButtonElement>(
        "[data-btn-handler]"
      ).style.display = "none";
      this.owner.querySelector<HTMLButtonElement>(
        "[data-btn-remove]"
      ).style.display = "none";
      this.owner.querySelector<HTMLButtonElement>(
        "[data-btn-setting]"
      ).style.display = "none";
    }
  }
}
