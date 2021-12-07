import {
  IAnswerPart,
  IAnswerProperty,
  IPartCollection,
  IPartValue,
} from "./basiscore/schema/IAnswerSchema";
import { IQuestion } from "./basiscore/schema/IQuestionSchema";
import IUserActionResult from "./basiscore/schema/IUserActionResult";
import IQuestionModuleDataModel from "./components/modules/question/IQuestionModuleDataModel";

export class SchemaUtil {
  public static createShortText(value: string, prpId: number): IAnswerProperty {
    const partValue: IPartValue = {
      id: 0,
      value: value ?? null,
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
  public static createSelect(value: any, prpId: number): IAnswerProperty {
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

  public static getPropertyValue(
    result: IUserActionResult,
    propId: number,
    part: number = 0
  ): any {
    let retVal: string = null;
    const property = result.properties.find((x) => x.propId == propId);
    if (property) {
      if (property.edited) {
        retVal = property.edited[0].parts[part].values[0].value;
      }
      if (property.added) {
        retVal = property.added[0].parts[part].values[0].value;
      }
      if (property.deleted) {
        if (
          part == 0 ||
          (property.deleted[0].parts && property.deleted[0].parts[0])
        ) {
          retVal = "";
        }
      }
    }
    return retVal;
  }

  public static ToQuestionModuleDataModel(
    question: IQuestion
  ): IQuestionModuleDataModel {
    return null;
  }
}
