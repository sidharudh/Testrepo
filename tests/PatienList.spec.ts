import {test,expect} from '@playwright/test'
import { LoginPage } from '../pageobjects/LoginPage';
import * as data from '../testdata/testdataPlaceholder.json';

test ('Patient list can be created', async({browser})=>
{
    const contesxt=await browser.newContext();
    const page=await contesxt.newPage();
    const loginPage= new LoginPage(page);




}

)