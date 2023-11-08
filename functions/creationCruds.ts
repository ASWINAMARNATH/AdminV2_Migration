import { ElementHandle, expect, Locator, Page, test } from '@playwright/test';

export class NAMECREATION{

   

    public nameCreation(name:string): string{
        let nameCreate=name;
        const currentDate = new Date();
        const formattedTimestamp ="("+currentDate.getDay+ "/" +(currentDate.getMonth())+1 + "/" +currentDate.getFullYear() + ")--" + currentDate.getHours() + currentDate.getMinutes();
        console.log(formattedTimestamp);
        const generatedName=nameCreate+formattedTimestamp;
        return generatedName;
    }
}