import { $, $$ } from '@wdio/globals'

class BrowsePage {

    get searchInput(){
        return $(`-ios predicate string:name == "searchInput"`)
    }

    get products(){
        return $$(`-ios predicate string:name == "productDetails"`)
    }
}

export default new BrowsePage();

  /*  get inputUsername () {
        return $('#username');
    }

    get inputPassword () {
        return $('#password');
    }

     get btnSubmit () {
        return $('button[type="submit"]');
    }

        async login (username) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    
    open () {
        return super.open('login');
    }
}*/