import { $ } from '@wdio/globals'

class cartPage {
    
    async openCart (cart){
        await $(`id:${cart}`).click()
    }

    async btnCart() {
        await $('id:continueShopping').click()
    }
    
}

export default new cartPage
