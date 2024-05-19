import { IQuestionPart } from "basiscore";
import IWorkspaceComponent from "../../../workspace/IWorkspaceComponent";
import RemoteSourceModule from "../RemoteSourceModule";
import layout from "./assets/layout.html";
import "./assets/style.css";

export default class LookupModule extends RemoteSourceModule {
  constructor(
    owner: HTMLElement,
    workspace: IWorkspaceComponent,
    isABuiltIn: boolean,
    questionPart: IQuestionPart
  ) {
    super(layout, owner, workspace, "Lookup", isABuiltIn, questionPart);
  }
}
