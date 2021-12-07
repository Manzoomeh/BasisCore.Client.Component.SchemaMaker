import AutocompleteModule from "./autocomplete/AutocompleteModule";
import ToolboxModule from "./base-class/ToolboxModule";
import IContainerModule from "./IContainerModule";
import CheckListModule from "./list-base/check-list/CheckListModule";
import SelectModule from "./list-base/select/SelectModule";
import LongTextModule from "./text-base/long-text/LongTextModule";
import ShortTextModule from "./text-base/short-text/ShortTextModule";
import IModuleFactory from "./IModuleFactory";
import QuestionModule from "./question/QuestionModule";
import SectionModule from "./section/SectionModule";

export default class ModuleFactory implements IModuleFactory {
  public create(
    schemaId: string,
    owner: HTMLElement,
    container: IContainerModule,
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
    }

    return module;
  }
}
