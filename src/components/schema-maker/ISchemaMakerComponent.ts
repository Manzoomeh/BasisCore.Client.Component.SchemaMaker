import { IUserDefineComponent } from "basiscore";

export default interface ISchemaMakerComponent {
  getOwner(): IUserDefineComponent;
}
