import { IQuestionPart } from "basiscore";
import IWorkspaceComponent from "../../../workspace/IWorkspaceComponent";
import TextBaseModule from "../TextBaseModule";
import layout from "./assets/layout.html";
import "./assets/style.css";

export default class DatePickerModule extends TextBaseModule {
  constructor(
    owner: HTMLElement,
    component: IWorkspaceComponent,
    model: IQuestionPart
  ) {
    super(layout, owner, component, "Datepicker", model);
  }
}
