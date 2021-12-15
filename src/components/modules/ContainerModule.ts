import IUserActionResult from "../../basiscore/schema/IUserActionResult";
import IUserDefineComponent from "../../basiscore/IUserDefineComponent";
import IContainerModule from "./IContainerModule";
import ToolboxModule from "./base-class/ToolboxModule";
import IModuleFactory from "./IModuleFactory";
import IQuestionSchema from "../../basiscore/schema/IQuestionSchema";

export default abstract class ContainerModule<TItem extends ToolboxModule>
  extends ToolboxModule
  implements IContainerModule
{
  protected readonly modules: Array<TItem> = [];
  public abstract id: number;

  constructor(layout: string, owner: HTMLElement, container: IContainerModule) {
    super(layout, owner, false, container);
  }

  public getComponent(): IUserDefineComponent {
    return this.moduleContainer.getComponent();
  }

  public onRemove(module: ToolboxModule) {
    const index = this.modules.indexOf(module as TItem);
    if (index > -1) {
      this.modules.splice(index, 1);
    }
  }

  public tryApplyUpdate(userAction: IUserActionResult): boolean {
    let funded = super.tryApplyUpdate(userAction);
    if (!funded) {
      const foundedModule = this.modules.find((x) =>
        x.tryApplyUpdate(userAction)
      );
      if (foundedModule) {
        funded = true;
      }
    }
    return funded;
  }

  public abstract fillSchema(schema: IQuestionSchema): void;
}
