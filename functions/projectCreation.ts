import { ElementHandle, expect, Locator, Page } from '@playwright/test';
import {environment} from '../resources/environment';
import {ProjectElements} from '../pages/projectElements';

let projectElements:ProjectElements;

export class ProjectCreation{
    readonly page:Page;
    async delay(time: number) {
        return new Promise(function (resolve) {
            setTimeout(resolve, time);
        });
    }

    async navigateToProject(){  
    await this.delay(7000); 
    await projectElements.projectsMenu.click();
    await this.delay(7000);
      // this.page.setDefaultTimeout(10000)
       await this.page.waitForLoadState();
       
    }

    async createNew(){
        await this.delay(7000);
        await projectElements.createNew.click();
        await this.page.waitForLoadState()
    }

}