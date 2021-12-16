import IUserDefineComponent from "../../basiscore/IUserDefineComponent";
import IContainerModule from "./IContainerModule";
import ToolboxModule from "./base-class/ToolboxModule";
import IQuestionSchema from "../../basiscore/schema/IQuestionSchema";

export default abstract class ContainerModule
  extends ToolboxModule
  implements IContainerModule
{
  public abstract id: number;

  constructor(layout: string, owner: HTMLElement, container: IContainerModule) {
    super(layout, owner, false, container);
  }
  getModule(moduleId: number): ToolboxModule {
    return this.moduleContainer.getModule(moduleId);
  }

  public getComponent(): IUserDefineComponent {
    return this.moduleContainer.getComponent();
  }

  public onRemove(moduleId: number) {
    this.moduleContainer.onRemove(moduleId);
  }

  public abstract fillSchema(schema: Partial<IQuestionSchema>): void;

  protected getChildModules<TType extends ToolboxModule>(): TType[] {
    return Array.from(
      this.container.querySelectorAll("[data-bc-module-id]")
    ).map((x) => {
      const id = x.getAttribute("data-bc-module-id");
      const moduleId = parseInt(id);
      return this.moduleContainer.getModule(moduleId) as TType;
    });
  }
}
