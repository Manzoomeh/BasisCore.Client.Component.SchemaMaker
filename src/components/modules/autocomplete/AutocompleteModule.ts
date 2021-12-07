import IContainerModule from "../IContainerModule";
import layout from "./assets/layout.html";
import "./assets/style.css";
import PartBaseModule from "../PartBaseModule";
import IAutocompleteDataModel from "./IAutocompleteDataModel";
import {
  IQuestionPart,
  ViewType,
} from "../../../basiscore/schema/IQuestionSchema";
import { SchemaUtil } from "../../../SchemaUtil";
export default class AutocompleteModule extends PartBaseModule<IAutocompleteDataModel> {
  private static readonly SCHEMA_ID: ViewType = "Autocomplete";
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
}
