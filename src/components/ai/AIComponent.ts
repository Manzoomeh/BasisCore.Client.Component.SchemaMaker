import { ISource, IUserDefineComponent,IQuestionSchema } from "basiscore";
import ComponentBase from "../ComponentBase";
import layout from "./assets/layout.html";
import "./assets/style.css";
import ISchemaMakerSchema, { ModuleType } from "../ISchemaMakerSchema";
import IModuleFactory from "../modules/IModuleFactory";
import ToolboxModule from "../modules/base-class/ToolboxModule";
import IWorkspaceComponent from "../workspace/IWorkspaceComponent";
export default class AIcomponent extends ComponentBase
implements IWorkspaceComponent
 {
  private _sourceId: string;
  private _noAccessToEdit: boolean;
  private readonly _modules: Map<number, ToolboxModule> = new Map<
  number,
  ToolboxModule
>();
  constructor(owner: IUserDefineComponent) {
    super(owner, layout, "data-bc-sm-toolbox-container");
  }

  public async initializeAsync(): Promise<void> {

  }

  public runAsync(source?: ISource) {
    this.crateUI();
  }
  crateUI(){
    const sendMessageButton : HTMLElement = this.container.querySelector(".SendMessage")
    const chatValue : HTMLInputElement = this.container.querySelector("#chat")
    sendMessageButton.addEventListener("click" ,  (e) => {
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
    newDiv.setAttribute("class" , "ME")
    newDiv.innerHTML = `
    <span class="userIcon">
    <img src="/images/usericon-v3.svg" alt="basis" title="basis" class="object-contain">
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
    
     
        try {
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
        
          this.createUIFromQuestionSchema(messageResult.message);
        } catch (error) {
            console.log("erro" , error)
        }
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
private createUIFromQuestionSchema(question: IQuestionSchema) {
  const board = document.querySelector("[data-bc-sm-board]");
  board.innerHTML = "";
  this.createUIElements(board, question, false, this._noAccessToEdit);
}

private createUIElements(
  board: Element,
  questionSchema: IQuestionSchema,
  isABuiltIn: boolean,
  noAccessToEdit: boolean
) {
  if (questionSchema) {
    const sections = new Map<Number, Element>();
    if (questionSchema.sections) {
      questionSchema.sections.forEach((x) => {
        const sectionModule = this.createContainer(
          questionSchema,
          "section",
          "section",
          x,
          isABuiltIn,
          noAccessToEdit
        );
        sections.set(x.id, sectionModule);
        board.appendChild(sectionModule);
      });
    }
    if (questionSchema.questions) {
      questionSchema.questions.forEach((question) => {
        const questionModule = this.createContainer(
          questionSchema,
          "question",
          "question",
          question,
          isABuiltIn,
          noAccessToEdit
        );
        if (question.sectionId && sections.has(question.sectionId)) {
          const section = sections.get(question.sectionId);
          section
            .querySelector("[data-drop-acceptable-container-schema-type]")
            .appendChild(questionModule);
        } else {
          board.appendChild(questionModule);
        }
        if (question.parts) {
          question.parts.forEach((part) => {
            const partModule = this.createContainer(
              questionSchema,
              part.viewType,
              "question",
              part,
              isABuiltIn,
              noAccessToEdit
            );
            const partContainer = questionModule.querySelector(
              `[data-bc-question-part-number="${part.part}"]`
            );
            partContainer.appendChild(partModule);
          });
        }
      });
    }
  }
}
private createContainer(
  question: IQuestionSchema,
  schemaId: string,
  schemaType: ModuleType,
  data: any,
  isABuiltIn: boolean,
  noAccessToEdit: boolean
): Element {
  const container = document.createElement("div");
  container.setAttribute("data-schema-id", schemaId);
  container.setAttribute("data-schema-type", schemaType);
  const factory = this.owner.dc.resolve<IModuleFactory>("IModuleFactory");
  const module = factory.create(schemaId, container, this, isABuiltIn, noAccessToEdit, data);
  container.setAttribute("data-bc-module-id", module.usedForId.toString());
  this._modules.set(module.usedForId, module);
  return container;
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
