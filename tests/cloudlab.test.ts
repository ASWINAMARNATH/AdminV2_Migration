import { ElementHandle, expect, Locator, Page, test } from '@playwright/test';
import { webaction } from '../functions/login'
import { CloudLabFunctions } from '../functions/cloudlabFunction';
// import { chromium } from 'playwright-extra';
// import stealth from 'puppeteer-extra-plugin-stealth';
// let Stealth:typeof stealth;


let webAction: webaction;
let page: Page;
let cloudlabFunction:CloudLabFunctions;
let context:any;
//let Chromium:typeof chromium;

test.describe("Cloud Lab", ()=>{
    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage();
        context = await browser.newContext();
        webAction=new webaction(page);
        cloudlabFunction=new CloudLabFunctions(page);
  
    });

    test("101010",async()=>{
        await cloudlabFunction.test();
       
    });   
   
    test("1",async ()=>{
        
        await webAction.loginToAdminV2("atrainer@mailinator.com", "Pass123$");
        await cloudlabFunction.loginAsUserFunction("auto1697132091081@mailinator.com");
         //atrainer@mailinator.com  aswintrainer@mailinator.com
    });
    test("1212121",async()=>{
        let context = page.context().pages().length;
        console.log("FIRST --Context lenght -->"+context);
        if (context > 1) {
               // webAction = new webaction(page.context().pages()[1]);
                cloudlabFunction = new CloudLabFunctions(page.context().pages()[1]);
        }
    });
   
    test("Start Imocha Test in revpro",async()=>{
        await cloudlabFunction.startImochaTest();
        //await cloudlabFunction.clickingStartBtn();
    });
    test("Getting imocha test Url",async()=>{
       await cloudlabFunction.getImochaTestUrl();
    });
    test("accessing imocha test with imocha url",async()=>{
        await cloudlabFunction.imochaCheck();    
    });   
    // test("Context loading -> Imocha",async()=>{
    //     let context =page.context().pages().length;
    //     console.log("SECOND--Context lenght -->"+context);
    //     if (context > 2) {
    //             console.log("context working");
    //             cloudlabFunction = new CloudLabFunctions(page.context().pages()[2]);
    //     }
    // });
    // test("Get the Imocha apis",async ()=>{
    //     await cloudlabFunction.gettingsApinImocha();
    // });
    // test("Navigate to Batch and Select Batch",async()=>{
    //     await cloudlabFunction.navigateToBatch();
    //     await cloudlabFunction.selectBatch("Batch new new");
    // });
    // test("Navigate to curriculla",async()=>{
    //     await cloudlabFunction.navigateToCurricula("Batch new new");
    // });
    // test("Add assignment Activity",async()=>{
    //     await cloudlabFunction.CreateLabActivity("Assigment","https://github.com/cloud-lab-private/javascript_WithYml01","","Coding Lab");
    // });
     // test("Accept Cookies",async ()=>{
    //     await cloudlabFunction.acceptAllCookies();
    //    // await cloudlabFunction.clickOnCurricullum();
    // });

    // test("Go to curriculla",async ()=>{
    //     await cloudlabFunction.acceptAllCookies();
    //     await cloudlabFunction.clickOnCurricullum();
    // });
    // test("Start curriculla",async ()=>{
    //     await cloudlabFunction.startCurricullum("Preview curriculla (Copy)");
    //     await cloudlabFunction.startAssignmentActivity("Assigment");
    //     await cloudlabFunction.waitTillImport();
    // });
  
 
  
});