import {test, expect} from '@playwright/test'
import {LoginPage} from '../pageobjects/LoginPage';
import * as data from '../testdata/testdataPlaceholder.json';

//CM Configuration is available for super admin user and Client admin user
test('CM Config availale for Super User ', async ({browser})=>
{
   const contesxt=await browser.newContext();
   const page=await contesxt.newPage();
   const loginPage= new LoginPage(page);
   await loginPage.goTo();
   await loginPage.validLogin(data[0].username,data[0].password);
   await expect(page.locator('text=CM Configuration >> i')).toBeVisible();
   await page.screenshot({path: 'screenshot.png'});
   //await page.pause();

});