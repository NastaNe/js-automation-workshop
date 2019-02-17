exports.config = {

    host: "localhost",
    port: 4444,
    specs: [
        './src/test/*'
    ],
    exclude: [],
    maxInstances: 10,
    capabilities: [{
        // maxInstances can get overwritten per capability. So if you have an in-house Selenium
        // grid with only 5 firefox instances available you can make sure that not more than
        // 5 instances get started at a time.
        maxInstances: 10,
        //
        browserName: 'chrome',
        chromeOptions: {
            args: ['--no-sandbox','--disable-infobars', 'window-size=1920,1080']
        }
    }],
    sync: true,
    logLevel: 'silent',
    coloredLogs: true,
    deprecationWarnings: true,
    bail: 0,
    screenshotPath: './errorShots/',
    baseUrl: 'https://bigl.ua/',
    waitforTimeout: 10000,
    connectionRetryTimeout: 100000,
    connectionRetryCount: 3,
    framework: 'mocha',
    services: ['selenium-standalone'],

    reporters: [
        'spec',
        'allure'
    ],
    reporterOptions: {
        // http://webdriver.io/guide/reporters/allure.html
        allure: {
            outputDir: './allure-results'
        }
    },
    mochaOpts: {
        timeout: 100000,
        ui: 'bdd',
        reporter: 'mocha-allure-reporter'
    },
    onPrepare: () => {
        const chai = require('chai');
        global.expect = chai.expect;
        global.assert = chai.assert;
        global.should = chai.should();
    }
};
