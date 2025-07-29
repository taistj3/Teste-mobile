import { expect, driver } from '@wdio/globals'
import loginPage from '../pageobjects/login.page.js'
import profilePage from '../pageobjects/profile.page.js'
import homePage from '../pageobjects/home.page.js'
import cadastroPage from '../pageobjects/cadastro.page.js'

describe('Login - Android e IOS', () => {
    it('Deve logar com credenciais válidas', async () => {
        let profileTab = driver.isAndroid ? 'profile' : 'Account'
        await homePage.openMenu(profileTab)
        await loginPage.login('cliente@ebac.art.br', 'GD*peToHNJ1#c$sgk08EaYJQ')
        await homePage.openMenu(profileTab)
        expect((await profilePage.profileName('EBAC Cliente')).isDisplayed()).toBeTruthy()
    })

//     it('Deve preencher cadastro com sucesso', async () => {
//     const profileTab = driver.isAndroid ? 'profile' : 'Account';
//     await homePage.openMenu(profileTab);

//     // botão Sign up cross platform
//     if (driver.isAndroid) {
//         await $('//android.widget.TextView[@text="Sign up"]').click();
//     } else {
//         await $('~Sign up').click();
//     }

//     await cadastroPage.cadastro(
//         'João',
//         'Silva',
//         '1234567890',
//         'joao.silva@email.com',
//         'senha123',
//         'senha123'
//     );

//     if (!(await cadastroPage.repassword.isDisplayed())) {
//         await cadastroPage.repassword.scrollIntoView();
//     }

//     await cadastroPage.repassword.setValue('senha123');
//     await cadastroPage.btnCreate.click();
// });

    // it('Deve preencher cadastro com sucesso', async () => {

    //     await homePage.openMenu('profile')
    //     const signUpButton = await $('//android.widget.TextView[@text="Sign up"]');
    //     await signUpButton.click();
    //     await cadastroPage.cadastro(
    //         'João',
    //         'Silva',
    //         '1234567890',
    //         'joao.silva@email.com',
    //         'senha123',
    //         'senha123'
    //     )
    //     await cadastroPage.repassword.waitForDisplayed({ timeout: 5000 });
    //     if (!(await cadastroPage.repassword.isDisplayed())) {
    //         await cadastroPage.repassword.scrollIntoView();
    //     }
    //     await cadastroPage.repassword.setValue('senha123');
    //     await cadastroPage.btnCreate.click();
    // })


})

