import { IQuestionPart } from "basiscore";
import IWorkspaceComponent from "../../../workspace/IWorkspaceComponent";
import TextBaseModule from "../TextBaseModule";
import layout from "./assets/layout.html";
import "./assets/style.css";

export default class ShortTextModule extends TextBaseModule {
  constructor(
    owner: HTMLElement,
    component: IWorkspaceComponent,
    isABuiltIn: boolean,
    noAccessToEdit: boolean,
    model: IQuestionPart
  ) {
    super(layout, owner, component, "Text", isABuiltIn, noAccessToEdit, model);
  }
}
