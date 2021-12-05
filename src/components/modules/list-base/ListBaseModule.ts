import IUserDefineComponent from "../../../basiscore/IUserDefineComponent";
import ToolboxModule from "../base-class/ToolboxModule";
import "./assets/style.css";
export default abstract class ListBaseModule extends ToolboxModule {
  constructor(
    layout: string,
    owner: HTMLElement,
    component: IUserDefineComponent
  ) {
    super(layout, owner, false, component);
  }
}
