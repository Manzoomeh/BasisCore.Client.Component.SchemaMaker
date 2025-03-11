import { ISource, IUserDefineComponent } from "basiscore";
import ComponentBase from "../ComponentBase";
import layout from "./assets/layout.html";
import "./assets/style.css";
import ToolboxModule from "../modules/base-class/ToolboxModule";
import IWorkspaceComponent from "../workspace/IWorkspaceComponent";
import WorkspaceComponent from "../workspace/WorkspaceComponent";
import CreateUI from "../workspace/createUI";
import * as Prism from "prismjs";
import { IToken } from "basiscore";
import SchemaMakerComponent from "../schema-maker/SchemaMakerComponent";
import IModuleFactory from "../modules/IModuleFactory";
export default class AIcomponent extends ComponentBase

 {
  private createUICom : CreateUI
  private  timeoutId;
  private _rkey : string ;
  private _aiUrl:string;
  private chatInput : HTMLInputElement;
  public _internalSourceId: string;
  private workSpace : WorkspaceComponent
  private resultSourceIdToken: IToken<string>;
  
  private readonly _modules: Map<number, ToolboxModule> = new Map<
  number,
  
  ToolboxModule
>();
  constructor(owner: IUserDefineComponent) {
    super(owner, layout, "data-bc-sm-workspace-container");
    this.createUICom = new CreateUI(owner, this)
  }

  public async initializeAsync(): Promise<void> {
    this._rkey= await this.owner.getAttributeValueAsync("rkey")
    this._aiUrl = await this.owner.getAttributeValueAsync("aiUrl")
    this.resultSourceIdToken = this.owner.getAttributeToken("resultSourceId");
    const resultSourceId = await this.resultSourceIdToken?.getValueAsync();
    this._internalSourceId = this.owner.getRandomName(resultSourceId);
    // const schemaCommand = this.container.querySelector(
    //   "div[data-get-schema-preview] basis[core='schema']"
    // );
    // schemaCommand.setAttribute("triggers", this._internalSourceId);

    // const scriptElement = this.container.querySelector<HTMLScriptElement>(
    //   "[data-bc-sm-script]"
    // );

    const script_tag = document.createElement("script");
    // script_tag.text = scriptElement.text.replace(
    //   "@internalSourceId",
    //   this._internalSourceId
    // );
    // schemaCommand.parentElement.appendChild(script_tag);
    // scriptElement.remove();
    
  }

  public async runAsync(source?: ISource, ) {

    this.crateUI();

  }
  crateUI(){
    
    const sendMessageButton : HTMLElement = this.container.querySelector(".SendMessage")
    this.chatInput =  this.container.querySelector("#chat")
    const firstSection : HTMLElement = this.container.querySelector(".MESection")
    const chatInputSection :HTMLElement = this.container.querySelector(".chatInputBox")
    sendMessageButton.addEventListener("click" ,  (e) => {
    
      firstSection.style.display="none"
      chatInputSection.classList.add("extend_chat_box")
      this.sendMessage(this.chatInput.value)
    } )
    this.chatInput.addEventListener("keydown",  (e) => {
      if (e.key === 'Enter') {  //checks whether the pressed key is "Enter"
        firstSection.style.display="none"
        chatInputSection.classList.add("extend_chat_box")
        if (e.shiftKey) {
          this.insertNewLine();
          e.preventDefault(); // Prevent the default behavior
          // Allow Shift + Enter to insert a new line in the textarea
          // No need to call preventDefault() here, as the default behavior is what we want
      }

      else{
          e.preventDefault();
          if (this.chatInput.value != '') {
              this.sendMessage(this.chatInput.value);
              this.chatInput.value = '';
          }
        }
      }
  });
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
    const messageResult = await this.requestJsonAsync(this._aiUrl, "POST", {
      message: chatvalue2.value
    });

    if(messageResult.json == true){
    
     
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
      const formElements = document.querySelectorAll("[data-bc-sm-question-module]")
     

      viewButton.addEventListener("click" , (e) => {
        
        this.createUICom.createUIFromQuestionSchema(messageResult.message, this.container, true);
        const designTab :HTMLElement= document.querySelector('[data-bc-sm-tab-button="sm-design-tab"]')
        designTab.click()
          // note : the document.querySelector is wrong
          
          const newJson = JSON.stringify(messageResult.message, null, 4);
          
          const html = Prism.highlight(newJson, Prism.languages.json, "json");
        document.querySelector<HTMLTextAreaElement>(
          "[data-bc-sm-preview-json]"
        ).innerHTML =html;
        const rowsParent = document.querySelector('[data-drop-acceptable-container-schema-type]')
       const rows = rowsParent.querySelectorAll('[data-schema-type="question"]')
       
       rows.forEach(el => {

        var schemaId = el.getAttribute("data-schema-Id");
          const owner : HTMLElement = el as HTMLElement
          const factory = this.owner.dc.resolve<IModuleFactory>("IModuleFactory");

               const module = factory.create(schemaId, owner, this, false, false);
               this._modules.set(module.usedForId, module);

       })

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
     
      <div id="current_section">
      
  
      </div>
      </span>
      `
      stopBtn.classList.add("stop-btn")
      stopBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="27px" viewBox="0 -960 960 960" width="27px" fill="#68737C"><path d="M320-320h320v-320H320v320ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>`
      stopBtn.addEventListener("click" , (e) => {
          this.stopWriter()

      })
      document.querySelector(".chatInputBox ").appendChild(stopBtn)
      this.container.querySelector("#chatbox").appendChild(newDiv)
      const currentDiv = this.container.querySelector("#current_section")
      this.startTypewriter(messageResult.data, currentDiv);
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


private startTypewriter  (text: string, containerId: Element): void  {
    const typewriterElement =containerId;
    if (!typewriterElement) {
        console.error(`Element with id ${containerId} not found.`);

        return;
    }

    let index = 0;
    const loaderElement = typewriterElement.querySelector(".typing-loader");
    if (loaderElement) {
        loaderElement.classList.remove("typing-loader");
    }
    typewriterElement.innerHTML = ''; // Clear previous content

    const typeWriter = (): void => {
        if (index < text.length) {
            const char = text.charAt(index);

            // Handle ** for <h2>
            if (char === '*' && text.charAt(index + 1) === '*') {
                index += 2; // Skip the **

                const h2Element = document.createElement('h2');
                typewriterElement.appendChild(h2Element);

                let h2Text = '';
                while (index < text.length && !(text.charAt(index) === '*' && text.charAt(index + 1) === '*')) {
                    h2Text += text.charAt(index);
                    index++;
                }

                let h2Index = 0;
                const typeH2 = (): void => {
                    if (h2Index < h2Text.length) {
                        h2Element.textContent += h2Text.charAt(h2Index);
                        h2Index++;
                        const delay = h2Text.charAt(h2Index - 1) === ' ' ? 50 : 10;
                        this.timeoutId = setTimeout(typeH2, delay);
                    } else {
                        index += 2; // Skip the closing **
                        this.timeoutId = setTimeout(typeWriter, 10);
                    }
                };

                typeH2();
            }
            // Handle newlines (\r\n) for <p>
            else if (char === '\r' && text.charAt(index + 1) === '\n') {
                index += 2; // Skip the \r\n

                const pElement = document.createElement('p');
                typewriterElement.appendChild(pElement);

                this.timeoutId = setTimeout(typeWriter, 10);
            } else {
                if (!typewriterElement.lastElementChild || typewriterElement.lastElementChild.tagName === 'H2') {
                    const divElement = document.createElement('div');
                    typewriterElement.appendChild(divElement);
                }
                typewriterElement.lastElementChild.textContent += char;
                index++;
                const delay = char === ' ' ? 50 : 10;
                this.timeoutId = setTimeout(typeWriter, delay);
            }
        } else if (index === text.length) {
            // clearStopBtn(); // Assuming this is a function defined elsewhere
        } else {
            const h2Elements = document.querySelectorAll('h2');
            h2Elements.forEach((h2) => {
                h2.style.borderRight = 'none';
            });
        }
    };

    // Start the typewriter effect
    typeWriter();
};
stopWriter (){
  clearTimeout(this.timeoutId);
  this.clearStopBtn();
}
clearStopBtn(){
  const stopButton: HTMLElement = this.container.querySelector(".stop-btn")
  stopButton.remove()
}
 insertNewLine() {
  let currentValue = this.chatInput.value;
  let updatedValue = currentValue + '\n';
  this.chatInput.value = updatedValue;
}

}
