import { ElementHandle, expect, Locator, Page, test } from '@playwright/test';
import { webaction } from '../functions/login'
import {ProjectCreation} from '../functions/projectCreation'

let webAction: webaction;
let page: Page;
let projectCreation:ProjectCreation;

test.describe("", ()=>{
    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage();
        webAction=new webaction(page);
    });
    test("1",async ()=>{
       await webAction.loginToAdminV2("previewuser1@yopmail.com","Pass123$");  //atrainer@mailinator.com  aswintrainer@mailinator.com
    });
    test("navigate to project menu",async()=>{
        await projectCreation.navigateToProject();
        await projectCreation.createNew();

    });

});