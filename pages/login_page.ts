import Page from './page';
import {CabinetPage} from "./cabinet_page";

export class LoginPage extends Page {

    get email() { return $('#login-form-phone-email'); }
    get password() { return $('#login-form-password'); }
    get submitBtn() { return $(".//*[@data-qaid='submit-button']"); }

    open() {
        super.open('cabinet/login');
        this.email.waitForVisible();
    }

    submit() {
        this.submitBtn.waitForEnabled();
        this.submitBtn.click();
    }

    login(email:string, password:string):CabinetPage{
        this.email.setValue(email);
        this.password.setValue(password);
        this.submit();
        return new CabinetPage();
    }
}
