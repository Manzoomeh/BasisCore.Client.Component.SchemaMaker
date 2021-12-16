import IContainerModule from "../IContainerModule";
import "./assets/style.css";
import PartBaseModule from "../PartBaseModule";
import {
  IQuestionPart,
  ViewType,
} from "../../../basiscore/schema/IQuestionSchema";
import ITextBaseModuleDataModel from "./ITextBaseModuleDataModel";

export default abstract class TextBaseModule extends PartBaseModule<ITextBaseModuleDataModel> {
  protected readonly data: Partial<ITextBaseModuleDataModel>;
  constructor(
    layout: string,
    owner: HTMLElement,
    component: IContainerModule,
    viewType: ViewType,
    questionPart: IQuestionPart
  ) {
    super(layout, owner, component, viewType, questionPart);
  }
}
