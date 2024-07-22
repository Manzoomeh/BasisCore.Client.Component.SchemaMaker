import { IQuestionPart } from "basiscore";
import IWorkspaceComponent from "../../../workspace/IWorkspaceComponent";
import ListBaseModule from "../ListBaseModule";
import layout from "./assets/layout.html";
import "./assets/style.css";

export default class SelectModule extends ListBaseModule {
  constructor(
    owner: HTMLElement,
    component: IWorkspaceComponent,
    isABuiltIn: boolean,
    questionPart: IQuestionPart,
    isAdvanced : boolean
  ) {
    //@ts-ignore
    super(layout, owner, component, isAdvanced ? "advancedSelect":"Select", isABuiltIn, questionPart);
  }
}
