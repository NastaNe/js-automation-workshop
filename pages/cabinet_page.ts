import Page from './page';

export class CabinetPage extends Page {

    get email() { return $('#login-form-phone-email'); }
    get password() { return $('#login-form-password'); }
    get submitBtn() { return browser.$('form button[type="submit"]'); }

    open() {
        super.open('cabinet');
    }

    submit() {
        this.submitBtn.click();
    }
}
