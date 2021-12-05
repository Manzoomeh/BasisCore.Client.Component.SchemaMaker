import {
  IAnswerPart,
  IAnswerProperty,
  IAnswerSchema,
  IPartCollection,
  IPartValue,
} from "../../../basiscore/IAnswerSchema";
import { ISection } from "../../../basiscore/IQuestionSchema";
import IUserDefineComponent from "../../../basiscore/IUserDefineComponent";
import ToolboxModule from "../base-class/ToolboxModule";
import layout from "./assets/layout.html";
import "./assets/style.css";
export default class SectionModule extends ToolboxModule {
  private _data: ISection;

  private static readonly TITLE_ID = 1;
  private static readonly DESCRIPTION_ID = 2;
  constructor(
    owner: HTMLElement,
    component: IUserDefineComponent,
    data?: ISection
  ) {
    super(layout, owner, false, component);

    this._data = data;
    if (!this._data) {
      this._data = {
        id: 0,
        title: "عنوان",
        description: "",
      };
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
        AnswerPropertyMaker.createShortText(
          this._data.title,
          SectionModule.TITLE_ID
        ),
        AnswerPropertyMaker.createShortText(
          this._data.description,
          SectionModule.DESCRIPTION_ID
        ),
      ],
    };
    return ans;
  }
}

class AnswerPropertyMaker {
  public static createShortText(value: string, prpId: number): IAnswerProperty {
    const partValue: IPartValue = {
      id: 0,
      value: value,
    };
    const partCollection: IPartCollection = {
      part: 1,
      values: [partValue],
    };
    const answerPart: IAnswerPart = {
      id: 0,
      parts: [partCollection],
    };
    const retVal: IAnswerProperty = {
      prpId: prpId,
      answers: [answerPart],
    };
    return retVal;
  }
}
