import {LoginPage} from "../pages/login_page";
import * as fs from "fs";
import {expect} from "chai";

let credentials_login = fs.readFileSync('./test_data/credentials.json');
// @ts-ignore
let data_for_login = JSON.parse(credentials_login);

describe('Login test', function () {

    // In order to test all test independent of each other -> we should delete all cookie
    afterEach(function () {
        browser.deleteCookie();
        browser.refresh();
    });

    it('with positive values', function () {
        let loginPage = new LoginPage();
        loginPage.open();
        let cabinetPage = loginPage.login(data_for_login['email'], data_for_login['password']);
        expect(browser.getUrl(), "URL message is right").to.equal("https://my.bigl.ua/cabinet/");
        expect(cabinetPage.logoutLink.isVisible(), "Logout Link is visible").to.be.equal(true);
    });

    it('with negative values', function () {
        let loginPage = new LoginPage();
        loginPage.open();
        loginPage.email.waitForVisible();
        loginPage.email.setValue("SomeRandom@fjfj.com");
        loginPage.password.setValue("test1111");
        loginPage.submit();
        expect(browser.getUrl(), "URL message is right").to.equal("https://my.bigl.ua/cabinet/login");
    });
});