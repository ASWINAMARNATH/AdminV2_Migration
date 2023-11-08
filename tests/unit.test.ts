// import { ElementHandle, expect, Locator, Page, test } from '@playwright/test';
// import { webaction } from '../functions/login'
// import { environment } from '../resources/environment';
 import { navigation } from '../functions/Navigation';
// import { Creation }  from '../functions/creation';

// let webAction: webaction;
// let page: Page;
 let Navigation: navigation;
// let creation: Creation;
// test.describe("describe block", () => {
//     test.beforeAll(async ({ browser }) => {
//         page = await browser.newPage();
//         webAction = new webaction(page);
//         Navigation = new navigation(page);
//         creation = new Creation(page);
//     });
//     test("1", async () => {
//         await webAction.loginToAdminV2("atrainer@mailinator.com", "Pass123$");  //atrainer@mailinator.com  aswintrainer@mailinator.com
//     });
//     test("2", async () => {
 //       await Navigation.navigateToLibrary();
         await Navigation.navigateToNexa();
//         await Navigation.navigateToUnit();
//         await creation.createUnit();
//     });
//     test.skip("Override page contexts", async () => {
//         let context = page.context().pages().length;
//         if (context > 1) {
//             webAction  = new webaction(page.context().pages()[1]);
//             Navigation = new navigation(page.context().pages()[1]);
//             creation   = new Creation(page.context().pages()[1]);
//         }
//     });
     test("3", async () => {
         await Navigation.navigateToUnit();
//         //await creation.createUnit();
     });

//     test("AID_003 - Following elements should displayed in  create page 1. Input fields (name, duration, Repository URL) 2. Unit groups provided as tags 3. Unit duration in days 4. List of modules", async () => {
//         creation.assertionInUnitPage();
//     });
//     (
//         test("", () => {
//             creation.assertTextBoxPlaceHolderValues();
//             // creation.noOfCharactersCheck();

//         });

//     test("TC_17,TC_18", () => {
//         creation.assertionForDaysField();
//     })
//     test("", async ({ browser }) => {
//         page = await browser.newPage();
//         page.on('request', request => console.log('>>', request.method(), request.url()));

//         page.on('response', response => console.log('<<', response.status() !== 200, response.url()));
//         await page.goto("https://preview.revature.com/core");


//     })
// });   