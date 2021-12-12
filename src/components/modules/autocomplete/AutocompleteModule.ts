import IContainerModule from "../IContainerModule";
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
  protected data: IAutocompleteDataModel;
  constructor(
    owner: HTMLElement,
    component: IContainerModule,
    questionPart: IQuestionPart
  ) {
    super(layout, owner, component, AutocompleteModule.SCHEMA_ID, questionPart);
    if (questionPart) {
      this.data = SchemaUtil.toAutocompleteModuleDataModel(questionPart);
    } else {
      this.data = {
        viewType: AutocompleteModule.SCHEMA_ID,
      };
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

  protected update(userAction: IUserActionResult): void {
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
