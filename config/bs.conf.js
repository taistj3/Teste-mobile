import { generalConf } from "./general.conf.js";

export let bsConf = {
    user: process.env.BROWSERSTACK_USERNAME,
    key: process.env.BROWSERSTACK_ACCESS_KEY,
    hostname: 'hub.browserstack.com',

    capabilities: [
        {
            "platformName": "iOS",
            "appium:automationName": "XCUITest",
            "appium:platformVersion": "14.0",
            "appium:deviceName": "iPhone 12",
            "appium:app": "bs://69eb0aa2233ccf69c28f6fff117d7028e2e82d82",
            
        }
    ],
commonCapabilities: {
    'bstack:options': {
      projectName: "BrowserStack EBAC Store",
      buildName: 'browserstack build',
      sessionName: `Test ${process.env.PLATFORM}`,
    //   debug: true,
    //   networkLogs: true
    }
  },    ...generalConf
};