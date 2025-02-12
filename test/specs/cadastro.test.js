import { expect, driver } from '@wdio/globals'
import homePage from '../pageobjects/home.page.js'
import signupPage from '../pageobjects/signup.page.js'
import cadastroPage from '../pageobjects/cadastro.page.js'
import cartPage from '../pageobjects/cart.page.js'
import profilePage from '../pageobjects/profile.page.js'

describe('Cadastro', () => {
    
    it('Deve realizar o cadastro com sucesso', async () => {
        
        await homePage.openMenu('profile')
        await signupPage.openUp('Sign up')
        await cadastroPage.cadastro('Daniella', 'Maleski', '1234567', 'ebacqe@ebac.com', '123Senha', '123Senha')
        await cartPage.openCart('cart')
        await cartPage.btnCart()
        await homePage.openMenu('profile')
        expect((await profilePage.profileName('Maleski Daniella')).isDisplayed()).toBeTruthy


        await driver.pause(10000)
        
    })
})

