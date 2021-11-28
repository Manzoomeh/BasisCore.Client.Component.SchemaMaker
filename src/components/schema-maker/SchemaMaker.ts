import IComponentManager from "../../basiscore/IComponentManager";
import ISourceOptions from "../../basiscore/ISourceOptions";
import IUserDefineComponent from "../../basiscore/IUserDefineComponent";

export default class SchemaMaker implements IComponentManager {
  readonly owner: IUserDefineComponent;

  constructor(owner: IUserDefineComponent) {
    this.owner = owner;
  }

  initializeAsync(): void | Promise<void> {}
  runAsync(source?: ISourceOptions) {}
}
