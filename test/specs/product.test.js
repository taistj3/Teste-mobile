import { expect, driver } from '@wdio/globals'
import homePage from '../pageobjects/home.page.js'
import browsePage from '../pageobjects/browse.page.js'
import productPage from '../pageobjects/product.page.js'

describe('Product Details - IOS', () => {
    it('Deve verificar produtos', async () => {
        await homePage.search();
        await browsePage.searchInput.setValue('In');

        const products = await browsePage.products;
        expect(products.length).toBeGreaterThan(0); // garante que achou pelo menos um produto

        await products[0].click();

        expect(await productPage.getProductTitle('Ingrid ')).toBeDisplayed();
    });
});
// describe('Product Details - IOS', () => {
//     it('Deve verificar produtos', async () => {
//         await homePage.search();
//         await browsePage.searchInput.setValue('In');
//         await (await browsePage.products).at(0).click();
//         expect(productPage.getProductTitle('Ingrid ').toBeDisplayed());
// })
// })