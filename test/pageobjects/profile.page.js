import { $ } from '@wdio/globals'

class profilePage {
    
    async profileName(name){
        return await $(`//android.widget.TextView[@text="${name}"]`) // por XPath
    }   
}

export default new profilePage
