import { IAnswerSchema } from "../../../basiscore/IAnswerSchema";
import { ISection } from "../../../basiscore/IQuestionSchema";
import IUserActionResult from "../../../basiscore/IUserActionResult";
import IUserDefineComponent from "../../../basiscore/IUserDefineComponent";
import IModuleContainer from "../../workspace/IModuleContainer";
import ToolboxModule from "../base-class/ToolboxModule";
import SelectModule from "../list-base/select/SelectModule";
import layout from "./assets/layout.html";
import "./assets/style.css";
import { SchemaUtil } from "../../../SchemaUtil";
export default class SectionModule
  extends ToolboxModule
  implements IModuleContainer
{
  private readonly _modules: Array<ToolboxModule> = [];
  private _data: ISection;
  private static readonly TITLE_ID = 1;
  private static readonly DESCRIPTION_ID = 2;

  get title(): string {
    return this._data.title;
  }
  set title(value: string) {
    this._data.title = value;
    this.container.querySelector("[data-bc-title]").innerHTML = value;
  }

  get description(): string {
    return this._data.description;
  }

  set description(value: string) {
    this._data.description = value;
  }

  constructor(
    owner: HTMLElement,
    container: IModuleContainer,
    data?: ISection
  ) {
    super(layout, owner, false, container);

    this._data = data;
    if (!this._data) {
      this._data = {
        id: 0,
        title: "",
        description: "",
      };
      this.title = "Section Title";
      this.description = "";
    }
  }

  protected getAnswerSchema(): IAnswerSchema {
    var ans: IAnswerSchema = {
      schemaVersion: "1.0",
      schemaId: "section",
      lastUpdate: "",
      lid: 0,
      usedForId: this.usedForId,
      properties: [
        SchemaUtil.createShortText(this.title, SectionModule.TITLE_ID),
        SchemaUtil.createShortText(
          this.description,
          SectionModule.DESCRIPTION_ID
        ),
      ],
    };
    return ans;
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

  protected update(result: IUserActionResult): void {
    const title = SchemaUtil.getPropertyValue(result, SectionModule.TITLE_ID);
    if (title != null) {
      this.title = title;
    }
    const description = SchemaUtil.getPropertyValue(
      result,
      SectionModule.DESCRIPTION_ID
    );
    if (description != null) {
      this._data.description = description;
    }
  }
}
