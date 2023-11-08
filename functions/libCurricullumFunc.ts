import { ElementHandle, expect, Locator, Page, test } from '@playwright/test';
import { LibCurricullumElements } from '../pages/libCurricullumElements';
import {NAMECREATION} from '../functions/creationCruds';
 
let libCurricullumElements:LibCurricullumElements;
const creationCruds=new NAMECREATION();

export class LibCurricullumFunc{
    readonly page:Page;
    libraryMenu:Locator;
    libraryCurricullaMenu:Locator;
    createNewBtn:Locator;
    curricullumNameField:Locator
    nxtBtn:Locator;
    activateBtn:Locator;
    addActivityPopUp:Locator;
    lectureActivity:Locator;
    activityTitle:Locator;
    addActivityBtn:Locator;
    searchCurricullum:Locator;
    editCurricullumBtn:Locator;
    searchedCurricullum:Locator;
    addActivitySusessMsg:Locator;
    projectActivity:Locator;
    quizActivity:Locator;
    topicFromGit:Locator;
    moreBtn:Locator;
    urlActivity:Locator;
    codeEvaluationActivity:Locator;
    assignmentActivity:Locator;
    videoActivity:Locator;
    urlInput:Locator;
    curricullaBckBtn:Locator;
    curricullaSettingsBtn:Locator;
    nameInCurricullaSettings:Locator;
    curricullumSettingsCloseBtn:Locator;
   
    constructor(page: Page) {
        this.page = page;
        this.curricullumLocators();  
        this.addActivtyLocators();
    }

    curricullumLocators() {
        this.libraryMenu=this.page.locator("//div[text()='Library']");
        this.libraryCurricullaMenu=this.page.locator("//span[text()='curricula']"); 
        this.createNewBtn=this.page.locator("//button[@id='curDashCrNewBtn']");  
        this.curricullumNameField=this.page.locator("//input[@id='crtCurrName']");  
        this.nxtBtn=this.page.locator("//button[@id='crtCurrNxtBtn']");
        this.activateBtn=this.page.locator("//button[text()='Activate']");
        const weekscount = this.page.$$("//div[@class='rowGroup ng-star-inserted']");
        this.searchCurricullum = this.page.locator("//input[@type='search']");
        this.editCurricullumBtn = this.page.locator("//a[@title='Edit']//span[1]")
        this.searchedCurricullum = this.page.locator("//tr[@class='table-row ng-star-inserted']");
        this.curricullaBckBtn=this.page.locator("//span[contains(@class,'fa fa-arrow-left')]");
        this.curricullaSettingsBtn=this.page.locator("//button[@id='currSetngMenuBtn']//span[1]");
        this.curricullumSettingsCloseBtn=this.page.locator("//button[@id='currSetngClsBtn']//span[1]");
    }
    
    async addActivtyLocators(){
        this.addActivityPopUp=this.page.locator("//div[@class='modal-dialog modal-lg']//div[@class='modal-content']"); 
        this.activityTitle=this.page.locator("//input[@id='newActFieldId']");  
        this.lectureActivity=this.page.locator("//span[text()='Lecture']"); 
        this.projectActivity=this.page.locator("//span[text()='Project']");
        this.addActivityBtn=this.page.locator("(//button[text()='Add Activity '])[1]") ;
        this.addActivitySusessMsg=this.page.locator("//div[@id='toast-container']");
        this.quizActivity=this.page.locator("(//span[text()='Quiz'])[2]");
        this.topicFromGit=this.page.locator("//span[text()='Topic from Git']");
        this.moreBtn=this.page.locator("//button[@id='currVwActTypeMoreBtn']");
        this.videoActivity=this.page.locator("//span[text()='Video']");
        this.assignmentActivity=this.page.locator("//span[text()='Assignment']");
        this.codeEvaluationActivity=this.page.locator("(//span[text()='Code Evaluation'])[2]");
        this.urlActivity=this.page.locator("//span[text()='URL']");
        this.urlInput=this.page.locator("//input[@id='newActFieldId' and @placeholder='Enter the URL']");
        this.nameInCurricullaSettings=this.page.locator("//input[@id='currSetngCurrName']");
    }
//---------------------------------------------------------------------------------------------------------------------//
    async navigateToLibraryCurriculla(){
       await this.libraryMenu.click();
       await this.page.waitForTimeout(6000);
       await this.page.waitForLoadState('networkidle');
       await this.libraryCurricullaMenu.click();
       await this.page.waitForTimeout(6000);
       await this.page.waitForLoadState('networkidle');
    }
    
