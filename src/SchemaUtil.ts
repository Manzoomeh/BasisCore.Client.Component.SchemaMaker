import {
  IAnswerSchema,
  IAnswerPart,
  IAnswerProperty,
  IPartCollection,
  IPartValue,
  IFixValue,
  IValidationOptions,
  IUserActionResult,
  IMimes,
} from "basiscore";

interface IFixValueEx extends IFixValue {
  priority: number;
  valueData?: {
    id: number;
    value: string;
    status: string;
  };
}
export default class SchemaUtil {
  private static readonly CAPTION_ID = 1;
  private static readonly CSS_CLASS_ID = 2;
  private static readonly MULTIPLE_ID = 3;
  private static readonly UPLOAD_TOKEN_ID = 4;
  private static readonly PLACE_HOLDER_ID = 2000;
  private static readonly DISABLED_ID = 2001;
  private static readonly REQUIRED_VALIDATION_ID = 3001;
  private static readonly MIN_LENGTH_VALIDATION_ID = 3002;
  private static readonly MAX_LENGTH_VALIDATION_ID = 3003;
  private static readonly MIN_VALIDATION_ID = 3004;
  private static readonly MAX_VALIDATION_ID = 3005;
  private static readonly DATATYPE_VALIDATION_ID = 3006;
  private static readonly REGEX_VALIDATION_ID = 3007;
  private static readonly MIMES_VALIDATION_ID = 3008;
  private static readonly SIZE_VALIDATION_ID = 3009;

  public static addMimeValueProperty(
    answerSchema: IAnswerSchema,
    mimes: IMimes[],
    id: number
  ): void {
    if (mimes != null && mimes != undefined) {
      const answers = new Array<IAnswerPart>();
      mimes.forEach((value, index) => {
        const mimePartCollection: IPartCollection = {
          part: 1,
          values: [
            {
              id: 0,
              value: value.mime,
            },
          ],
        };

        const minSizePartCollection: IPartCollection = {
          part: 2,
          values: [
            {
              id: 1,
              value: value.minSize ?? "",
            },
          ],
        };

        const maxSizePartCollection: IPartCollection = {
          part: 3,
          values: [
            {
              id: 2,
              value: value.maxSize ?? "",
            },
          ],
        };

        const answerPart: IAnswerPart = {
          id: index + 1,
          parts: [
            mimePartCollection,
            minSizePartCollection,
            maxSizePartCollection,
          ],
        };

        answers.push(answerPart);
      });

      const retVal: IAnswerProperty = {
        prpId: id,
        answers: answers,
      };

      answerSchema.properties.push(retVal);
    }
  }

