import {
  IAnswerSchema,
  IQuestionSchema,
  ISection,
  IUserActionResult,
} from "basiscore";
import IWorkspaceComponent from "../../workspace/IWorkspaceComponent";
import layout from "./assets/layout.html";
import "./assets/style.css";
import SchemaUtil from "../../../SchemaUtil";
import ContainerModule from "../ContainerModule";
import ToolboxModule from "../base-class/ToolboxModule";

export default class SectionModule extends ContainerModule {
  private _data: Partial<ISection>;
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
    container: IWorkspaceComponent,
    isABuiltIn: boolean,
    data?: ISection
  ) {
    super(layout, owner, container);
    this._data = data;
    if (!this._data) {
      this._data = {
        id: this.usedForId,
        title: "Section Title",
        description: "",
      };
    }
    this.container
      .querySelector("[data-bc-section-id]")
      .setAttribute("data-bc-section-id", this._data.id.toString());
    this.title = this._data.title;
    this.description = this._data.description;

    if (isABuiltIn) {
      this.setBuiltInAttribute(true);
    }
  }

  protected getAnswerSchema(): IAnswerSchema {
    var ans: IAnswerSchema = {
      schemaVersion: "1.0",
      schemaId: "section",
      paramUrl: "section",
      lastUpdate: "",
      lid: 0,
      usedForId: this.usedForId,
      properties: [],
    };

    SchemaUtil.addSimpleValueProperty(ans, this.title, SectionModule.TITLE_ID);
    SchemaUtil.addSimpleValueProperty(
      ans,
      this.description,
      SectionModule.DESCRIPTION_ID
    );
    return ans;
  }

  public update(result: IUserActionResult): void {
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

  protected getChildModules<TType extends ToolboxModule>(): TType[] {
    return Array.from(
      this.container.querySelector(
        "[data-drop-acceptable-container-schema-type]"
      )?.childNodes
    ).map((x) => {
      let retVal: TType = null;
      if (x instanceof Element) {
        const id = x.getAttribute("data-bc-module-id");
        if (id) {
          const moduleId = parseInt(id);
          retVal = this.workspace.getModule(moduleId) as TType;
        }
      }
      return retVal;
    });
  }

  public fillSchema(schema: IQuestionSchema) {
    const section: ISection = {
      id: this._data.id,
      title: this._data.title,
      description: this._data.description,
    };
    if (!schema.sections) {
      schema.sections = [];
    }
    schema.sections.push(section);
    this.getChildModules<ContainerModule>().forEach((x) =>
      x.fillSchema(schema)
    );
  }

  protected setBuiltInAttribute(invisible: boolean) {
    if (invisible) {
      super.setBuiltInAttribute(invisible);
      this.owner.querySelector<HTMLButtonElement>("[data-btn-remove]").style.display = "none";
      this.owner.querySelector<HTMLButtonElement>("[data-btn-setting]").style.display = "none";
    }
  };
}
