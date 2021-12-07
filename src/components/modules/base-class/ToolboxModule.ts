import "./assets/style.css";
import layout from "./assets/layout.html";
import IAnswerSchema from "../../../basiscore/schema/IAnswerSchema";
import IQuestionSchema from "../../../basiscore/schema/IQuestionSchema";
import DefaultSource from "../../SourceId";
import ISchemaMakerComponent from "../../schema-maker/ISchemaMakerComponent";
import IContainerModule from "../IContainerModule";
import IUserActionResult from "../../../basiscore/schema/IUserActionResult";
export default abstract class ToolboxModule {
  private static _id: number = 1000;
  public readonly usedForId: number;
  public readonly owner: HTMLElement;
  public readonly container: Element;
  protected readonly question: IQuestionSchema;
  protected readonly moduleContainer: IContainerModule;
  protected readonly rootComponent: ISchemaMakerComponent;

  constructor(
    template: string,
    owner: HTMLElement,
    replace: boolean,
    container: IContainerModule
  ) {
    this.moduleContainer = container;
    this.rootComponent = this.moduleContainer
      .getComponent()
      .dc.resolve<ISchemaMakerComponent>("schema_maker_component");
    this.usedForId = ToolboxModule._id++;
    this.owner = owner;
    if (replace) {
      this.owner.innerHTML = "";
    }
    const range = new Range();
    this.container = document.createElement("div");
    this.container.appendChild(range.createContextualFragment(layout));

    const moduleContainer = this.container.querySelector(
      "[data-module-container]"
    );
    this.owner.appendChild(this.container);
    if (template?.length > 0) {
      range.setStart(moduleContainer, 0);
      range.setEnd(moduleContainer, 0);

      range.insertNode(range.createContextualFragment(template));
    }
    this.container
      .querySelector("[data-btn-remove]")
      .addEventListener("click", (e) => {
        e.preventDefault();
        this.container.remove();
        this.moduleContainer.onRemove(this);
        if (replace) {
          const defaultValue = owner.getAttribute("data-default");
          owner.innerHTML = defaultValue ?? "";
        }
      });

    this.container
      .querySelector("[data-btn-setting]")
      .addEventListener("click", (e) => {
        e.preventDefault();
        this.rootComponent
          .getOwner()
          .setSource(DefaultSource.DISPLAY_PROPERTY, this.getAnswerSchema());
      });
  }

  protected abstract getAnswerSchema(): IAnswerSchema;

  protected abstract update(userAction: IUserActionResult): void;

  public tryApplyUpdate(userAction: IUserActionResult): boolean {
    let retVal = false;
    if (userAction.usedForId == this.usedForId) {
      this.update(userAction);
      retVal = true;
    }
    return retVal;
  }
}
