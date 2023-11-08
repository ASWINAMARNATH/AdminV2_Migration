import { ElementHandle, expect, Locator, Page, test } from '@playwright/test';
import { LibCurricullumFunc } from '../functions/libCurricullumFunc';
import { webaction } from '../functions/login'

let page: Page;
let context:any;
let libCurriculumFunction:LibCurricullumFunc;
let webAction: webaction

test.describe("Cloud Lab", ()=>{
    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage();
        context = await browser.newContext();
        libCurriculumFunction=new LibCurricullumFunc(page);
        webAction=new webaction(page);
    });
   
    test("Login as a training admin",async()=>{
        await webAction.loginToAdminV2("atrainer@mailinator.com", "Pass123$");  ////atrainer@mailinator.com  aswintrainer@mailinator.com
    });

    test("TC_030 - create curriculum by filling data in all the fields with all types of activities in it",async()=>{
        await libCurriculumFunction.navigateToLibraryCurriculla();
    //    await libCurriculumFunction.createNewCurricullaWithAllTypeOfActivities();
    });
    // test('TC_032 - Create a curriculum with existing curriculum name', async() => {
    //     await libCurriculumFunction.createNewCurricullaWithAllTypeOfActivities();
    // });

    test("TC_001, TC_002 - Display of Curriculum name and verifying curricullum name",async() => {
        await libCurriculumFunction.searchCurriculla("sasasas");
        await libCurriculumFunction.editCurriculla();
        await libCurriculumFunction.checkingCurricullumName("sasasas")
    });

    // test("edit curricullum",async()=>{
    //     await libCurriculumFunction.navigateToLibraryCurriculla();
    //     await libCurriculumFunction.searchCurriculla("sasasas");
    //     await libCurriculumFunction.editCurriculla();
    //     await libCurriculumFunction.addActivity("Lecture",1,1);
    //     await libCurriculumFunction.addActivity("Project",1,1);
    //     await libCurriculumFunction.addActivity("Quiz",1,1);
    //     await libCurriculumFunction.addActivity("TopicfromGit",1,1);
    //     await libCurriculumFunction.addActivity("Video",1,1);
    //     await libCurriculumFunction.addActivity("Assignment",1,1);
    //     await libCurriculumFunction.addActivity("CodeEvaluation",1,1);
    //     await libCurriculumFunction.addActivity("Url",1,1);
    // });
 
  
});