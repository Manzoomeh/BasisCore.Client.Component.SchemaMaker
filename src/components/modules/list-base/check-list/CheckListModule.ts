import { IQuestionPart } from "basiscore";
import IWorkspaceComponent from "../../../workspace/IWorkspaceComponent";
import ListBaseModule from "../ListBaseModule";
import layout from "./assets/layout.html";
import "./assets/style.css";

export default class CheckListModule extends ListBaseModule {
  constructor(
    owner: HTMLElement,
    component: IWorkspaceComponent,
    isABuiltIn: boolean,
    questionPart: IQuestionPart
  ) {
    super(layout, owner, component, "Checklist", isABuiltIn, questionPart);
  }
}
