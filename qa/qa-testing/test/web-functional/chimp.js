module.exports = {
    webdriverio: {
        waitforTimeout: 5000,
        desiredCapabilities: {
            chromeOptions: {
                args: ['']
            }
        },
    },
    mochaConfig: {
        timeout: 60 * 1000 * 5
    },
    chai: true,
};
