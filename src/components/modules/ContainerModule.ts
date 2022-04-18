import IWorkspaceComponent from "../workspace/IWorkspaceComponent";
import ToolboxModule from "./base-class/ToolboxModule";
import { IQuestionSchema } from "bclib/dist/bclib";

export default abstract class ContainerModule extends ToolboxModule {
  constructor(
    layout: string,
    owner: HTMLElement,
    container: IWorkspaceComponent
  ) {
    super(layout, owner, false, container);
  }

  public abstract fillSchema(schema: Partial<IQuestionSchema>): void;

  protected getChildModules<TType extends ToolboxModule>(): TType[] {
    return Array.from(
      this.container.querySelectorAll("[data-bc-module-id]")
    ).map((x) => {
      const id = x.getAttribute("data-bc-module-id");
      const moduleId = parseInt(id);
      return this.workspace.getModule(moduleId) as TType;
    });
  }
}
