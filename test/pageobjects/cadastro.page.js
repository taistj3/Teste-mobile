import { $ } from '@wdio/globals'

class CadastroPage {

    get firstName() {
        return $('id=firstName')
    }
    get lastName() {
        return $('id=lastName')
    }
    get phoneNumber() {
        return $('id=phone')
    }
    get emailAddress() {
        return $('id=email')
    }
    get password() {
        return $('id=password')
    }
    get repassword() {
        return $('id=repassword')
    }
    get btnCreate() {
        return $('id=create')
    }
    async cadastro(firstName, lastName, phoneNumber, emailAddress, password, repassword) {
        await this.firstName.setValue(firstName);
        await this.lastName.setValue(lastName);
        await this.phoneNumber.setValue(phoneNumber);
        await this.emailAddress.setValue(emailAddress);
        await this.password.setValue(password);
        await this.repassword.setValue(repassword);
        await this.btnCreate.click()
    }
}

export default new CadastroPage();