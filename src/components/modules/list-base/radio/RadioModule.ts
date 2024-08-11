import { IQuestionPart } from "basiscore";
import IWorkspaceComponent from "../../../workspace/IWorkspaceComponent";
import ListBaseModule from "../ListBaseModule";
import layout from "./assets/layout.html";
import "./assets/style.css";

export default class RadioModule extends ListBaseModule {
  constructor(
    owner: HTMLElement,
    component: IWorkspaceComponent,
    isABuiltIn: boolean,
    questionPart: IQuestionPart,
    isAdvanced : boolean
  ) {
    super(layout, owner, component, isAdvanced ? "advancedRadio" : "Radio", isABuiltIn, questionPart);
  }
}
