/// <reference path="../../@types/typings.d.ts" />
import "./assets/style.css";
import layout from "./assets/layout.html";
import { IAnswerSchema, IQuestionSchema, IUserActionResult } from "basiscore";
import DefaultSource from "../../SourceId";
import ISchemaMakerComponent from "../../schema-maker/ISchemaMakerComponent";
import IWorkspaceComponent from "../../workspace/IWorkspaceComponent";

export default abstract class ToolboxModule {
  private static _id: number = -1;
  public readonly usedForId: number;
  public readonly owner: HTMLElement;
  public readonly container: Element;
  protected readonly question: IQuestionSchema;
  protected readonly workspace: IWorkspaceComponent;
  protected readonly rootComponent: ISchemaMakerComponent;

  constructor(
    template: string,
    owner: HTMLElement,
    replace: boolean,
    workspace: IWorkspaceComponent
  ) {
    this.workspace = workspace;
    this.rootComponent = this.workspace
      .getComponent()
      .dc.resolve<ISchemaMakerComponent>("schema_maker_component");
    this.usedForId = ToolboxModule._id--;
    this.owner = owner;
    if (replace) {
      this.owner.innerHTML = "";
    }
    const range = new Range();
    this.container = document.createElement("div");
    const ui = range.createContextualFragment(layout);
    ui.querySelector("[data-bc-handler]").setAttribute(
      `data-bc-${replace ? "part" : "container"}-handler`,
      ""
    );
    this.container.appendChild(ui);

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
        this.getChildModules<ToolboxModule>()?.forEach((x) =>
          this.workspace.onRemove(x.usedForId)
        );
        this.workspace.onRemove(this.usedForId);
        this.owner.remove();
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

  public abstract update(userAction: IUserActionResult): void;

  protected getChildModules<TType extends ToolboxModule>(): TType[] {
    return null;
  }

  protected setBuiltInAttribute(invisible: boolean) {
    if (invisible) {
      this.container.setAttribute("data-bc-built-in-selector", "");
    }
  };
}
