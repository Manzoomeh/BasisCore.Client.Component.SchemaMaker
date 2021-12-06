import IContainerModule from "../IContainerModule";
import ToolboxModule from "../base-class/ToolboxModule";
import "./assets/style.css";
export default abstract class TextBaseModule extends ToolboxModule {
  constructor(layout: string, owner: HTMLElement, component: IContainerModule) {
    super(layout, owner, false, component);
  }
}
