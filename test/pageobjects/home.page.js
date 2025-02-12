import { $ } from '@wdio/globals'

class homePage {
    
    async openMenu (menu){
        await $(`id:tab-${menu}`).click()
    }
    
}

export default new homePage
