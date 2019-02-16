export default class Page {
    private title: string;
    constructor() {
        this.title = 'Base Page';
    }

    open(path) {
        browser.url(path);
    }
}