
import { test, expect } from '@playwright/test';
import {LoginPage} from '../../Pages/login'
import {LandingPage} from '../../Pages/landing'
import * as allure from "allure-js-commons";
//const Login = new LoginPage(page)
const testdata = JSON.parse(JSON.stringify(require('../../testdata.json')))

test('Login in CartApplication', async ({ page }, testInfo) => {

  const loginobject = new LoginPage(page)

  await loginobject.url()
  await loginobject.login(testdata.username,testdata.password)
  await loginobject.home()

  
  const landingobject = new LandingPage(page)
  await landingobject.addandremovecart()
});