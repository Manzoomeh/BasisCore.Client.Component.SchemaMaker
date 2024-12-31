import { IAnswerSchema, IQuestionPart, IUserActionResult } from "basiscore";
import IWorkspaceComponent from "../../../workspace/IWorkspaceComponent";
import UploadModule from "../UploadModule";
import layout from "../assets/layout.html";
import "../assets/style.css";
import SchemaUtil from "../../../../SchemaUtil";

export default class UploadMultiPartModule extends UploadModule {
  constructor(
    owner: HTMLElement,
    component: IWorkspaceComponent,
    isABuiltIn: boolean,
    noAccessToEdit: boolean,
    model: IQuestionPart
  ) {
    super(layout, owner, component, "Blob", isABuiltIn, noAccessToEdit, model);
  }

  protected getAnswerSchema(): IAnswerSchema {
    var ans = super.getAnswerSchema();
    SchemaUtil.addUploadTokenProperty(ans, this.data.uploadToken);
    return ans;
  }

  public update(userAction: IUserActionResult): void {
    super.update(userAction);
    
    const uploadToken = SchemaUtil.getUploadTokenProperty(userAction);
    if (uploadToken != null) {
      this.data.uploadToken = uploadToken;
    }
  }

  public getPartSchema(part: number): IQuestionPart {
    const retVal = super.getPartSchema(part);
    if (this.data.multiple) {
      retVal.multiple = this.data.multiple;
    }
    if (this.data.uploadToken) {
      retVal.uploadToken = this.data.uploadToken;
    }
    return retVal;
  }
}
