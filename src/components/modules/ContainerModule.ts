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
    this.container.addEventListener("drop", this.onDrop.bind(this));
    this.container
      .querySelector("[data-drop-area]")
      ?.addEventListener("dragover", this.onDragOver.bind(this));
  }

  private onDragOver(ev: DragEvent) {
    const draggedType = ev.dataTransfer.getData("schemaType");
    const acceptableTypes = (ev.target as HTMLElement)?.getAttribute(
      "data-drop-acceptable-schema-type"
    );
    const allowMulti =
      ((ev.target as HTMLElement)?.getAttribute(
        "data-drop-allow-multi-content"
      ) ?? "true") == "true";

    ev.stopPropagation();
    if (
      draggedType &&
      acceptableTypes &&
      acceptableTypes?.indexOf(draggedType) > -1 &&
      (allowMulti ||
        (ev.target as HTMLElement).querySelectorAll(
          "[data-drop-area] [data-module-container]"
        ).length == 0)
    ) {
      ev.preventDefault();
    }
  }

  private onDrop(e: DragEvent) {
    e.preventDefault();
    e.stopPropagation();
    var schemaId = e.dataTransfer.getData("schemaId");
    const owner = e.target as HTMLElement;
    var factory = this.moduleContainer
      .getComponent()
      .dc.resolve<IModuleFactory>("IModuleFactory");
    const createdModule = factory.create(schemaId, owner, this) as TItem;
    if (createdModule) {
      this.modules.push(createdModule);
    }
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

  public abstract fillSchema(schema: IQuestionSchema);
}
