import { IQuestionPart } from "basiscore";
import IWorkspaceComponent from "../../../workspace/IWorkspaceComponent";
import UploadModule from "../UploadModule";
import layout from "../assets/layout.html";
import "../assets/style.css";

export default class UploadSimpleModule extends UploadModule {
  constructor(
    owner: HTMLElement,
    component: IWorkspaceComponent,
    isABuiltIn: boolean,
    noAccessToEdit: boolean,
    model: IQuestionPart
  ) {
    super(layout, owner, component, "Upload", isABuiltIn, noAccessToEdit, model);
  }
}
