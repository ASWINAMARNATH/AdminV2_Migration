import { ElementHandle, expect, Locator, Page, test } from '@playwright/test';
import { request } from 'playwright-extra';
// import { chromium } from 'playwright-extra';
// import stealth from 'puppeteer-extra-plugin-stealth';

//let Chromium: chromium;
//let Stealth:typeof stealth;
//chromium.use(Stealth);
let urlOfApi;
let responseOfImocha;
let url;
let guid;
let ct;
let cid;
let imochaurlid;
let authorization:any;
let imocharedirectionUrl;

export class CloudLabFunctions{
   // let urlOfApi:any;
    //chromium.use(Stealth);
    readonly page:Page;
    //const Chromium:typeof chromium;
   // chromium.use(Stealth);

    batchesMenu:Locator;
    batchDropDown:Locator;
    trainingCurricula:Locator;
    plusIconOfCurriculla:Locator;
    more:Locator
    assignmentAct:Locator;
    titleForActivity:Locator;
    addActivity:Locator;
    activityName:Locator;
    moreOption:Locator;
    assignmentSelection:Locator;
    urlField:Locator;
    addActivityInAssignment:Locator;
    profileMenu:Locator;
    loginAsUser:Locator;
    emailTab:Locator;
    loginBtn:Locator;
    curriculumMenu:Locator;
    //Associate Locators
    acceptAll:Locator;
    acceptCookie: Locator;
    gitsignIn: Locator;
    gitEmail: Locator;
    gitPassword: Locator;
    gitSignIn: Locator;

    //chromium.use(stealth);

    constructor(page: Page) {
        this.page = page;
        this.curricullumLocators();
        this.batchLocators();
        this.associateViewLocators();
        this.gitHubLocators();
    }

    curricullumLocators(){
        this.trainingCurricula=this.page.locator("//span[text()='Curriculum']");
        this.plusIconOfCurriculla=this.page.locator("//button[@title='Add activity']");
        this.more=this.page.locator("//button[text()=' More ']");
        this.assignmentAct=this.page.locator("//span[text()='Assignment']");
        this.titleForActivity=this.page.locator("#newActFieldId");
        this.addActivity=this.page.locator("//button[text()=' Add Activity']");
        this.activityName=this.page.locator("//input[@id='newActFieldId']");
        this.moreOption=this.page.locator("//a[contains(text(),'More options')]");
        this.assignmentSelection=this.page.locator("//button[@id='selectActivityBtn']");
        this.urlField=this.page.locator("//input[@id='githubRepositoryAdd']");
        this.addActivityInAssignment=this.page.locator("(//div[@class='justify-content-center text-uppercase']/button[2])[1]");      
    }

    batchLocators(){
        this.batchesMenu=this.page.locator("//li[@class='text-center white-text active']");
        this.batchDropDown=this.page.locator("//button[@id='batListBatBtnDpdwn']");
        this.profileMenu=this.page.locator("(//h5[@class='mb-0']//div)[1]");
        this.loginAsUser=this.page.locator("//span[text()='Login as User']");
        this.emailTab=this.page.locator("(//input[@formcontrolname='email'])[1]");
        this.loginBtn=this.page.locator("//button[text()='Login ']");
    }

    associateViewLocators(){
        this.curriculumMenu=this.page.locator("//a[contains(text(),'Curriculum')]");
        this.acceptAll=this.page.locator("//button[@id='onetrust-accept-btn-handler']");
        this.acceptCookie = this.page.getByRole('button', { name: 'Accept All Cookies' })
    }

    gitHubLocators(){
        this.gitsignIn=this.page.locator("//a[contains(text(),'Sign in')]");
        this.gitEmail=this.page.locator("//input[@id='login_field']");
        this.gitPassword=this.page.locator("//input[@id='password']");
        this.gitSignIn=this.page.locator("//input[contains(@class,'btn btn-primary')]");
    }

    //--------------------------------------------Functions------------------------------------------------------//
    
