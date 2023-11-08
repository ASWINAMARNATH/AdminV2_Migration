import { ElementHandle, expect, Locator, Page } from '@playwright/test';

export class navigation {
    readonly page: Page;
    library: Locator;
    nexaMenu: Locator;
    unit: Locator;
    constructor(page: Page) {
        this.page = page;
        this.navigationLocators();
    }
    navigationLocators() {
        this.library = this.page.locator("//div[text()='Library']");
        this.nexaMenu = this.page.locator("//li[@class='text-center white-text nexa-menu']");
        this.unit=this.page.locator("//a[text()='Units']");
    }
    async delay(time: number) {
        return new Promise(function (resolve) {
            setTimeout(resolve, time);
        });
    }
    async navigateToLibrary(){
        this.library.click();
        this.delay(1000);
    }

    async navigateToNexa(){
        await this.delay(2000);
        const [multipage] = await Promise.all([
            this.page.waitForEvent('popup'),
            this.page.waitForLoadState('domcontentloaded'),
            await this.nexaMenu.click()
        ]);
        await multipage.waitForLoadState();
        this.delay(3000);
    }
    async navigateToUnit(){
        await this.page.waitForLoadState('domcontentloaded');
        await this.page.waitForLoadState('networkidle');
        await Promise.all([
            await this.unit.click()
        ]);
        await this.delay(3000);
    }
}