    async createNewCurricullaWithAllTypeOfActivities(){
        await this.createNewBtn.click();
        await this.page.waitForLoadState('networkidle');
        await this.enterCurricullumName();
        await this.selectCurricullumDays("weekdays",5);
        await this.enterDiscription();
        await this.page.keyboard.press("PageDown");
        await this.page.keyboard.press("PageDown");
        await this.page.waitForTimeout(2000);       
        await this.nxtBtn.click();
        await this.page.waitForLoadState('load');
        expect(this.activateBtn).toBeTruthy();
        await this.addActivity("Lecture",1,1);
        await this.addActivity("Project",1,1);
        await this.addActivity("Quiz",1,1);
        await this.addActivity("TopicfromGit",1,1);
        await this.addActivity("Video",1,1);
        await this.addActivity("Assignment",1,1);
        await this.addActivity("CodeEvaluation",1,1);
        await this.addActivity("Url",1,1);
        await this.curricullaBckBtn.click();
        await this.page.waitForTimeout(6000);
    }

    async searchCurriculla(curricullumName:string){
        expect(this.searchCurricullum).toBeTruthy();
        await this.page.waitForTimeout(2000); 
        await this.searchCurricullum.click();
        await this.searchCurricullum.type(curricullumName);
        await this.page.waitForTimeout(2000); 
        await this.page.keyboard.press('Enter');
        await this.page.waitForTimeout(6000);         
    }

    async editCurriculla(){
        await this.searchedCurricullum.hover();
        await this.editCurricullumBtn.click();
        await this.page.waitForTimeout(6000);      
    }

    async enterCurricullumName(){
        expect(this.curricullumNameField).toBeTruthy();

        await this.curricullumNameField.type(creationCruds.nameCreation("Automation curricullum"));
    }

    async selectCurricullumDays(type:string ,noOfDays:number){
        const currDays = await this.page.$$("(//div[@id='crtCurrDftSchBtnGrp']//button)");
        console.log(currDays.length);
        if(type==="weekdays"){
            for(let i=1;i<=noOfDays;i++){
              await currDays[i].click();
            }
        }
        await this.page.waitForTimeout(2000);
    }
    async enterDiscription(){
        const discriptioniframe = this.page.frameLocator("//iframe[@class='cke_wysiwyg_frame cke_reset']");
        const paragraph=discriptioniframe.locator("//body[contains(@class,'cke_editable cke_editable_themed')]//p");
        await paragraph.click();
        await this.page.waitForTimeout(1000);
        await paragraph.type("Curricullum discription");
    }

    async addActivity(activityType : string ,weekNumber : number ,weekDay : number){
        await this.selectDays(weekNumber,weekDay);
        await this.selectActivity(activityType);
    }
     async selectDays(weekNumber :number ,weekDay : number){
        const currentDay=this.page.locator("//div[@class='rowGroup ng-star-inserted']["+weekNumber+"]//div[@class='cell ng-star-inserted']["+weekDay+"]");
        const bounding_box = await currentDay.boundingBox();
        let height:any;
        if(bounding_box != null){
            console.log("Not Null----------------->")
            height=bounding_box['height'];
        }
        await currentDay.click({ position: { x: 70, y: height-10 } });
        await this.page.waitForTimeout(3000);
        expect(this.addActivityPopUp).toBeTruthy();
    } 
     
     async selectActivity(activityType : string){
        if(activityType === "Lecture" || activityType === "Project" || activityType === "Quiz" || activityType === "TopicfromGit" ){
            if(activityType=== "Lecture"){
               await this.createLectureActivity();
            }
            if(activityType === "Project"){
                await this.createProjectActivity();
            }
            if(activityType === "Quiz"){
                await this.createQuizActivity();
            }
            if(activityType === "TopicfromGit"){
                await this.createTopicFromGitActivity();
            }
               
        }
        else{
            await this.moreBtn.click();
            await this.page.waitForTimeout(1000);
            if(activityType=== "Video"){
                await this.createVideoActivity();

            }
            if(activityType=== "Assignment"){
                await this.createAssignmentActivity();

            }
            if(activityType=== "CodeEvaluation"){
                await this.createCodeEvaluationActivity();
            }
            if(activityType === "Url"){
                await this.createUrlActivity();
            }

        }

     }

