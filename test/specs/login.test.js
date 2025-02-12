import { expect, driver } from '@wdio/globals'
import homePage from '../pageobjects/home.page.js'
import loginPage from '../pageobjects/login.page.js'
import profilePage from '../pageobjects/profile.page.js'

describe('Login', () => {
    
    it('Deve validar o login com as credenciais válidas', async () => {
        
        await homePage.openMenu('profile')
        await loginPage.login('ebacqe@ebac.com', '123Senha')
        await homePage.openMenu('profile')
        expect((await profilePage.profileName('Maleski Daniella')).isDisplayed()).toBeTruthy
        //await loginPage.login('cliente@ebac.art.br', 'GD*peToHNJ1#c$sgk08EaYJQ')
        //expect((await profilePage.profileName('EBAC Cliente')).isDisplayed()).toBeTruthy
        await driver.pause(10000)     
        
    })
})

