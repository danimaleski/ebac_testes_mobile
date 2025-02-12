import { $ } from '@wdio/globals'

class loginPage {
    
    get email () {
        return $('id:email') //com id
    }

    get password () {
        return $('android=new UiSelector().text("Password")') // com seletor
    }

    get btnLogin () {
        return $('~Login') // acessibility id
    }

    async login (email, password) {
        await this.email.setValue(email)
        await this.password.setValue(password)
        await this.btnLogin.click()
    }

}

export default new loginPage();