    public async navigateToBatch(){
        await this.batchesMenu.waitFor({ 'state': 'visible', 'timeout': 100000 });
        await this.batchesMenu.click();
    }

    public async selectBatch(batchName:string){
        await this.batchDropDown.click();
        let batchInDropDown=this.page.locator("//a[contains(text(), '"+batchName+"')]");
        batchInDropDown.click();


    }

    public async navigateToCurricula(batchName:string){
        await this.trainingCurricula.click();
        await this.page.waitForTimeout(8000);
    }
    async delay(time: number) {
        return new Promise(function (resolve) {
            setTimeout(resolve, time);
        });
    }

    async clickPlusIcon(){
        await this.plusIconOfCurriculla.click();
    }
    async clickMore(){
        await this.more.click();
        this.delay(3000);
    }
    async clickAssignmentAct(){
        await this.assignmentAct.click();
        this.delay(3000);
    }

    async CreateLabActivity(name:string,Url:string,extension:string,assignmentTypeName:string){
        await this.clickPlusIcon();
        await this.clickMore();
        await this.clickAssignmentAct();
        await this.activityName.fill(name);
        await this.page.waitForTimeout(3000);
        await this.moreOption.click();
        await this.assignmentSelection.click();
        let assignmentType=this.page.locator("//a[contains(text(),'"+assignmentTypeName+"')]");
        await assignmentType.click();
        await this.urlField.fill(Url);
        await this.addActivityInAssignment.click();
    }
    //---------------------------------------Associate Function---------------------------------------//
    async loginAsUserFunction(emailId:string){
        await this.profileMenu.click();
        await this.page.waitForTimeout(1000);
        await this.loginAsUser.click();
        await this.page.waitForTimeout(2000);
        await this.emailTab.fill(emailId);
        this.page.waitForTimeout(2000);
        await this.clickLoginBtn();
    }

    async clickLoginBtn(){
        await this.delay(2000);
        const [multipage] = await Promise.all([
            this.page.waitForEvent('popup'),
            this.page.waitForLoadState('domcontentloaded'),
            await this.loginBtn.click()
        ]);
        await multipage.waitForLoadState('load');
    }

    async clickOnCurricullum(){
       await this.curriculumMenu.click();
    }
    async waitForLocator(locator: Locator) {
        await locator.waitFor({ 'state': 'visible', 'timeout': 10*10000 });
    }
    public async acceptAllCookies() {
        await this.page.waitForLoadState('domcontentloaded');
        await this.page.waitForLoadState('networkidle');
        await Promise.all([
            this.acceptAll.click(),
        ]);
       
        this.page.waitForTimeout(5000);

    }
    
    async clickWithNavigation(locator: Locator) {
        await Promise.all([
            this.page.waitForNavigation(),
            locator.click()
        ]);

    }

    async startCurricullum(Name:string){
       let resume=this.page.locator("(//button[@id='curiResBtn'])[2]");
       await resume.click();
       await this.page.waitForTimeout(10000);

    }
    async startAssignmentActivity(actName:string){
        let assignmentActivity=this.page.locator("(//span[text()='"+actName+"'])");
        assignmentActivity.click();
        await this.page.waitForTimeout(3000);
        let readInDetailView=this.page.locator("(//button[text()='Read in detailed view'])");
        readInDetailView.click();
        this.page.waitForLoadState("networkidle");
        await this.page.waitForTimeout(5000);
        await this.clickgitpodBtn();
        //let gitpodBtn=this.page.locator("(//button[@id='gitpodActivityBtn'])"); 
    }

    async clickgitpodBtn(){
        let gitpodBtn=this.page.locator("(//button[@id='gitpodActivityBtn'])");
        await this.delay(2000);
        const [multipage] = await Promise.all([
            this.page.waitForEvent('popup'),
            this.page.waitForLoadState('domcontentloaded'),
            await gitpodBtn.click()
        ]);
        // this.showhittedApi();
       // await multipage.waitForLoadState('load');
    }
//     async showhittedApi(){
//         const context = this.page.context();
//         await context.route('**/*', route => route.continue());

//   // Listen for network requests
//        context.on('request', request => {
//          console.log(`Request URL: ${request.url()}`);
//        });

//     }

