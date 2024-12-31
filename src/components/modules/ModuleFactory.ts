import AutocompleteModule from "./remote-source/autocomplete/AutocompleteModule";
import LookupModule from "./remote-source/lookup/LookupModule";
import UploadSimpleModule from "./upload/simple/UploadSimpleModule";
import UploadMultiPartModule from "./upload/multi-part/UploadMultiPartModule";
import ToolboxModule from "./base-class/ToolboxModule";
import IWorkspaceComponent from "../workspace/IWorkspaceComponent";
import CheckListModule from "./list-base/check-list/CheckListModule";
import SelectModule from "./list-base/select/SelectModule";
import RadioModule from "./list-base/radio/RadioModule";
import LongTextModule from "./text-base/long-text/LongTextModule";
import ShortTextModule from "./text-base/short-text/ShortTextModule";
import ColorModule from "./text-base/color/ColorModule";
import DatePickerModule from "./text-base/date-picker/DatePickerModule";
import IModuleFactory from "./IModuleFactory";
import QuestionModule from "./question/QuestionModule";
import SectionModule from "./section/SectionModule";
import TimePickerModule from "./text-base/timePicker/TimePickerModule";

export default class ModuleFactory implements IModuleFactory {
  public create(
    schemaId: string,
    owner: HTMLElement,
    container: IWorkspaceComponent,
    isABuiltIn: boolean,
    noAccessToEdit: boolean,
    model?: any
  ): ToolboxModule {
    let module: ToolboxModule = null;
    switch (schemaId) {
      case "text": {
        module = new ShortTextModule(owner, container, isABuiltIn, noAccessToEdit, model);
        break;
      }
      case "textarea": {
        module = new LongTextModule(owner, container, isABuiltIn, noAccessToEdit, model);
        break;
      }
      case "select": {
        module = new SelectModule(owner, container, isABuiltIn, noAccessToEdit, model, false);
        break;
      }
      case "advancedselect": {
        module = new SelectModule(owner, container, isABuiltIn, noAccessToEdit, model, true);
        break;
      }
      case "checklist": {
        module = new CheckListModule(owner, container, isABuiltIn, noAccessToEdit, model, false);
        break;
      }
      case "advancedchecklist": {
        module = new CheckListModule(owner, container, isABuiltIn, noAccessToEdit, model, true);
        break;
      }
      case "autocomplete": {
        module = new AutocompleteModule(owner, container, isABuiltIn, noAccessToEdit, model,false);
        break;
      }
      case "simpleautocomplete": {
        module = new AutocompleteModule(owner, container, isABuiltIn, noAccessToEdit, model,true);
        break;
      }
      case "question": {
        module = new QuestionModule(owner, container, isABuiltIn, noAccessToEdit, model);
        break;
      }
      case "section": {
        module = new SectionModule(owner, container, isABuiltIn, noAccessToEdit, model);
        break;
      }
      case "lookup": {
        module = new LookupModule(owner, container, isABuiltIn, noAccessToEdit, model);
        break;
      }
      case "radio": {
        module = new RadioModule(owner, container, isABuiltIn, noAccessToEdit, model, false);
        break;
      }
      case "advancedradio": {
        module = new RadioModule(owner, container, isABuiltIn, noAccessToEdit, model, true);
        break;
      }
      case "upload": {
        module = new UploadSimpleModule(owner, container, isABuiltIn, noAccessToEdit, model);
        break;
      }
      case "blob": {
        module = new UploadMultiPartModule(owner, container, isABuiltIn, noAccessToEdit, model);
        break;
      }
      case "color": {
        module = new ColorModule(owner, container, isABuiltIn, noAccessToEdit, model);
        break;
      }
      case "component.calendar.datepicker": {
        module = new DatePickerModule(owner, container, isABuiltIn, noAccessToEdit, model);
        break;
      }
      case "component.bc.timepicker": {
        module = new TimePickerModule(owner, container, isABuiltIn, noAccessToEdit, model);
        break;
      }
    }
    return module;
  }
}
