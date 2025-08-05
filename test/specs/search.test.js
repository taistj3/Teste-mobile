import { expect, driver } from '@wdio/globals'
import homePage from '../pageobjects/home.page.js'
import browsePage from '../pageobjects/browse.page.js'

describe('Search', () => {
    it.only('Deve buscar produtos', async () => {
        await homePage.search();
        await browsePage.searchInput.setValue('Ca');
        await browsePage.products.map(async product => {
            expect(await product.getText()).toContain('R$');
        })
})
})