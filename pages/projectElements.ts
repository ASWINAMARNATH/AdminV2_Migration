import { ElementHandle, expect, Locator, Page } from '@playwright/test';


export class ProjectElements{
    readonly page: Page;
    projectsMenu:Locator;
    createNew:Locator;

    constructor(page: Page) {
        this.page = page;
        this.navigationElements();
    }

    navigationElements(){
        this.projectsMenu=this.page.locator("//a[@id='mainFormsideMenu:internship-menu-BTN']");
        this.createNew=this.page.locator("//a[@id='Internships-Form:create-new-BTN']");
    }





}