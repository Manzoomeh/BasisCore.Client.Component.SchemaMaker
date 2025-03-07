import { ISource, IUserDefineComponent,IQuestionSchema } from "basiscore";
import ComponentBase from "../ComponentBase";
import layout from "./assets/layout.html";
import "./assets/style.css";
import ISchemaMakerSchema, { ModuleType } from "../ISchemaMakerSchema";
import IModuleFactory from "../modules/IModuleFactory";
import ToolboxModule from "../modules/base-class/ToolboxModule";
import IWorkspaceComponent from "../workspace/IWorkspaceComponent";
import WorkspaceComponent from "../workspace/WorkspaceComponent";
import CreateUI from "../workspace/createUI";
export default class AIcomponent extends ComponentBase
implements IWorkspaceComponent
 {
  private createUICom : CreateUI
  private _sourceId: string;
  private _noAccessToEdit: boolean;
  private workspace : WorkspaceComponent
  private readonly _modules: Map<number, ToolboxModule> = new Map<
  number,
  ToolboxModule
>();
  constructor(owner: IUserDefineComponent) {
    super(owner, layout, "data-bc-sm-toolbox-container");
    this.createUICom = new CreateUI(owner, this)
   
  }

  public async initializeAsync(): Promise<void> {

  }

  public runAsync(source?: ISource, ) {
    this.crateUI();
  }
  crateUI(){
    const sendMessageButton : HTMLElement = this.container.querySelector(".SendMessage")
    const chatValue : HTMLInputElement = this.container.querySelector("#chat")
    sendMessageButton.addEventListener("click" ,  (e) => {
      const firstSection : HTMLElement = this.container.querySelector(".MESection")
      const chatInputSection :HTMLElement = this.container.querySelector(".chatInputBox")
      firstSection.style.display="none"
      chatInputSection.classList.add("extend_chat_box")
      this.sendMessage(chatValue.value)
    } )
  }
   async sendMessage(value:string ){
    const submitButton = document.querySelector(".SendMessageMain")
    const stopBtn = document.createElement("div")
    stopBtn.classList.add("stop-btn")
    stopBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#68737C"><path d="M320-320h320v-320H320v320ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>`
    stopBtn.addEventListener("click" , function(){
        // stopWriter()

    })
    submitButton?.parentNode.insertBefore(stopBtn, submitButton.nextSibling);
  // document.querySelector('.loadChatSection ').style.overflowY='auto'
  
  
  // opacityIcon(chatvalue,true)

    let chatvalue2: HTMLInputElement = this.container.querySelector("#chat")
    const newDiv = document.createElement("div")
    newDiv.setAttribute("class" , "user_question")
    newDiv.innerHTML = `
    <span class="userIcon">
    <img src="https://basispanel.ir/images/usericon-v3.svg" alt="basis" title="basis" class="object-contain">
    </span> 
    <span class="userDetail">
    <div class="userName">
    شما
    </div>
    <div class="">
    ${chatvalue2.value}

    </div>
    </span>
    `
    this.container.querySelector("#chatbox").appendChild(newDiv)
   
    //     this.owner.setSource("db.send" ,{
    //     "run" : true,
    //     "val" : chatvalue2.value
    // })

    const messageResult = await this.requestJsonAsync(`http://localhost:8080/server/chat`, "POST", {
      message: chatvalue2.value
    });

    if(messageResult.json == true){
    
     
       
          console.log("res" , messageResult)
          // const json = JSON.parse(
          //   this.removeSpanAndBrTags(messageResult.message)
          // );
          // console.log("json is" , json)
          // this.errorContainer.textContent = "JSON is valid.";
          // this._textArea.style.display = "none";
          // this.errorContainer.style.display = "none";
          // this.container.querySelector<HTMLElement>(
          //   "[data-bc-sm-preview-json]"
          // ).style.display = "block";
          // const newJson = JSON.stringify(json, null, 4);
          // const html = Prism.highlight(newJson, Prism.languages.json, "json");
          
          // this._result = json;
          // this.owner.setSource(this._internalSourceId, json);
          // jsonDownload.setAttribute("data-get-btn-disabled", "");
          // jsonCopy.setAttribute("data-get-btn-disabled", "");
          // jsonSave.setAttribute("data-get-btn-disabled", "");
          // editForm.setAttribute("data-get-btn-disabled", "");
          console.log("sss111" , WorkspaceComponent)
          // note: be care for last parameter
          const newDiv = document.createElement("div")
      newDiv.setAttribute("class" , "bot_answer")
      const viewButton = document.createElement("button")
      viewButton.textContent = "مشاهده فرم"
      viewButton.classList.add("button-view-schema")
      newDiv.innerHTML = `
      <span class="">
      <img src="https://basispanel.ir/images/user1-v3.png" alt="basis" title="basis" class="object-contain">
      </span> 
      <span class="userDetail">
     
      <div class="">
      فرم شما آماده است .
  
      </div>
     
      </span>
      `
      newDiv.appendChild(viewButton)
      this.container.querySelector("#chatbox").appendChild(newDiv)
      viewButton.addEventListener("click" , (e) => {
        this.createUICom.createUIFromQuestionSchema(messageResult.message, this.container, false);
        const designTab :HTMLElement= document.querySelector('[data-bc-sm-tab-button="sm-design-tab"]')
        designTab.click()
      })
     
      // try {
       
      //   } catch (error) {
      //       console.log("erro" , error)
      //   }
    }
    else{
      const newDiv = document.createElement("div")
      newDiv.setAttribute("class" , "bot_answer")
      newDiv.innerHTML = `
      <span class="">
      <img src="https://basispanel.ir/images/user1-v3.png" alt="basis" title="basis" class="object-contain">
      </span> 
      <span class="userDetail">
     
      <div class="">
      ${messageResult.data}
  
      </div>
      </span>
      `
      this.container.querySelector("#chatbox").appendChild(newDiv)
    }
    chatvalue2.value=""
    document.querySelector("#current_section")?.removeAttribute("id")

// scrollToBottom()

}
async requestJsonAsync(
  url: string,
  method: "POST" | "GET" = "GET",
  data?: object
): Promise<any> {
  const init: any = {
    method: method
  };
  if (data) {
    init.body = JSON.stringify(data);
  }
  const response = await fetch(url, init);
  const result = await response.json();
  return result;
}




public getComponent(): IUserDefineComponent {
  return this.owner;
}
public onRemove(moduleId: number) {}

public getModule(moduleId: number): ToolboxModule {
  return this._modules.get(moduleId);
}
private removeSpanAndBrTags(str) {
  return str.replace(/<\/?(span|br|div)\b[^>]*>/g, "");
}

}
