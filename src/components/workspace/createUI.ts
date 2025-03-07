import { IUserDefineComponent } from "basiscore";
import { ModuleType } from "../ISchemaMakerSchema";
import { IQuestionSchema } from "basiscore";
import IModuleFactory from "../modules/IModuleFactory";
import ToolboxModule from "../modules/base-class/ToolboxModule";
import IWorkspaceComponent from "./IWorkspaceComponent";
// , container?:Element, json?:IQuestionSchema,  noAccessToEdit?: boolean,
//          workSpace?: WorkspaceComponent
export default class CreateUI  {
    private owner : IUserDefineComponent
    private workSpace : IWorkspaceComponent
    private readonly _modules: Map<number, ToolboxModule> = new Map<
    number,
    ToolboxModule
  >();
    constructor(owner: IUserDefineComponent, workspace? : IWorkspaceComponent) {
      this.owner = owner
      this.workSpace = workspace
    }
    public createUIFromQuestionSchema(question: IQuestionSchema, container : Element,accessToEdit : boolean) {
      // note : be care for document.querselevtor , should be container
        const board = document.querySelector("[data-bc-sm-board]");
        board.innerHTML = "";
        this.createUIElements(board, question, false, accessToEdit);
      }
    
       createUIElements(
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
      createContainer(
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
        const module = factory.create(schemaId, container, this.workSpace , isABuiltIn, noAccessToEdit, data);
        container.setAttribute("data-bc-module-id", module.usedForId.toString());
        this._modules.set(module.usedForId, module);
        return container;
      }

}