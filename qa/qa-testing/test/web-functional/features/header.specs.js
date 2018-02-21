describe('web page header', () => {
    const header = require('../getBaseElement')('header');

    it('bluzelle logo should exist', () => {
        expect(browser.getAttribute('div>img', 'src')).to.contain('data');
    });

    it('should have all the tabs', () => {
        browser.waitForExist('ul.nav');
        ['Log', 'Message List', 'Node List', 'Node Graph'].forEach( (tabName, idx) => {
            expect(browser.elements('ul.nav>li').value[idx].getText()).to.eq(tabName);
        });
    });
});