export const config = {

    //runner: 'local',
    //port: 4723, 
    
        user: 'oauth-taistj3-70edd',
        key: '1a5fbc13-ab86-48ac-bc72-a115f139a3f1',
        hostname: 'ondemand.us-west-1.saucelabs.com',
        port: 443,
        baseUrl: 'wd/hub',
        
    specs: [
        './test/specs/**/*.js'
    ],
    maxInstances: 1,
    
        capabilities: [
            {
                platformName: 'Android',
                'appium:app': 'storage:filename=ebacshop.aab',
                'appium:deviceName': 'Android GoogleAPI Emulator',
                'appium:platformVersion': '9.0',
                'appium:automationName': 'UiAutomator2',
                'appium:disableIdLocatorAutocompletion': true,
                'sauce:options': {
                   appiumVersion: '2.11.0',
                   build: 'appium-build-ebacshop',
                   name: 'Ebacshop teste',
                   deviceOrientation: 'PORTRAIT',
                   
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
    connectionRetryTimeout: 120000,
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

    
}

/*afterTest: async function(test, context, { error, result, duration, passed, retries }) {
    if (test) {
        await driver.takeScreenshot();
    }
*/
