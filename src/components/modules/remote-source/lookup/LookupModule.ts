import { IQuestionPart } from "../../../../basiscore/schema/IQuestionSchema";
import IWorkspaceComponent from "../../../workspace/IWorkspaceComponent";
import RemoteSourceModule from "../RemoteSourceModule";
import layout from "./assets/layout.html";
import "./assets/style.css";

export default class LookupModule extends RemoteSourceModule {
  constructor(
    owner: HTMLElement,
    workspace: IWorkspaceComponent,
    questionPart: IQuestionPart
  ) {
    super(layout, owner, workspace, "Lookup", questionPart);
  }
}
