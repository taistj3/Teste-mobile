import { generalConf } from "./general.conf.js";

export let sauceConf = {
    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,
    hostname: 'ondemand.us-west-1.saucelabs.com',
    port: 443,
    baseUrl: 'wd/hub',


    capabilities: [
        {
            'platformName': "iOS",
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

        }
        // {
        //     platformName: 'Android',
        //         'appium:app': 'storage:filename=ebacshop.aab',
        //         'appium:deviceName': 'Android GoogleAPI Emulator',
        //         'appium:platformVersion': '9.0',
        //         'appium:automationName': 'UiAutomator2',
        //         'appium:disableIdLocatorAutocompletion': true,
        //         'sauce:options': {
        //            appiumVersion: '2.11.0',
        //            build: 'appium-build-ebacshop',
        //            name: 'Ebacshop teste',
        //            deviceOrientation: 'PORTRAIT',
        //         }
        // }
    ],
    ...generalConf
};