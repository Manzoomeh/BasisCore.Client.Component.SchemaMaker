import { IQuestionPart } from "basiscore";
import IWorkspaceComponent from "../../../workspace/IWorkspaceComponent";
import UploadModule from "../UploadModule";
import layout from "../assets/layout.html";
import "../assets/style.css";

export default class UploadMultiPartModule extends UploadModule {
  constructor(
    owner: HTMLElement,
    component: IWorkspaceComponent,
    model: IQuestionPart
  ) {
    super(layout, owner, component, "Blob", model);
  }
}