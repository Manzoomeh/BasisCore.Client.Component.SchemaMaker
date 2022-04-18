import { IQuestionPart } from "bclib/dist/bclib";
import IWorkspaceComponent from "../../../workspace/IWorkspaceComponent";
import TextBaseModule from "../TextBaseModule";
import layout from "./assets/layout.html";
import "./assets/style.css";

export default class LongTextModule extends TextBaseModule {
  constructor(
    owner: HTMLElement,
    component: IWorkspaceComponent,
    model: IQuestionPart
  ) {
    super(layout, owner, component, "Textarea", model);
  }
}
