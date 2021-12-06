import IUserActionResult from "../../../basiscore/IUserActionResult";
import IUserDefineComponent from "../../../basiscore/IUserDefineComponent";
import IContainerModule from "../IContainerModule";
import ToolboxModule from "../base-class/ToolboxModule";

export default abstract class ContainerModule
  extends ToolboxModule
  implements IContainerModule
{
  protected readonly modules: Array<ToolboxModule> = [];

  constructor(layout: string, owner: HTMLElement, container: IContainerModule) {
    super(layout, owner, false, container);
  }

  public getComponent(): IUserDefineComponent {
    return this.moduleContainer.getComponent();
  }

  public onRemove(module: ToolboxModule) {
    const index = this.modules.indexOf(module);
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
}
