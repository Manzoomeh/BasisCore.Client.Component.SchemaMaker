import {
  IAnswerPart,
  IAnswerProperty,
  IPartCollection,
  IPartValue,
} from "./basiscore/schema/IAnswerSchema";
import {
  IQuestion,
  IQuestionPart,
  IValidationOptions,
} from "./basiscore/schema/IQuestionSchema";
import IUserActionResult from "./basiscore/schema/IUserActionResult";
import IAutocompleteDataModel from "./components/modules/autocomplete/IAutocompleteDataModel";
import IListBaseModuleDataModel from "./components/modules/list-base/IListBaseModuleDataModel";
import IQuestionModuleDataModel from "./components/modules/question/IQuestionModuleDataModel";
import ITextBaseModuleDataModel from "./components/modules/text-base/ITextBaseModuleDataModel";

export default class SchemaUtil {
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

  public static createValidation(
    value: IValidationOptions,
    prpId: number
  ): IAnswerProperty {
    const retVal: IAnswerProperty = {
      prpId: prpId,
      answers: [],
    };
    const add = (type: ValidationType, value: any) => {
      const partValue: IPartValue = {
        id: 0,
        value: type ?? null,
      };
      const part1Collection: IPartCollection = {
        part: 1,
        values: [partValue],
      };
      const part2Collection: IPartCollection = {
        part: 2,
        values: [value],
      };
      const answerPart: IAnswerPart = {
        id: type,
        parts: [part1Collection, part2Collection],
      };
      retVal.answers.push(answerPart);
    };
    if (value.required != undefined) {
      add(ValidationType.required, value.required);
    }
    if (value.max != undefined) {
      add(ValidationType.max, value.max);
    }
    if (value.min != undefined) {
      add(ValidationType.min, value.min);
    }
    if (value.maxLength != undefined) {
      add(ValidationType.maxLength, value.maxLength);
    }
    if (value.minLength != undefined) {
      add(ValidationType.minLength, value.minLength);
    }
    if (value.dataType != undefined) {
      add(ValidationType.dataType, value.dataType);
    }
    if (value.regex != undefined) {
      add(ValidationType.regex, value.regex);
    }

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

  // public static getValidationValue(
  //   result: IUserActionResult
  // ): IValidationOptions {
  //   const prpId = 3;
  //   const property = result.properties.find((x) => x.propId == prpId);

  //   const getValue = (type: ValidationType) => {
  //     let retVal = null;
  //     // if (property.edited) {
  //     //   retVal = property.edited[0].parts.find(x=>x.part == 0 && x.values[0].id == ).values[0].value;
  //     // }
  //     if (property.added) {
  //       const tmp = property.added.find(
  //         (x) => x.parts.find((x) => x.part == 1).values[0].value == type
  //       );
  //     }
  //     if (property.deleted) {
  //       if (
  //         part == 0 ||
  //         (property.deleted[0].parts && property.deleted[0].parts[0])
  //       ) {
  //         retVal = "";
  //       }
  //     }
  //   };

  //   return null;
  // }

  public static toQuestionModuleDataModel(
    question: IQuestion
  ): IQuestionModuleDataModel {
    return null;
  }

  public static toTextBaseModuleDataModel(
    questionPart: IQuestionPart
  ): ITextBaseModuleDataModel {
    return null;
  }

  public static toAutocompleteModuleDataModel(
    questionPart: IQuestionPart
  ): IAutocompleteDataModel {
    return null;
  }

  public static toListBaseModuleDataModel(
    questionPart: IQuestionPart
  ): IListBaseModuleDataModel {
    return null;
  }
}

enum ValidationType {
  required = 1,
  minLength = 2,
  maxLength = 3,
  min = 4,
  max = 5,
  dataType = 6,
  regex = 7,
}
