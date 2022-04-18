import IWorkspaceComponent from "../../workspace/IWorkspaceComponent";
import "./assets/style.css";
import PartBaseModule from "../PartBaseModule";
import { IQuestionPart, ViewType } from "bclib/dist/bclib";
import ITextBaseModuleDataModel from "./ITextBaseModuleDataModel";

export default abstract class TextBaseModule extends PartBaseModule<ITextBaseModuleDataModel> {
  protected readonly data: Partial<ITextBaseModuleDataModel>;
  constructor(
    layout: string,
    owner: HTMLElement,
    component: IWorkspaceComponent,
    viewType: ViewType,
    questionPart: IQuestionPart
  ) {
    super(layout, owner, component, viewType, questionPart);
  }
}