    async waitTillImport(){
        await this.page.waitForRequest(request => request.url().includes('https://preview-ms.revature.com/apigateway/associates/secure/intern/forked-repo?traineeLabId=262549&projectCode=PT002'));
    }

    async loginToGitHub(){
        let URL="https://github.com/login"
        await this.page.goto(URL);
        await this.gitEmail.fill("cloudlabstudent01");
        await this.gitPassword.fill("ASWin@2000")
        await this.gitSignIn.click();
        await this.page.waitForNavigation();
        await this.page.waitForTimeout(10000);
    }
    
    async loginToGmail(){
        let url="https://www.google.com/gmail/about/";
        await this.page.goto(url);
        let signin=this.page.locator("//a[contains(text(),'Sign in')]");
        await signin.click();
        await this.page.waitForNavigation();
        let email=this.page.locator("//input[@id='identifierId']");
        await email.fill("cloudlabstudent01@gmail.com");
        let next=this.page.locator("(//div[@class='VfPpkd-RLmnJb'])[2]");
        await next.click();
        this.page.waitForTimeout(10000);
        //await this.page.waitForNavigation();
        let password=this.page.locator("//input[@type='password']");
        await password.fill("ASWin@2000");
        let next2=this.page.locator("//span[text()='Next']");
        next2.click();
       // await this.page.waitForNavigation();
        this.page.waitForTimeout(10000);

    }

    async startImochaTest(){
        await this.page.waitForTimeout(10000);
        //await this.page.waitForTimeout(6000);
        let detailsBtn=this.page.locator("(//button[text()[normalize-space()='Details']])[1]"); //Start //Details
        await detailsBtn.click();
        this.page.on('request', async (request) => {
            
            let url1=new URL(request.url());
            let url4=new URL(request.url());
           // console.log("Detail --->"+url1);
            let url2=new URL("https://preview-ms.revature.com/apigateway/associates/unsecure/assigned/activity/interns");
            let url3=new URL("https://preview-ms.revature.com/apigateway/associates/secure/menus")
           // console.log(`Request URL of details btn:`+url1);     
            if (url1.protocol === url2.protocol &&
                url1.hostname === url2.hostname &&
                url1.pathname.includes( url2.pathname)) {
                    console.log(`Request URL of details btn:`+url1);
                    await this.lastnamesplitter(url1);  

            }
            if(url4.protocol === url3.protocol &&
                url4.hostname === url3.hostname &&
                url4.pathname === url3.pathname){
                authorization=JSON.stringify(request.headers().authorization);
                console.log("Authorization------>"+authorization);
                console.log("Hitted");
            }
           // await this.lastnamesplitter(url1);
        });
        await this.page.waitForTimeout(7000);
        //await this.page.close();
    }  
    
    async lastnamesplitter(url:URL){
        var tempurl = url.toString();

        // Split the URL into segments using "/"
        var segments = tempurl.split('/');

        // Get the last segment (value)
        var lastSegment = segments[segments.length - 1];
        imochaurlid=lastSegment;
        // Output the last segment
        console.log("Last segment of the URL: -------------->" + lastSegment);
        console.log("Last segment of the URL: -------------->" + imochaurlid);

    }
    
    async clickingStartBtn(){
        let startbtn=this.page.locator("//button[@id='interview-status']");
        await startbtn.click(); 
           await this.page.waitForTimeout(7000);

    }

