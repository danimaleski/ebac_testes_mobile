import { $ } from '@wdio/globals'

class signPage {
    
    // get btnLogin () {
    //     return $('android=new UiSelector().text("Sign up")') // acessibility id
    // }
    
    // async openUp () {
    //     await this.btnLogin.click()
    // }
    
    async openUp (sign){
        await $(`android=new UiSelector().text("Sign up")`).click()
    }
    
}

export default new signPage