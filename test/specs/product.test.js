import { expect, driver } from '@wdio/globals'
import loginPage from '../pageobjects/login.page.js'
import profilePage from '../pageobjects/profile.page.js'
import homePage from '../pageobjects/home.page.js'
import cadastroPage from '../pageobjects/cadastro.page.js'
import browsePage from '../pageobjects/browse.page.js'

describe('Product Details - IOS', () => {
    it.only('Deve verificar produtos', async () => {
        await homePage.search();
        await browsePage.searchInput.setValue('In');
        await(await browsePage.products.at(0)).click();
        expect(productPage.getProductTitle('Ingrid ').toBeDisplayed());
})
})