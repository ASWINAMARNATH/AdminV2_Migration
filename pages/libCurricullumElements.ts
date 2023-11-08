import { ElementHandle, expect, Locator, Page } from '@playwright/test';

let page:Page;
export class LibCurricullumElements{
    readonly page:Page;

    constructor(page: Page) {
        this.page = page;
        //this.curricullumLocators();  
    }

    //libraryMenu:Locator;
    //libraryCurricullaMenu:Locator;
    let libraryMenu=this.page.locator("//div[@id='mdb-accordion-head-763']");
    let libraryCurricullaMenu=this.page.locator("//span[text()='curricula']");
  

    // curricullumLocators() {
        this.libraryMenu=this.page.locator("//div[@id='mdb-accordion-head-763']");
        this.libraryCurricullaMenu=this.page.locator("//span[text()='curricula']");     
    // }

}