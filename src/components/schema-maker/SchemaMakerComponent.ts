import { IDisposable, ISource, IUserDefineComponent } from "bclib/dist/bclib";
import ComponentBase from "../ComponentBase";
import ModuleFactory from "../modules/ModuleFactory";
import layout from "./assets/layout.html";
import "./assets/style.css";
import ISchemaMakerComponent from "./ISchemaMakerComponent";

export default class SchemaMakerComponent
  extends ComponentBase
  implements ISchemaMakerComponent
{
  private runTask: Promise<IDisposable>;
  private sourceId: string;

  constructor(owner: IUserDefineComponent) {
    super(owner, layout, "data-bc-sm-main-container");
    this.owner.dc.registerInstance("schema_maker_component", this);
    this.owner.dc.registerInstance("IModuleFactory", new ModuleFactory());
  }

  async initializeAsync(): Promise<void> {
    this.sourceId = await this.owner.getAttributeValueAsync("DataMemberName");
    const resultSourceId = await this.owner.getAttributeValueAsync(
      "resultSourceId"
    );

    const saveDraft = await this.owner.getAttributeValueAsync(
      "saveDraft",
      "false"
    );
    this.owner.addTrigger([this.sourceId]);
    this.container.querySelectorAll("basis").forEach((element) => {
      element.setAttribute("SaveDraft", saveDraft);
      element.setAttribute("dataMemberName", this.sourceId);
      if (element.getAttribute("core") == "component.schemaMaker.workspace") {
        if (resultSourceId) {
          element.setAttribute("resultSourceId", resultSourceId);
        }
      }
    });
    this.runTask = this.owner.processNodesAsync(
      Array.from(this.container.childNodes)
    );
  }

  runAsync(source?: ISource) {
    return this.runTask;
  }

  public getOwner(): IUserDefineComponent {
    return this.owner;
  }
}
