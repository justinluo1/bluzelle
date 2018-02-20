module.exports = {
    webdriverio: {
        waitforTimeout: 5000,
        desiredCapabilities: {
            chromeOptions: {
                args: [/*'auto-open-devtools-for-tabs',*/  'use-fake-device-for-media-stream', 'use-fake-ui-for-media-stream']
            }
        },
    },
    mochaConfig: {
        timeout: 60 * 1000 * 5
    },
    chai: true,
};
