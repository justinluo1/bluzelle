describe('Log tab', () => {
    describe('Table Headers', () => {
        const header = require('../getBaseElement')('div.react-grid-HeaderRow');
        it('should contain table headers', () => {
            ['Level', 'Timestamp', 'Message', 'Node'].forEach( text => {
                header().waitForExist (`div.widget-HeaderCell__value*=${text}`);
            });
        });
    });

    describe('Table rows', () => {
        const header = require('../getBaseElement')('div.react-grid-Grid');
        it('should log node added', () => {
            ['info', new Date().toISOString().substring(0, 11), 'Node added', '127.0.0.1'].forEach( text => {
                header().waitForExist('div.react-grid-Canvas>div>div');
                browser.elements('div.react-grid-Canvas>div>div').value[0]
                    .waitForExist(`div*=${text}`);
            });
        });
    });
});
