module.exports = (selector) => {
    beforeEach(() => {
        browser.url('http://localhost:8200');
    });

    return () => {
        browser.waitForExist(selector);
        return browser.element(selector);
    };
};

