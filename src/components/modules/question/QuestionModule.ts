import { IAnswerSchema } from "../../../basiscore/IAnswerSchema";
import IUserActionResult from "../../../basiscore/IUserActionResult";
import IUserDefineComponent from "../../../basiscore/IUserDefineComponent";
import IModuleContainer from "../../workspace/IModuleContainer";
import AutocompleteModule from "../autocomplete/AutocompleteModule";
import ToolboxModule from "../base-class/ToolboxModule";
import CheckListModule from "../list-base/check-list/CheckListModule";
import SelectModule from "../list-base/select/SelectModule";
import LongTextModule from "../text-base/long-text/LongTextModule";
import ShortTextModule from "../text-base/short-text/ShortTextModule";
import layout from "./assets/layout.html";
import "./assets/style.css";
export default class QuestionModule
  extends ToolboxModule
  implements IModuleContainer
{
  private readonly _modules: Array<ToolboxModule> = [];

  constructor(owner: HTMLElement, container: IModuleContainer) {
    super(layout, owner, false, container);
    this.container.addEventListener("drop", this.onDrop.bind(this));
  }

  private onDrop(e: DragEvent) {
    e.preventDefault();
    e.stopPropagation();
    var schemaId = e.dataTransfer.getData("schemaId");
    const owner = e.target as HTMLElement;
    const createdModule = this.factory(schemaId, owner);
    if (createdModule) {
      this._modules.push(createdModule);
    }
  }

  private factory(schemaId: string, owner: HTMLElement): ToolboxModule {
    let module: ToolboxModule = null;
    switch (schemaId) {
      case "short-text": {
        module = new ShortTextModule(owner, this.moduleContainer);
        break;
      }
      case "long-text": {
        module = new LongTextModule(owner, this.moduleContainer);
        break;
      }
      case "select": {
        module = new SelectModule(owner, this.moduleContainer);
        break;
      }
      case "check-list": {
        module = new CheckListModule(owner, this.moduleContainer);
        break;
      }
      case "auto-complete": {
        module = new AutocompleteModule(owner, this.moduleContainer);
        break;
      }
    }

    return module;
  }

  public getComponent(): IUserDefineComponent {
    return this.moduleContainer.getComponent();
  }

  public onRemove(module: ToolboxModule) {
    const index = this._modules.indexOf(module);
    if (index > -1) {
      this._modules.splice(index, 1);
    }
  }

  public tryApplyUpdate(userAction: IUserActionResult): boolean {
    let funded = super.tryApplyUpdate(userAction);
    if (!funded) {
      const foundedModule = this._modules.find((x) =>
        x.tryApplyUpdate(userAction)
      );
      if (foundedModule) {
        funded = true;
      }
    }
    return funded;
  }
}
