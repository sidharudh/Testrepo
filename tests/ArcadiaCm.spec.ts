import {test, expect} from '@playwright/test'
import {LoginPage} from '../pageobjects/LoginPage';
import * as data from '../testdata/testdataPlaceholder.json';
//CM Configuration is available for super admin user and Client admin user
test('Arcadia ', async ({browser})=>
{
   const contesxt=await browser.newContext();
   const page=await contesxt.newPage();
   const loginPage= new LoginPage(page);
   await loginPage.goTo();
   //await page.goto('https://engwebtst13.arcadiaanalytics.com/users/sign_in');
   //console.log(page.title);
   await loginPage.validLogin(data[0].username,data[0].password);
   await page.pause
   //await page.locator("//button[contains(text(),'Log In')]").click();
   //await page.locator('#username').type("guru.sharan+eng13@xyramsoft.com");
   //await page.locator("//button[contains(text(),'Continue')]").click();
   //await page.locator('#password').type("XyramSoft@0077");
   //await page.locator("//button[contains(text(),'Continue')]").click();
   //await page.locator("//header/div[1]/div[3]/a[1]/img[1]").click();
   //await page.locator('text=Admin').click();
   //await expect(page).toHaveURL('https://engwebtst13.arcadiaanalytics.com/admin');
   await expect(page.locator('text=CM Configuration >> i')).toBeVisible();
   await page.screenshot({path: 'screenshot.png'});
   
  // await page.locator('text=CM Configuration >> i').click();
    //  await page.pause();




});