import IUserDefineComponent from "../../basiscore/IUserDefineComponent";

export default interface ISchemaMakerComponent {
  getOwner(): IUserDefineComponent;
}
