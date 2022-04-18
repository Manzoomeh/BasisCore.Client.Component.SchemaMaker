import { IQuestionPart } from "bclib/dist/bclib";
import IWorkspaceComponent from "../../../workspace/IWorkspaceComponent";
import ListBaseModule from "../ListBaseModule";
import layout from "./assets/layout.html";
import "./assets/style.css";

export default class SelectModule extends ListBaseModule {
  constructor(
    owner: HTMLElement,
    component: IWorkspaceComponent,
    questionPart: IQuestionPart
  ) {
    super(layout, owner, component, "Select", questionPart);
  }
}
