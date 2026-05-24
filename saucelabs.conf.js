const baseConfig = require('./wdio.conf').config;

exports.config = {
    ...baseConfig,
    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,
    region: 'us',
    services: ['sauce'],
    capabilities: [{
        browserName: 'chrome',
        browserVersion: 'latest',
        platformName: 'Windows 11',
        'sauce:options': {
            build: `wdio-build-${new Date().toISOString()}`,
            name: 'WebdriverIO E2E'
        }
    }]
};
