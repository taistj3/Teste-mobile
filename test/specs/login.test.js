import { expect, driver } from '@wdio/globals'
import loginPage from '../pageobjects/login.page.js'
import profilePage from '../pageobjects/profile.page.js'
import homePage from '../pageobjects/home.page.js'
import cadastroPage from '../pageobjects/cadastro.page.js'

describe('Login - Android e IOS', () => {
    let profileTab;

    beforeEach(() => {
        profileTab = driver.isAndroid ? 'profile' : 'Account';
    })
    it.only('Deve logar com credenciais válidas', async () => {
        await homePage.openMenu(profileTab)
        await loginPage.login('cliente@ebac.art.br', 'GD*peToHNJ1#c$sgk08EaYJQ')
        await homePage.openMenu(profileTab)
        // const profileElement = await profilePage.profileName('Cliente EBAC')
        //expect(await profileElement.isDisplayed()).toBe(true) 
        expect(await profilePage.profileName('Cliente EBAC').isDisplayed()).toBe(true);
    })

    it('Deve preencher cadastro com sucesso', async () => {

        await homePage.openMenu('profile')
        const signUpButton = await $('//android.widget.TextView[@text="Sign up"]');
        await signUpButton.click();
        await cadastroPage.cadastro(
            'João',
            'Silva',
            '1234567890',
            'joao.silva@email.com',
            'senha123',
            'senha123'
        )
        await cadastroPage.repassword.waitForDisplayed({ timeout: 5000 });
        if (!(await cadastroPage.repassword.isDisplayed())) {
            await cadastroPage.repassword.scrollIntoView();
        }
        await cadastroPage.repassword.setValue('senha123');
        await cadastroPage.btnCreate.click();
    })


})

