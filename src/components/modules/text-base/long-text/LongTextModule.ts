import { IQuestionPart } from "../../../../basiscore/schema/IQuestionSchema";
import IContainerModule from "../../IContainerModule";
import TextBaseModule from "../TextBaseModule";
import layout from "./assets/layout.html";
import "./assets/style.css";
export default class LongTextModule extends TextBaseModule {
  constructor(
    owner: HTMLElement,
    component: IContainerModule,
    model: IQuestionPart
  ) {
    super(layout, owner, component, "Textarea", model);
  }
}
