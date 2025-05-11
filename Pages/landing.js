import * as allure from "allure-js-commons";
import readXlsxFile from "read-excel-file/node"
const { expect } = require("@playwright/test")

exports.LandingPage = class LandingPage {


    constructor(page) {

        this.page = page
        this.cart1add = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')
        this.cart1remove = page.locator('[data-test="remove-sauce-labs-backpack"]')
        

    }

    async addandremovecart() {



        await this.cart1add.click()
        await this.cart1remove.click()
        await allure.description("The test checks if an active user can add or remove products from the page");
    }

    }
