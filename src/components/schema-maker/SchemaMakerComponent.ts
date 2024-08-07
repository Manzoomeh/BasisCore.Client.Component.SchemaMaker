import { IDisposable, ISource, IUserDefineComponent } from "basiscore";
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

    const objectTypeUrl = await this.owner.getAttributeValueAsync(
      "objectTypeUrl",
      ""
    );

    const defaultQuestionsUrl = await this.owner.getAttributeValueAsync(
      "defaultQuestionsUrl",
      ""
    );
    const groupsUrl = await this.owner.getAttributeValueAsync("groupsUrl", "");
    this.owner.addTrigger([this.sourceId]);
    this.container.querySelectorAll("basis").forEach((element) => {
      element.setAttribute("SaveDraft", saveDraft);
      element.setAttribute("objectTypeUrl", objectTypeUrl);
      element.setAttribute("groupsUrl", groupsUrl);
      element.setAttribute("defaultQuestionsUrl", defaultQuestionsUrl);
      element.setAttribute("dataMemberName", this.sourceId);
      if (element.getAttribute("core") == "component.schemaMaker.workspace") {
        if (resultSourceId) {
          element.setAttribute("resultSourceId", resultSourceId);
        }
      }
    });
    setTimeout(async () => {
      const detailsApiUrl = await this.owner.getAttributeValueAsync(
        "detailsApiUrl",
        ""
      );
      const detailsParamUrl = await this.owner.getAttributeValueAsync(
        "detailsParamUrl",
        ""
      );
      if (detailsApiUrl && detailsApiUrl.length > 0) {
        let element = this.container.querySelector("#form-details-schema");
        const tag = `<Basis core="schema" run="atclient" schemaUrl="${detailsApiUrl}" paramUrl="${detailsParamUrl}" displayMode="new" button="[data-get-btn]" resultSourceId="details.data">`;
        element.innerHTML += tag;
      }
      this.runTask = this.owner.processNodesAsync(
        Array.from(this.container.childNodes)
      );
    }, 100);
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
