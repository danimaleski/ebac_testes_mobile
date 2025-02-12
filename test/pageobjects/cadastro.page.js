import { $ } from '@wdio/globals'

class cadastroPage {
    
    get fisrtName () {
        return $('id:firstName')
    }

    get lastName () {
        return $('id:lastName')
    }

    get phone () {
        return $('id:phone')
    }

    get emailAdd () {
        return $('id:email')
    }
    
    get pass () {
        return $('id:password') 
    }

    get repass() {
        return $('id:repassword')
    }

    get btnCreate () {
        return $('~Create') 
    }

    async cadastro (fisrtName, lastName, phone, emailAdd, pass, repass) {
        await this.fisrtName.setValue(fisrtName)
        await this.lastName.setValue(lastName)
        await this.phone.setValue(phone)
        await this.emailAdd.setValue(emailAdd)
        await this.pass.setValue(pass)
        await this.repass.setValue(repass)
        await this.btnCreate.click()
    }

}

export default new cadastroPage();
