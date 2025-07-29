import {specsConf} from'./specs.conf.js';
import {suitesConf} from'./suites.conf.js';
import {hooksConf} from'./hooks.conf.js';
import {reportersConf} from'./reporters.conf.js';

export let generalConf = {
    maxInstances: 1,
    logLevel: 'info',
    waitforTimeout: 10000,
    connectionRetryTimeout: 300000, // 5 minutos
    connectionRetryCount: 3,
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
...specsConf,
...suitesConf,
...hooksConf,
...reportersConf,

};