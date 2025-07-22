import { expect, driver } from '@wdio/globals'
import loginPage from '../pageobjects/login.page.js'
import profilePage from '../pageobjects/profile.page.js'
import homePage from '../pageobjects/home.page.js'
import cadastroPage from '../pageobjects/cadastro.page.js'
import browsePage from '../pageobjects/browse.page.js'

describe('Search - IOS', () => {
    it.only('Deve buscar produtos', async () => {
        await homePage.search();
        await browsePage.searchInput.setValue('In');
        await browsePage.products.map(async (product) => {
            expect(await product.getText()).toContain('In');
        })
})
})