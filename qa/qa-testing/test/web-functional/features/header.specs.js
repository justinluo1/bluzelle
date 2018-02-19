describe('web page header', () => {
    const header = require('../getBaseElement')('header');

    it('should exist', () => {
        expect(browser.getAttribute('div>img', 'src')).to.contain('data');
    });

    it('should exist', () => {
        browser.waitForExist('a=Node List');
        browser.click('a=Node List');
        browser.waitForExist('span=127.0.0.1:8200');
    });
});