    async gettingsApinImocha(){
        this.page.on('dialog', async dialog => {
            console.log('Dialog message:', dialog.message());
            await dialog.accept();
          });
            const responsePromise2 = new Promise(async (resolve, reject) => {
              this.page.on('request', async (request) => {
                let imochaUrl=request.url();
               // console.log("Imocha URL-------->"+imochaUrl +"\n")
                if (imochaUrl=="https://testapi.imocha.io/api/IMInstructions/validateAPIURL"){
                    let headers=request.headers();
                    guid=headers.guid;
                    ct=headers.Ct;
                    cid=headers.cid;
                    console.log("Guid------->" +JSON.stringify(guid));
                    console.log("TID------->" +JSON.stringify(ct));
                    console.log("TID------->" +JSON.stringify(cid));
                    console.log("Imocha API ==>"+imochaUrl);
                }
               // console.log("Imocha API ==>"+imochaUrl);
                
              });
            });
            await responsePromise2;    
        
    }

    async imochaCheck(){
            this.page.on('request', async (request,) => {
                const url = request.url();
               // console.log(`Request URL: ${url}`);
                if (url=="https://testapi.imocha.io/api/IMInstructions/validateAPIURL"){
                  let headers=request.headers();
                  guid=headers.guid;
                  ct=headers.ct;
                  cid=headers.tid;
                  console.log("Guid------->" +JSON.stringify(guid));
                  console.log("TID------->" +JSON.stringify(ct));
                  console.log("TID------->" +JSON.stringify(cid));
                  console.log("Imocha API ==>"+url);
                  
              }
                
            });
            this.page.on('response', async (response) => {
                if (response.url().includes('https://testapi.imocha.io/api/IMInstructions/validateAPIURL')) {
                  const responseBody = await response.json();
                  console.log('API Response:', JSON.stringify(responseBody.AuthData.Tkn));
                }
              });

           console.log("url updated-->"+imocharedirectionUrl)   
        await this.page.goto(await imocharedirectionUrl);
        await this.page.waitForTimeout(7000);
    }

    async getImochaTestUrl(){
        //await this.page.waitForTimeout(7000);
        console.log("Auhorization while using---------------------------------->"+authorization);
        const apiUrl = 'https://preview-ms.revature.com/apigateway/associates/secure/start/interview-test/'+imochaurlid; 
        console.log('Hitted api hardcode---->'+apiUrl);// Replace with your API endpoint
        
          // Define the POST data (payload)
        //   const postData = {
        //     key1: 'value1',
        //     key2: 'value2',
        //   };
        
          // Set the request headers

          const headers ={
            'Content-Type': 'application/json', 
            'Authorization': authorization.replace(/^"(.*)"$/, '$1')
          };
          //headers['Authorization']=authorization;

     
         
          console.log(headers);
         
        
          try {
            console.log("header values inside try block ----------------->"+headers["Authorization"]);
            const response = await fetch(apiUrl, {
              method: 'POST',
              headers: headers,
              //body: JSON.stringify(postData),
            });
        
            if (response.ok) {
              // Handle a successful response (e.g., parse JSON response)
              const responseData = await response.json();
              imocharedirectionUrl=responseData.data
           //   console.log('POST request successful:', responseData.data);
              console.log('POST request successful:', imocharedirectionUrl);
            } else {
              // Handle an error response (e.g., status code not 2xx)
              console.error('POST request failed with status:', response.status);
              const errorResponse = await response.text();
              console.error('Error response:', errorResponse);
            }
          } catch (error) {
            // Handle network or request errors
            console.error('POST request error:', error);
          }
    }           
    
    async test(){
        let auth2="ZXlKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKSVV6STFOaUo5LmV5SnBjM01pT2lKU1pYWmhkSFZ5WlZCeWJ5SXNJbWx6UVdOMGFYWmxJanAwY25WbExDSmxlSEFpT2pFMk9UYzJORGsyTkRFc0ltcDBhU0k2SWpFMU1URTVNaUlzSW5WelpYSlBjbWRKWkNJNklqSWlmUS5jTGtKSkljWnNIQnJCY0NkV1doVEVtU19vSmdpelFaeDg1WjEza1lrSlBn";
        const headers2 = {
            'Content-Type': auth2, 
          };

          console.log(headers2);

    }
    

}