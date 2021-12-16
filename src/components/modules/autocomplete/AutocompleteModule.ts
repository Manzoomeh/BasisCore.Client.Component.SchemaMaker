import IWorkspaceComponent from "../../workspace/IWorkspaceComponent";
import layout from "./assets/layout.html";
import "./assets/style.css";
import PartBaseModule from "../PartBaseModule";
import IAutocompleteDataModel from "./IAutocompleteDataModel";
import {
  IQuestionPart,
  ViewType,
} from "../../../basiscore/schema/IQuestionSchema";
import SchemaUtil from "../../../SchemaUtil";
import IAnswerSchema from "../../../basiscore/schema/IAnswerSchema";
import IUserActionResult from "../../../basiscore/schema/IUserActionResult";

export default class AutocompleteModule extends PartBaseModule<IAutocompleteDataModel> {
  private static readonly SCHEMA_ID: ViewType = "Autocomplete";
  private static readonly URL_ID = 5;
  protected data: Partial<IAutocompleteDataModel>;
  constructor(
    owner: HTMLElement,
    workspace: IWorkspaceComponent,
    questionPart: IQuestionPart
  ) {
    super(layout, owner, workspace, AutocompleteModule.SCHEMA_ID, questionPart);
    if (questionPart) {
      this.data.link = questionPart.link;
    }
  }

  protected getAnswerSchema(): IAnswerSchema {
    var ans = super.getAnswerSchema();
    SchemaUtil.addSimpleValueProperty(
      ans,
      this.data.link,
      AutocompleteModule.URL_ID
    );
    return ans;
  }

  public update(userAction: IUserActionResult): void {
    super.update(userAction);
    this.data.link = SchemaUtil.getPropertyValue(
      userAction,
      AutocompleteModule.URL_ID
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
