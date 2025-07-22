export const config = {

    //runner: 'local',
    //port: 4723, 

    user: 'oauth-taistj3-833b9',
    key: '6a6fdde0-cfee-46aa-9f62-4d948e00bda3',
    hostname: 'ondemand.us-west-1.saucelabs.com',
    port: 443,
    baseUrl: 'wd/hub',

    specs: [
        './test/specs/**/*.js'
    ],

    suite: {
        login: [
            './test/specs/login.teste.js'
        ],
        search: [
            './test/specs/search.test.js'
        ],
        product: [
            './test/specs/product.test.js'
        ]
    },

    maxInstances: 1,

    capabilities: [
        {
            platformName: "iOS",
            "appium:automationName": "XCUITest",
            "appium:platformVersion": "17.0",
            "appium:app": "storage:filename=LojaEBAC-sim.zip",
            "appium:deviceName": "iPhone Simulator",
            "appium:disableIdLocatorAutocompletion": true,
            "sauce:options": {
                build: "ios-build-lojaEbac",
                name: "test-ios-lojaEbac",
                appiumVersion: "2.0.0"

            },

            /*platformName: 'Android',
            'appium:deviceName': 'ebac-android9',
            'appium:platformVersion': '9.0',
            'appium:automationName': 'UiAutomator2',
            'appium:app': `${process.cwd()}/app/ebacshop.apks`,
            'appium:appWaitActivity': '.MainActivity',
            'appium:disableIdLocatorAutocompletion': true*/
        }],

    logLevel: 'info',
    waitforTimeout: 10000,
    connectionRetryTimeout: 300000, // 5 minutos
    connectionRetryCount: 3,
    framework: 'mocha',

    reporters: ['spec', ['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false,
    }]],


    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

    afterTest: async function (test, context, { error, result, duration, passed, retries }) {
        await driver.takeScreenshot();
        await driver.execute('mobile: terminateApp', { bundleId: 'br.com.lojaebac' });
    },

    beforeTest: async function () {
        let state = await driver.queryAppState('br.com.lojaebac');
        if (state !== 4) {
            await driver.execute('mobile: LaunchApp', { bundleId: 'br.com.lojaebac' });
        }
    }
}