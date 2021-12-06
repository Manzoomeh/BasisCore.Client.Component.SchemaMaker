import { IAnswerSchema } from "../../../basiscore/IAnswerSchema";
import { ISection } from "../../../basiscore/IQuestionSchema";
import IUserActionResult from "../../../basiscore/IUserActionResult";
import IContainerModule from "../IContainerModule";
import layout from "./assets/layout.html";
import "./assets/style.css";
import { SchemaUtil } from "../../../SchemaUtil";
import ContainerModule from "./ContainerModule";

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
    container: IContainerModule,
    data?: ISection
  ) {
    super(layout, owner, container);

    this._data = data;
    if (!this._data) {
      this._data = {
        id: 0,
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
