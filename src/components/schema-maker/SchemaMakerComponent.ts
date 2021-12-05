import IDisposable from "../../basiscore/IDisposable";
import ISource from "../../basiscore/ISource";
import IUserDefineComponent from "../../basiscore/IUserDefineComponent";
import ComponentBase from "../ComponentBase";
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
  }

  async initializeAsync(): Promise<void> {
    this.sourceId = await this.owner.getAttributeValueAsync("DataMemberName");
    this.owner.addTrigger([this.sourceId]);
    this.container
      .querySelectorAll("basis")
      .forEach((element) =>
        element.setAttribute("dataMemberName", this.sourceId)
      );
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