     async checkActivityChip(activityName:string){
        const selectedActivityChip=this.page.locator("//span[@class='chip ng-star-inserted' and text()='"+activityName+"']");
        expect(selectedActivityChip).toBeVisible();     
     }

    async createLectureActivity(){
       await this.lectureActivity.click();
      // await this.page.waitForTimeout(3000);
       await this.activityTitle.click();
       await this.page.waitForTimeout(1000);
       await this.activityTitle.type("Lecture Activity");
       await this.page.waitForTimeout(2000);
       await this.addActivityBtn.click();
       expect (this.addActivitySusessMsg).toBeTruthy();
       await this.page.waitForTimeout(3000);
    }

    async createProjectActivity(){
        await this.projectActivity.click();
        await this.page.waitForTimeout(1000);
        await this.activityTitle.click();
        await this.page.waitForTimeout(1000);
        await this.activityTitle.type("Project Activity");
        await this.page.waitForTimeout(2000);
        await this.addActivityBtn.click();
       expect (this.addActivitySusessMsg).toBeTruthy();
       await this.page.waitForTimeout(3000);
    }

    async createQuizActivity(){
        await this.quizActivity.click();
        await this.page.waitForTimeout(1000);
        await this.activityTitle.click();
        await this.page.waitForTimeout(1000);
        await this.activityTitle.type("Project Activity");
        await this.page.waitForTimeout(2000);
        await this.addActivityBtn.click();
        expect (this.addActivitySusessMsg).toBeTruthy();
       await this.page.waitForTimeout(3000);
    }
    
    async createTopicFromGitActivity(){
        await this.topicFromGit.click();
        await this.page.waitForTimeout(2000);
        const subjectCheckBox=this.page.locator("(//label[@class='form-check-label pull-right'])[1]");
        subjectCheckBox.click();
        await this.page.waitForTimeout(2000);
        const topicFromGitAddBtn=this.page.locator("//button[text()=' Add ']");
        await topicFromGitAddBtn.click();
        await this.page.waitForTimeout(7000);
    }

    async createVideoActivity(){
        await this.videoActivity.click();
        await this.checkActivityChip("Video");
        await this.activityTitle.click();
        await this.page.waitForTimeout(1000);
        await this.activityTitle.type("video Activity");
        await this.addActivityBtn.click();
        expect (this.addActivitySusessMsg).toBeTruthy();
        await this.page.waitForTimeout(3000);
    }
    async createAssignmentActivity(){
        await this.assignmentActivity.click();
        await this.checkActivityChip("Assignment");
        await this.activityTitle.click();
        await this.page.waitForTimeout(1000);
        await this.activityTitle.type("assignment Activity");
        await this.addActivityBtn.click();
        expect (this.addActivitySusessMsg).toBeTruthy();
        await this.page.waitForTimeout(3000);
    }
    async createCodeEvaluationActivity(){
        await this.codeEvaluationActivity.click();
        await this.checkActivityChip("Code Evaluation");
        await this.activityTitle.click();
        await this.page.waitForTimeout(1000);
        await this.activityTitle.type("Code Evaluation Activity");
        await this.addActivityBtn.click();
        expect (this.addActivitySusessMsg).toBeTruthy();
        await this.page.waitForTimeout(3000);
    }
    async createUrlActivity(){
        await this.urlActivity.click();
        await this.checkActivityChip("URL");
        const urlActivityTitle=this.page.locator("(//input[@id='newActFieldId'])[1]")
        await urlActivityTitle.click();
        await this.page.waitForTimeout(1000);
        await this.activityTitle.type("URL  Activity");
        await this.urlInput.type("www.revature.com");
        await this.addActivityBtn.click();
        expect (this.addActivitySusessMsg).toBeTruthy();
        await this.page.waitForTimeout(3000);
    }

    async checkingCurricullumName(curricullumName : string){
        expect (this.curricullaSettingsBtn).toBeVisible();
        await this.curricullaSettingsBtn.click();
        await this.page.waitForTimeout(3000);
        const curricullaNameInCurricullaSettings=this.page.locator("//input[@id='currSetngCurrName']")
        await expect (curricullaNameInCurricullaSettings).toHaveText(curricullumName);
        await this.curricullumSettingsCloseBtn.click();
        await this.page.waitForTimeout(1000);
        const curricullaNameLabel=this.page.locator("//h1[contains(@class,'text-uppercase page-heading')]");
        await expect (curricullaNameLabel).toHaveText(curricullumName);
        await this.curricullaBckBtn.click();
        await this.page.waitForTimeout(6000);
    }

}