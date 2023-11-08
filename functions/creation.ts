import { ElementHandle, expect, Locator, Page } from '@playwright/test';

export class Creation{
    readonly page:Page;
    unitName:Locator;
    groupName:Locator;
    contentUrl:Locator;
    createUnitBtn:Locator;
    validationBtn:Locator;
    unitDays:Locator;
    nameLabel:Locator;
    groupNameLabel:Locator;
    contentUrlLabel:Locator;
    unitDurationLabel:Locator;
    unitDaysLabel:Locator;
    addModulesLabel:Locator;
    plusIconForModules:Locator;
    addtopicsLabel:Locator;
    topicNameAssert:Locator;
    createBtn:Locator;
    daysIsRequiredMsg:Locator;



    constructor(page: Page) {
        this.page = page;
        this.creationLocators();
    }
    creationLocators(){
        this.unitName=this.page.locator("//input[@formcontrolname='name']");  ////input[@id='name']
        this.groupName=this.page.locator("//input[@id='autocomplete']");
        this.contentUrl=this.page.locator("//input[@id='contentUrl']");
        this.createUnitBtn=this.page.locator("//button[text()=' Create new ']");
        this.validationBtn=this.page.locator("//button[text()=' Validate ']");
        this.unitDays=this.page.locator("//input[@id='days']");
        this.nameLabel=this.page.locator("//input[@id='name']");
        this.groupNameLabel=this.page.locator("//h6[text()='Group name :']");
        this.contentUrlLabel=this.page.locator("//h6[text()='Content URL :']");
        this.unitDurationLabel=this.page.locator("//h6[text()='Unit duration :']");
        this.unitDaysLabel=this.page.locator("//span[text()=' (in days)']");
        this.addModulesLabel=this.page.locator("//div[text()=' Add Modules ']");
        this.plusIconForModules=this.page.locator("plusIconForModules");
        this.addtopicsLabel=this.page.locator("addtopicsLabel");
        this.createBtn=this.page.locator("//button[text()=' Create ']");
        this.daysIsRequiredMsg=this.page.locator("//div[text()=' Days is required. ']");
        //this.topicNameAssert=this.page.locator("//div[@class='mb-5 ng-star-inserted']//h6[1]");

    }
    async delay(time: number) {
        return new Promise(function (resolve) {
            setTimeout(resolve, time);
        });
    }

    async createUnit(){
        await this.delay(2000);
        expect(this.createUnitBtn.isVisible()).toBeTruthy();
        await this.createUnitBtn.click();
        await this.delay(3000);
        await this.unitName.fill("unit name 1");
        await this.groupName.fill("unit group name");
        await this.contentUrl.fill("https://gitlab.com/revature_training_non_prod/tc-java-fundamentals-test-2");
        await this.clickValidateButton();
        await this.addUnitDays();

    }

    async clickValidateButton(){
        expect(this.validationBtn.isVisible()).toBeTruthy();
        this.validationBtn.click();
        await this.delay(6000);
        
    }
    async addUnitDays(){
        let days = Math.floor((Math.random() * 7) + 1);
        let unitDuration=days.toString();
        this.unitDays.fill(unitDuration);
       
    }

    async assertionInUnitPage(){
        expect(this.createUnitBtn.isVisible()).toBeTruthy();
        await this.createUnitBtn.click();
        expect(this.nameLabel.isVisible()).toBeTruthy();
        expect(this.groupNameLabel.isVisible()).toBeTruthy();
        expect(this.contentUrlLabel.isVisible()).toBeTruthy();
        expect(this.unitDaysLabel.isVisible()).toBeTruthy();
        expect(this.unitDurationLabel.isVisible()).toBeTruthy();
        expect(this.addModulesLabel.isVisible()).toBeTruthy();
        expect(this.plusIconForModules.isVisible()).toBeTruthy();
        expect(this.addtopicsLabel.isVisible()).toBeTruthy();
        expect(this.unitName.isVisible()).toBeTruthy();
        expect(this.groupName.isVisible()).toBeTruthy();
        expect(this.contentUrl.isVisible()).toBeTruthy();
    }

    async placeHolderValueCheck(elements:Locator,assertedText:string){
        const placeholderText = await elements.getAttribute('placeholder')
        expect(placeholderText).toEqual(assertedText);

    }

    assertTextBoxPlaceHolderValues(){
        this.placeHolderValueCheck(this.unitName,"Enter Unit name");
        this.placeHolderValueCheck(this.groupName,"Select or Enter group name");
        this.placeHolderValueCheck(this.contentUrl,"Type here");

    }
    async clear(locator: Locator) {
       // await this.waitForLocator(locator);
       // await locator.click({ clickCount: 3 });
        await locator.press('Backspace');
       // await locator.press('Enter');
    }
    async noOfCharactersCheck(){
       this.unitName.click();
       let tempUnitName=await this.getRandomString(100)
       this.unitName.fill(tempUnitName);
       await this.delay(2000);
       this.topicNameAssert=await this.page.locator("//h6[text()='"+tempUnitName+"']");
       await expect(this.topicNameAssert).toHaveText(tempUnitName);
       this.delay(2000);
       this.clear(this.unitName);
       this.delay(8000);
       tempUnitName=await this.getRandomString(160)
    //    this.unitName.fill(tempUnitName);
    //    await this.delay(2000);
    //    this.topicNameAssert=await this.page.locator("//h6[text()='"+tempUnitName+"']");
    //    await expect(this.topicNameAssert).not.toBeVisible();
    //    await expect(this.unitName).not.toHaveValue(tempUnitName);
    //    this.unitName.clear();
       //this.unitName.fill(this.getRandomString(152));
    }

    public getRandomString(length: number) {
        let chars = "abcdefghijklmnopqrstuvwxyz";
        let result = "";
        for (let i = length; i > 0; --i)
          result += chars[Math.floor(Math.random() * chars.length)];
        return result;
      }

      async assertionForDaysField(){
        await expect(this.unitDurationLabel).toBeVisible();
        await expect(this.unitDaysLabel).toBeVisible();
        this.createBtn.click();
        await expect(this.daysIsRequiredMsg).toBeVisible();
      }
}