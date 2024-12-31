import IWorkspaceComponent from "../../workspace/IWorkspaceComponent";
import "./assets/style.css";
import PartBaseModule from "../PartBaseModule";
import { IAnswerSchema, IQuestionPart, IUserActionResult, ViewType } from "basiscore";
import layout from "./assets/layout.html";
import IUploadModuleDataModel from "./IUploadModuleDataModel";
import SchemaUtil from "../../../SchemaUtil";

export default class UploadModule extends PartBaseModule<IUploadModuleDataModel> {
  constructor(
    layout: string,
    owner: HTMLElement,
    component: IWorkspaceComponent,
    viewType: ViewType,
    isABuiltIn: boolean,
    noAccessToEdit: boolean,
    questionPart: IQuestionPart
  ) {
    super(layout, owner, component, viewType, isABuiltIn, noAccessToEdit, questionPart);
  }

  protected getAnswerSchema(): IAnswerSchema {
    var ans = super.getAnswerSchema();
    SchemaUtil.addMultipleProperty(ans, this.data.multiple);
    return ans;
  }

  public update(userAction: IUserActionResult): void {
    super.update(userAction);
    const multiple = SchemaUtil.getMultipleProperty(userAction);
    if (multiple != null) {
      this.data.multiple = multiple == "1" ? false : true;
    }
  }

  public getPartSchema(part: number): IQuestionPart {
    const retVal = super.getPartSchema(part);
    if (this.data.multiple) {
      retVal.multiple = this.data.multiple;
    }
    return retVal;
  }
}
