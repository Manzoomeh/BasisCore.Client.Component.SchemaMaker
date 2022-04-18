import { IQuestionPart } from "bclib/dist/bclib";
import IWorkspaceComponent from "../../../workspace/IWorkspaceComponent";
import RemoteSourceModule from "../RemoteSourceModule";
import layout from "./assets/layout.html";
import "./assets/style.css";

export default class AutocompleteModule extends RemoteSourceModule {
  constructor(
    owner: HTMLElement,
    workspace: IWorkspaceComponent,
    questionPart: IQuestionPart
  ) {
    super(layout, owner, workspace, "Autocomplete", questionPart);
  }
}
