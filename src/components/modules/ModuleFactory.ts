import AutocompleteModule from "./remote-source/autocomplete/AutocompleteModule";
import LookupModule from "./remote-source/lookup/LookupModule";
import UploadModule from "./upload/UploadModule";
import ToolboxModule from "./base-class/ToolboxModule";
import IWorkspaceComponent from "../workspace/IWorkspaceComponent";
import CheckListModule from "./list-base/check-list/CheckListModule";
import SelectModule from "./list-base/select/SelectModule";
import RadioModule from "./list-base/radio/RadioModule";
import LongTextModule from "./text-base/long-text/LongTextModule";
import ShortTextModule from "./text-base/short-text/ShortTextModule";
import IModuleFactory from "./IModuleFactory";
import QuestionModule from "./question/QuestionModule";
import SectionModule from "./section/SectionModule";

export default class ModuleFactory implements IModuleFactory {
  public create(
    schemaId: string,
    owner: HTMLElement,
    container: IWorkspaceComponent,
    model?: any
  ): ToolboxModule {
    let module: ToolboxModule = null;
    switch (schemaId) {
      case "text": {
        module = new ShortTextModule(owner, container, model);
        break;
      }
      case "textarea": {
        module = new LongTextModule(owner, container, model);
        break;
      }
      case "select": {
        module = new SelectModule(owner, container, model);
        break;
      }
      case "checklist": {
        module = new CheckListModule(owner, container, model);
        break;
      }
      case "autocomplete": {
        module = new AutocompleteModule(owner, container, model);
        break;
      }
      case "question": {
        module = new QuestionModule(owner, container, model);
        break;
      }
      case "section": {
        module = new SectionModule(owner, container, model);
        break;
      }
      case "lookup": {
        module = new LookupModule(owner, container, model);
        break;
      }
      case "radio": {
        module = new RadioModule(owner, container, model);
        break;
      }
      case "upload": {
        module = new UploadModule(owner, container, model);
        break;
      }
    }

    return module;
  }
}
