import IWorkspaceComponent from "../../workspace/IWorkspaceComponent";
import "./assets/style.css";
import PartBaseModule from "../PartBaseModule";
import { IQuestionPart, ViewType } from "basiscore";
import layout from "./assets/layout.html";
import IUploadModuleDataModel from "./IUploadModuleDataModel";

export default class UploadModule extends PartBaseModule<IUploadModuleDataModel> {
  constructor(
    owner: HTMLElement,
    component: IWorkspaceComponent,
    questionPart: IQuestionPart
  ) {
    super(layout, owner, component, "Upload", questionPart);
  }
}
