import { $ } from '@wdio/globals'

class ProfilePage {

    async profileName(name){
        const element = $(`//android.widget.TextView[@text="${name}"]`);
        await element.waitForExist({ timeout: 10000 });
        return element; 
        //return $(`//android.widget.TextView[@text="${name}"]`).waitForExist({ timeout: 10000 });
    }
}

export default new ProfilePage()
