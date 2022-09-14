import {test,Expect} from '@playwright/test'


export class LoginPage {

     signInbutton:any;
     page:any;
     userName:any;
     password:any;
     continue:any;
     image:any;
     admin:any;




constructor (page)
 {
         
     this.signInbutton= page.locator("//button[contains(text(),'Log In')]");
     this.userName=page.locator("#username");
     this.continue=page.locator("//button[contains(text(),'Continue')]");
     this.password=page.locator("#password");
     this.continue=page.locator("//button[contains(text(),'Continue')]");
     this.page=page;
     this.image=page.locator("//header/div[1]/div[3]/a[1]/img[1]");
     this.admin=page.locator("text=Admin");
    
}

     async goTo()
    {

        await this.page.goto("https://engwebtst13.arcadiaanalytics.com/users/sign_in");
    }
  
    async validLogin(userName,password)
    {
        await this.signInbutton.click();
        await this.userName.type(userName);
        await this.continue.click();
        await this.password.type(password);
        await this.continue.click();
        await this.image.click();
        await this.admin.click();

    }


}

    