  public static addSimpleValueProperty(
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
  public static addSimpleValuePropertyToSubSchema(
    answerSchema: IAnswerSchema,
    value: any,
    prpId: number,
    innerPrpId: number,
    innerValue: string,
    usedForId: number
  ): void {
    if (value != null && value != undefined) {
      const partValue: IPartValue = {
        id: 1,
        value: value,
        answer: {
          usedForId: usedForId,
          lastUpdate: "",
          schemaVersion: "1.1",
          schemaId: "add-to-log",
          paramUrl: "add-to-log",
          lid: 1,
          properties: [
            {
              //@ts-ignore
              prpId: innerPrpId,
              answers: [
                {
                  id : 1, 
                  parts: [
                    {
                      part: 1,
                      values: [
                        {
                          id: 1,
                          value: innerValue,
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
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
  public static getSubSchema(
    result: IUserActionResult,
    propId: number,
    part: number = 0
  ): any {
    let retVal: IUserActionResult = null;
    const property = result.properties.find((x) => x.propId == propId);
    if (property) {
      if (property.edited) {
        retVal = property.edited[0].parts[part].values[0].answer;
      }
      if (property.added) {
        retVal = property.added[0].parts[part].values[0].answer;
      }
      if (property.deleted) {
        retVal = property.deleted[0].parts[0].values[0].answer;
      }
    }
    return retVal;
  }

  public static getMimeValidationPropertyValue(
    result: IUserActionResult,
    current: IMimes[],
    propId: number
  ): IMimes[] {
    let retVal: IMimes[] = current ?? new Array<IMimes>();
    const property = result.properties.find((x) => x.propId == propId);
    if (property) {
      if (property.edited) {
        property.edited.forEach((item) => {
          var currentMime = retVal[item.id - 1];
          item.parts.forEach((part) => {
            if (part.part == 1) {
              currentMime.mime = part.values[0].value;
            }
            if (part.part == 2) {
              currentMime.minSize = parseInt(part.values[0].value);
            }
            if (part.part == 3) {
              currentMime.maxSize = parseInt(part.values[0].value);
            }
          });
        });
      }
      if (property.added) {
        property.added.forEach((answer) => {
          var mime: IMimes = {
            mime: answer.parts[0]?.values[0].value,
            minSize: answer.parts[1]?.values[0].value ?? "",
            maxSize: answer.parts[2]?.values[0].value ?? "",
          };
          retVal.push(mime);
        });
      }

      if (property.deleted) {
        property.deleted
          .filter((x) => x.parts != null)
          .forEach((item) => {
            var currentMime = retVal[item.id - 1];
            item.parts.forEach((part) => {
              if (part.part == 1) {
                currentMime.mime = "";
              }
              if (part.part == 2) {
                currentMime.minSize = 0;
              }
              if (part.part == 3) {
                currentMime.maxSize = 0;
              }
            });
          });

        property.deleted
          .filter((x) => x.parts == null)
          .map((x) => x.id)
          .sort()
          .reverse()
          .forEach((_, index) => retVal.splice(index, 1));
      }
    }
    return retVal.length == 0 ? null : retVal;
  }

  public static addCaptionProperty(
    answerSchema: IAnswerSchema,
    caption: string
  ) {
    SchemaUtil.addSimpleValueProperty(
      answerSchema,
      caption,
      SchemaUtil.CAPTION_ID
    );
  }
  public static addPlaceHolderProperty(
    answerSchema: IAnswerSchema,
    placeHolder: string
  ) {
    SchemaUtil.addSimpleValueProperty(
      answerSchema,
      placeHolder,
      SchemaUtil.PLACE_HOLDER_ID
    );
  }
  public static addDisabledProperty(
    answerSchema: IAnswerSchema,
    disabled: boolean
  ) {
    SchemaUtil.addSimpleValueProperty(
      answerSchema,
      disabled ? 1 : 0,
      SchemaUtil.DISABLED_ID
    );
  }

  public static getCaptionProperty(result: IUserActionResult) {
    return SchemaUtil.getPropertyValue(result, SchemaUtil.CAPTION_ID);
  }
  public static getPlaceHolderProperty(result: IUserActionResult) {
    return SchemaUtil.getPropertyValue(result, SchemaUtil.PLACE_HOLDER_ID);
  }
  public static getDisabledProperty(result: IUserActionResult) {
    return SchemaUtil.getPropertyValue(result, SchemaUtil.DISABLED_ID) == 1
      ? true
      : false;
  }

  public static addCssClassProperty(
    answerSchema: IAnswerSchema,
    cssClass: string
  ) {
    SchemaUtil.addSimpleValueProperty(
      answerSchema,
      cssClass,
      SchemaUtil.CSS_CLASS_ID
    );
  }

  public static getCssClassProperty(result: IUserActionResult) {
    return SchemaUtil.getPropertyValue(result, SchemaUtil.CSS_CLASS_ID);
  }

  public static addMultipleProperty(
    answerSchema: IAnswerSchema,
    multiple: boolean
  ) {
    SchemaUtil.addSimpleValueProperty(
      answerSchema,
      multiple == true ? "2" : "1",
      SchemaUtil.MULTIPLE_ID
    );
  }

  public static getMultipleProperty(result: IUserActionResult) {
    return SchemaUtil.getPropertyValue(result, SchemaUtil.MULTIPLE_ID);
  }

  public static addUploadTokenProperty(
    answerSchema: IAnswerSchema,
    uploadToken: string
  ) {
    SchemaUtil.addSimpleValueProperty(
      answerSchema,
      uploadToken,
      SchemaUtil.UPLOAD_TOKEN_ID
    );
  }

  public static getUploadTokenProperty(result: IUserActionResult) {
    return SchemaUtil.getPropertyValue(result, SchemaUtil.UPLOAD_TOKEN_ID);
  }

  public static addValidationProperties(
    answerSchema: IAnswerSchema,
    validations: IValidationOptions
  ) {
    if (validations) {
      if (validations.required != null) {
        SchemaUtil.addSimpleValueProperty(
          answerSchema,
          validations.required ?? false ? "1" : "0",
          SchemaUtil.REQUIRED_VALIDATION_ID
        );
      }
      if (validations.minLength != null) {
        SchemaUtil.addSimpleValueProperty(
          answerSchema,
          validations.minLength,
          SchemaUtil.MIN_LENGTH_VALIDATION_ID
        );
      }
      if (validations.maxLength != null) {
        SchemaUtil.addSimpleValueProperty(
          answerSchema,
          validations.maxLength,
          SchemaUtil.MAX_LENGTH_VALIDATION_ID
        );
      }
      if (validations.min != null) {
        SchemaUtil.addSimpleValueProperty(
          answerSchema,
          validations.min,
          SchemaUtil.MIN_VALIDATION_ID
        );
      }
      if (validations.max != null) {
        SchemaUtil.addSimpleValueProperty(
          answerSchema,
          validations.max,
          SchemaUtil.MAX_VALIDATION_ID
        );
      }
      if (validations.dataType != null) {
        SchemaUtil.addSimpleValueProperty(
          answerSchema,
          validations.dataType,
          SchemaUtil.DATATYPE_VALIDATION_ID
        );
      }
      if (validations.regex != null) {
        SchemaUtil.addSimpleValueProperty(
          answerSchema,
          validations.regex,
          SchemaUtil.REGEX_VALIDATION_ID
        );
      }
      if (validations.size != null) {
        SchemaUtil.addSimpleValueProperty(
          answerSchema,
          validations.size,
          SchemaUtil.SIZE_VALIDATION_ID
        );
      }
      if (validations.mimes != null) {
        SchemaUtil.addMimeValueProperty(
          answerSchema,
          validations.mimes,
          SchemaUtil.MIMES_VALIDATION_ID
        );
      }
    }
  }

  public static applyValidationsProperties(
    current: IValidationOptions,
    result: IUserActionResult
  ): IValidationOptions {
    if (!current) {
      current = {};
    }
    const required = SchemaUtil.getPropertyValue(
      result,
      SchemaUtil.REQUIRED_VALIDATION_ID
    );
    if (required === "1") {
      current.required = true;
    } else if (required === "") {
      current.required = false;
    }

    const minLength = SchemaUtil.getPropertyValue(
      result,
      SchemaUtil.MIN_LENGTH_VALIDATION_ID
    );
    if (minLength != null) {
      const value = parseInt(minLength);
      current.minLength = isNaN(value) ? null : value;
    }
    const maxLength = SchemaUtil.getPropertyValue(
      result,
      SchemaUtil.MAX_LENGTH_VALIDATION_ID
    );
    if (maxLength != null) {
      const value = parseInt(maxLength);
      current.maxLength = isNaN(value) ? null : value;
    }
    const min = SchemaUtil.getPropertyValue(
      result,
      SchemaUtil.MIN_VALIDATION_ID
    );
    if (min != null) {
      const value = parseInt(min);
      current.min = isNaN(value) ? null : value;
    }
    const max = SchemaUtil.getPropertyValue(
      result,
      SchemaUtil.MAX_VALIDATION_ID
    );
    if (max != null) {
      const value = parseInt(max);
      current.max = isNaN(value) ? null : value;
    }
    const dataType = SchemaUtil.getPropertyValue(
      result,
      SchemaUtil.DATATYPE_VALIDATION_ID
    );
    if (dataType != null) {
      current.dataType = dataType;
    }
    const regex = SchemaUtil.getPropertyValue(
      result,
      SchemaUtil.REGEX_VALIDATION_ID
    );
    if (regex != null) {
      current.regex = regex;
    }
    const size = SchemaUtil.getPropertyValue(
      result,
      SchemaUtil.SIZE_VALIDATION_ID
    );
    if (size != null) {
      const value = parseInt(size);
      current.size = isNaN(value) ? null : value;
    }

    const mimes = SchemaUtil.getMimeValidationPropertyValue(
      result,
      current.mimes,
      SchemaUtil.MIMES_VALIDATION_ID
    );
    if (mimes != null) {
      current.mimes = mimes;
    }

    return current;
  }

  public static addFixValueProperty(
    answerSchema: IAnswerSchema,
    values: IFixValue[],
    prpId: number
  ): void {
    if (values != null && values != undefined && values.length > 0) {
      const answers: Array<IAnswerPart> = new Array<IAnswerPart>();
      values.forEach((value, index) => {
        const idPartValue: IPartValue = {
          id: 0,
          value: value.id,
        };
        const idPartCollection: IPartCollection = {
          part: 1,
          values: [idPartValue],
        };

        const valuePartValue: IPartValue = {
          id: 0,
          value: value.value,
        };
        const valuePartCollection: IPartCollection = {
          part: 2,
          values: [valuePartValue],
        };
        const priorityPartValue: IPartValue = {
          id: 0,
          value: index + 1,
        };
        const priorityPartCollection: IPartCollection = {
          part: 3,
          values: [priorityPartValue],
        };
        const schemaPartValue: IPartValue = {
          id: 0,
          value: value.schema,
        };
        const schemaPartCollection: IPartCollection = {
          part: 4,
          values: [schemaPartValue],
        };
        const selectedPartValue: IPartValue = {
          id: 0,
          value: value.selected == true ? 1 : 0,
        };
        const selectedPartCollection: IPartCollection = {
          part: 5,
          values: [selectedPartValue],
        };
        const answerPart: IAnswerPart = {
          id: value.id ?? -1 * (index + 1),
          parts: [
            idPartCollection,
            valuePartCollection,
            priorityPartCollection,
            schemaPartCollection,
            selectedPartCollection,
          ],
        };
        answers.push(answerPart);
      });
      const retVal: IAnswerProperty = {
        prpId: prpId,
        answers: answers,
      };
      answerSchema.properties.push(retVal);
    }
  }

  public static getFixValueProperty(
    result: IUserActionResult,
    values: IFixValueEx[],
    propId: number
  ): IFixValue[] {
    const retVal = values ? [...values] : [];
    const property = result.properties.find((x) => x.propId == propId);
    if (property) {
      if (property.edited) {
        property.edited.forEach((editedItem) => {
          const edited =
            editedItem.id >= 0
              ? retVal.find((x) => x.id == editedItem.id)
              : retVal[Math.abs(editedItem.id + 1)];
          editedItem.parts.forEach((editedPart) => {
            if (editedPart.part == 1) {
              edited.id = parseInt(editedPart.values[0].value);
            } else if (editedPart.part == 2) {
              let value = editedPart.values[0].value;
              if(value && typeof value != "string"){
                edited.valueData = value
                edited.value = value.value
              }else{
                edited.value = value
              }
            } else if (editedPart.part == 3) {
              edited.priority = editedPart.values[0].value;
            } else if (editedPart.part == 4) {
              edited.schema = editedPart.values[0].value;
            } else if (editedPart.part == 5) {
              edited.selected = editedPart.values[0].value == 1 ? true : false;
            }
          });
        });
      }
      if (property.deleted) {
        property.deleted.forEach((deletedItem) => {
          if (deletedItem.id >= 0) {
            if (!deletedItem.parts) {
              const deleted = retVal.find((x) => x.id == deletedItem.id);
              retVal.splice(retVal.indexOf(deleted), 1);
            }
          } else {
            if (!deletedItem.parts) {
              retVal.splice(Math.abs(deletedItem.id + 1), 1);
            }
          }
        });
      }
      if (property.added) {
        property.added.forEach((addedItem) => {
          const id = addedItem.parts.find((x) => x.part == 1)?.values[0].value;
          let value = addedItem.parts.find((x) => x.part == 2)?.values[0]
          .value;  
          let valueData : NodeJS.Dict<any>
          if(value && typeof value != "string"){
            valueData = value
            value = value.value
          }
          const priority = addedItem.parts.find((x) => x.part == 3)?.values[0]
            .value;
          const schema = addedItem.parts.find((x) => x.part == 4)?.values[0]
            .value;
          const selected =
            addedItem.parts.find((x) => x.part == 5)?.values[0].value == 1
              ? true
              : false;
          const added: IFixValueEx = {
            id: id ? parseInt(id) : null,
            value: value,
            priority: priority,
            schema: schema,
            selected: selected,
          };
          retVal.push(added);
        });
        
      }
    }
    return retVal.length > 0
      ? retVal.sort((a, b) => a.priority - b.priority)
      : null;
  }
}
