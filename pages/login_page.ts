import Page from './page';
import {CabinetPage} from "./cabinet_page";

export class LoginPage extends Page {

    get email() { return $('#login-form-phone-email'); }
    get password() { return $('#login-form-password'); }
    get submitBtn() { return browser.$('form button[type="submit"]'); }

    open() {
        super.open('cabinet/login');
    }

    submit() {
        this.submitBtn.click();
    }

    login(email:string, password:string):CabinetPage{
        this.email.waitForVisible();
        this.pa
        return new CabinetPage();
    }
}
