import * as allure from "allure-js-commons";
import readXlsxFile from "read-excel-file/node"
const { expect } = require("@playwright/test")

exports.LoginPage = class LoginPage {


    constructor(page) {

        this.page = page
        this.username_textbox = page.locator('[data-test="username"]')
        this.username_password = page.locator('[data-test="password"]')
        this.submit_button = page.locator('[data-test="login-button"]')
        this.landingtext = page.locator('[data-test="title"]')


    }
    async url() {

        await this.page.goto('https://www.saucedemo.com/');;
    }
    async login(Username, Password) {


        await this.username_textbox.fill(Username)

        await this.username_password.fill(Password)

        await this.submit_button.click()
       // await this.page.waitForNavigation();
       // await this.page.waitForTimeout(3000);
        await allure.description("The test checks if an active user with a valid password can sign in to the app.");
    }


    async home() {


        if (await expect(this.landingtext).toBeVisible) {
            console.log('Home page successfully loaded after login')
        }

    }

}

