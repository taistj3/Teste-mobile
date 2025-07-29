import { $ } from '@wdio/globals'

class HomePage {

    async openMenu(menu) {
        await $(`id:tab-${menu}`).click()
    }

    async search() {
        await (await $(`-ios predicate string:name ENDSWITH "Search Products"`)).click();
    }

}

export default new HomePage();

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