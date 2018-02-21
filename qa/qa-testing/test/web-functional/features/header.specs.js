describe('web page header', () => {
    const header = require('../getBaseElement')('header');

    it('bluzelle logo should exist', () => {
        expect(browser.getAttribute('div>img', 'src')).to.contain('data');
    });

    it('@watch tabs should exist', () => {
        ['Log', 'Message List', 'Node List', 'Node Graph'].forEach(tabName => {
            browser.waitForExist(`a=${tabName}`);
            browser.click(`a=${tabName}`);
        });
    });
});