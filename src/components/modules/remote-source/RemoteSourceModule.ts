import IWorkspaceComponent from "../../workspace/IWorkspaceComponent";
import PartBaseModule from "../PartBaseModule";
import IRemoteSourceDataModel from "./IRemoteSourceDataModel";
import SchemaUtil from "../../../SchemaUtil";
import {
  IQuestionPart,
  ViewType,
  IAnswerSchema,
  IUserActionResult,
} from "basiscore";

export default class RemoteSourceModule extends PartBaseModule<IRemoteSourceDataModel> {
  private static readonly URL_ID = 5;
  protected data: Partial<IRemoteSourceDataModel>;
  constructor(
    layout: string,
    owner: HTMLElement,
    workspace: IWorkspaceComponent,
    viewType: ViewType | string,
    isABuiltIn: boolean,
    noAccessToEdit: boolean,
    questionPart: IQuestionPart
  ) {
    super(layout, owner, workspace, viewType, isABuiltIn, noAccessToEdit, questionPart);
    if (questionPart) {
      this.data.link = questionPart.link;
    }
  }

  protected getAnswerSchema(): IAnswerSchema {
    var ans = super.getAnswerSchema();
    SchemaUtil.addSimpleValueProperty(
      ans,
      this.data.link,
      RemoteSourceModule.URL_ID
    );
    return ans;
  }

  public update(userAction: IUserActionResult): void {
    super.update(userAction);
    this.data.link = SchemaUtil.getPropertyValue(
      userAction,
      RemoteSourceModule.URL_ID
    );
  }

  public getPartSchema(part: number): IQuestionPart {
    const retVal = super.getPartSchema(part);
    if (this.data.link) {
      retVal.link = this.data.link;
    }
    return retVal;
  }
}
