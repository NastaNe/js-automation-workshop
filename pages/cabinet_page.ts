import Page from './page';

export class CabinetPage extends Page {

    constructor(){
        super();
        this.logoutLink.waitForVisible();
    }

    get logoutLink(){return $(".//*[@data-qaid='logout-link']")}
    open() {
        super.open('cabinet');
    }
}
