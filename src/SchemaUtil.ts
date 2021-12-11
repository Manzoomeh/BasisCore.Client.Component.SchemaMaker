import IAnswerSchema, {
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
  private static readonly CAPTION_ID = 1;
  private static readonly CSS_CLASS_ID = 2;

  private static readonly REQUIRED_VALIDATION_ID = 3001;
  private static readonly MIN_LENGTH_VALIDATION_ID = 3002;
  private static readonly MAX_LENGTH_VALIDATION_ID = 3003;
  private static readonly MIN_VALIDATION_ID = 3004;
  private static readonly MAX_VALIDATION_ID = 3005;
  private static readonly DATATYPE_VALIDATION_ID = 3006;
  private static readonly REGEX_VALIDATION_ID = 3007;

  public static addSimpleValue(
    answerSchema: IAnswerSchema,
    value: any,
    prpId: number
  ): void {
    if (value != null && value != undefined) {
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
      answerSchema.properties.push(retVal);
    }
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

  public static addCaptionProperty(
    answerSchema: IAnswerSchema,
    caption: string
  ) {
    SchemaUtil.addSimpleValue(answerSchema, caption, SchemaUtil.CAPTION_ID);
  }

  public static getCaptionProperty(result: IUserActionResult) {
    return SchemaUtil.getPropertyValue(result, SchemaUtil.CAPTION_ID);
  }

  public static addCssClassProperty(
    answerSchema: IAnswerSchema,
    cssClass: string
  ) {
    SchemaUtil.addSimpleValue(answerSchema, cssClass, SchemaUtil.CSS_CLASS_ID);
  }

  public static getCssClassProperty(result: IUserActionResult) {
    return SchemaUtil.getPropertyValue(result, SchemaUtil.CSS_CLASS_ID);
  }

  public static addValidationProperties(
    answerSchema: IAnswerSchema,
    validations: IValidationOptions
  ) {
    if (validations) {
      if (validations.required != null) {
        SchemaUtil.addSimpleValue(
          answerSchema,
          validations.required,
          SchemaUtil.REQUIRED_VALIDATION_ID
        );
      }
      if (validations.minLength != null) {
        SchemaUtil.addSimpleValue(
          answerSchema,
          validations.minLength,
          SchemaUtil.MIN_LENGTH_VALIDATION_ID
        );
      }
      if (validations.maxLength != null) {
        SchemaUtil.addSimpleValue(
          answerSchema,
          validations.maxLength,
          SchemaUtil.MAX_LENGTH_VALIDATION_ID
        );
      }
      if (validations.min != null) {
        SchemaUtil.addSimpleValue(
          answerSchema,
          validations.min,
          SchemaUtil.MIN_VALIDATION_ID
        );
      }
      if (validations.max != null) {
        SchemaUtil.addSimpleValue(
          answerSchema,
          validations.max,
          SchemaUtil.MAX_VALIDATION_ID
        );
      }
      if (validations.dataType != null) {
        SchemaUtil.addSimpleValue(
          answerSchema,
          validations.dataType,
          SchemaUtil.DATATYPE_VALIDATION_ID
        );
      }
      if (validations.regex != null) {
        SchemaUtil.addSimpleValue(
          answerSchema,
          validations.regex,
          SchemaUtil.REGEX_VALIDATION_ID
        );
      }
    }
  }

  public static getValidationsProperties(
    result: IUserActionResult
  ): IValidationOptions {
    const required = SchemaUtil.getPropertyValue(
      result,
      SchemaUtil.REQUIRED_VALIDATION_ID
    );
    const minLength = SchemaUtil.getPropertyValue(
      result,
      SchemaUtil.MIN_LENGTH_VALIDATION_ID
    );
    const maxLength = SchemaUtil.getPropertyValue(
      result,
      SchemaUtil.MAX_LENGTH_VALIDATION_ID
    );
    const min = SchemaUtil.getPropertyValue(
      result,
      SchemaUtil.MIN_VALIDATION_ID
    );
    const max = SchemaUtil.getPropertyValue(
      result,
      SchemaUtil.MAX_VALIDATION_ID
    );
    const dataType = SchemaUtil.getPropertyValue(
      result,
      SchemaUtil.DATATYPE_VALIDATION_ID
    );
    const regex = SchemaUtil.getPropertyValue(
      result,
      SchemaUtil.REGEX_VALIDATION_ID
    );

    const retVal: IValidationOptions = {
      ...(required === "1" && { required: true }),
      ...(minLength != null && { minLength: parseInt(minLength) }),
      ...(maxLength != null && { maxLength: parseInt(maxLength) }),
      ...(min != null && { min: parseInt(min) }),
      ...(max != null && { max: parseInt(max) }),
      ...(dataType != null && { dataType: dataType }),
      ...(regex != null && { regex: regex }),
    };

    return retVal;
  }

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
