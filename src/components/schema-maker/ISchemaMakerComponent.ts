import { IUserDefineComponent } from "bclib/dist/bclib";

export default interface ISchemaMakerComponent {
  getOwner(): IUserDefineComponent;
}
