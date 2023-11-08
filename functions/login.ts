import { Browser, ElementHandle, expect, Locator, Page } from '@playwright/test';
import {environment} from '../resources/environment'
import { loginElements } from '../pages/loginElements'
import path from 'path';
let page: Page;
let browser:Browser;

export class webaction {
    readonly page: Page;
    readonly browser:Browser;
    signupHeader: Locator;
    signUpImg: Locator;
    signUpBtn: Locator;
    forgotPassword: Locator;
    userName: Locator;
    password: Locator;
    remember: Locator;
    signIn: Locator;
    errorMessage: Locator;
    logout: Locator;
    logoutYes: Locator;
    forgetUser: Locator;
    logoutNo: Locator;
    settingMenu: Locator;
    reportMenu: Locator;
    qualityAuditMenu: Locator;
    assessLink: Locator;
    cloud: Locator;
    manageBatchMenu: Locator;
    homeMenu: Locator;
    submit: Locator;
    forgetclose: Locator;
    forgotSuccessMessage: Locator;
    userNotAvailble: Locator;
    settings: Locator;
    coreUserName: Locator;
    corePassword: Locator;
    coreLoginBtn: Locator;
    loginEmail: Locator;
    loginPass: Locator;
    loginBtn: Locator;
    profiledropDown: Locator;
    logoutCaliber: Locator;
    trainingMenu: Locator;
    adminMenu: Locator;
    librarymenu: Locator;
    profile: Locator;
    logoutCore: Locator;
    avatarNewUi: Locator;
    logoutNewUi: Locator;
    curriculumMapping: Locator;
    caliberBtn: Locator;
    qcCaliberBtn: Locator;
    batchesMenu: Locator;
    constructor(page: Page) {
      this.page = page;
      this.commonPageLocator();
      this.loginLocators();
    }
    loginLocators() {
      this.signupHeader = this.page.locator('text=Sign In Required');
      this.signUpImg = this.page.locator('text=You must sign in to continueSign In >> img');
      this.signUpBtn = this.page.locator('//button[@class="btn button btn-block"]');
      this.forgotPassword = this.page.locator('text=Forgot Password?');
      this.userName = this.page.locator('input[name="username"]');
      this.password = this.page.locator('input[name="password"]');
      this.remember = this.page.locator('input[name="chkRemember"]');
      this.signIn = this.page.locator('button:has-text("Sign In")');
      this.errorMessage = this.page.locator('//div[@id="error-msg"]');
      this.logoutCaliber = this.page.locator('text=Sign Out');
      this.logoutYes = this.page.locator('text=Yes');
      this.forgetUser = this.page.locator('#username');
      this.logoutNo = this.page.locator('text=No');
      this.settingMenu = this.page.locator('text=Settings');
      this.batchesMenu = this.page.locator('text=Batches');
      this.reportMenu = this.page.locator("//button[text()=' Reports ']");
      this.qualityAuditMenu = this.page.locator('#quality-link');
      this.assessLink = this.page.locator('//a[@id="assess-link"]');
      this.cloud = this.page.locator('//a[@id="cloud-resources-link"]');
      this.manageBatchMenu = this.page.locator('#manage-link');
      this.homeMenu = this.page.locator('#home-link');
      this.submit = this.page.locator('//button[@type="submit"]');
      this.forgetclose = this.page.locator('//button[@aria-label="Close"]');
      this.forgotSuccessMessage = this.page.locator('//div[@id="toast-container"]');
      this.userNotAvailble = this.page.locator('//*[@class="text-danger ng-star-inserted"]');
    }
    commonPageLocator() {
      this.settings = this.page.locator("//span[text()='Settings']");
      this.coreUserName = this.page.locator("(//input[@placeholder='Username'])[1]");
      this.corePassword = this.page.locator("//input[@placeholder='Password']");
      this.coreLoginBtn = this.page.locator("//a[text()[normalize-space()='Login']]");
      this.loginEmail = this.page.locator("//input[@id='loginForm:userName-input-id']");
      this.loginPass = this.page.locator("//input[@id='loginForm:input-psw']");
      this.loginBtn = this.page.locator('[ng-click="logIn()"]');
      this.profiledropDown = this.page.locator("//li[@id='user-drop']/a");
      this.logout = this.page.locator('[ng-click="logout(); "]');
      this.trainingMenu = this.page.locator('//*[text()="Training"]/ancestor::a');
      this.adminMenu = this.page.locator('//*[text()="Admin"]/ancestor::a');
      this.librarymenu = this.page.locator("//*[text()='Library']/ancestor::a");
      this.profile = this.page.locator("//span[@class='user-info']//span[1]");
      this.logoutCore = this.page.locator("#mainFormMenu:log-out-BTN");
      this.avatarNewUi = this.page.locator("#navBarAvatar");
      this.caliberBtn = this.page.locator("//span[contains(text(),'Caliber')]");
      this.qcCaliberBtn = this.page.locator("//button[contains(text(),' Go to caliber')]");
      this.logoutNewUi = this.page.locator("#navBarLogoutLi");
      this.curriculumMapping = this.page.locator("//span[text()='Curriculum mapping']");
    }
    async navigateToURL(url: string) {
        // await page.route('**', route => {
        //     route.continue();
        //   });
        
        //   // Intercept requests and log headers
        // page.on('request', request => {
        //     const url = request.url();
        //     const headers = request.headers();
            
        //     console.log(`Request URL: ${url}`);
        //     console.log('Headers:', headers);
        
        //     // request.continue();
        // });
        await this.page.goto(url);
    }
    async clickWithNavigation(locator: Locator) {
        await Promise.all([
            this.page.waitForNavigation(),
            locator.click(),
            //this.page.waitForNavigation({waitUntil:'load'}),
        ]);

    }
    async delay(time: number) {
        return new Promise(function (resolve) {
            setTimeout(resolve, time);
        });
    }
    async fillText(locator: Locator, text: string) {
        if (text != null && text != undefined) {
            this.delay(2000);
        }
        await locator.fill(text);
    }
    public async enterFTUsername(username: string) {
        await this.fillText(this.loginEmail, username);
    }
    public async enterFTPassword(pass: string) {
        await this.fillText(this.loginPass, pass);
    }
    public async clickFTLogin() {
        await this.clickWithNavigation(this.loginBtn);
    }
    public async coreLogin(){
        await this.coreLoginBtn.waitFor({ 'state': 'visible', 'timeout':10*10000 })
       // await this.waitForLocator(this.coreLoginBtn);
        await this.clickWithNavigation(this.coreLoginBtn);
      //  this.coreLoginBtn.click();
        // await this.clickWithNavigation(this.coreLoginBtn);
         await this.delay(15000);
      //  await this.page.waitForLoadState();
    }

    public async loginToAdminV2(userName : string ,password : string) {
        await this.navigateToURL(environment.coreURL);   //environment.coreURL
        await this.enterFTUsername(userName);
        await this.enterFTPassword(password);
        await this.coreLogin();
        
    };

};