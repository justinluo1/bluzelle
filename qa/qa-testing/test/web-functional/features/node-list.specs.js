const _ = require('lodash');
describe('Node List tab', () => {
    const header = require('../getBaseElement')('div.react-grid-Main');
    const NUM_OF_NODES = 5;

    beforeEach(() => {
        browser.waitForExist('=Node List');
        browser.click('=Node List');
        emulator.setMaxNodes(NUM_OF_NODES);
    });

    describe('Table Headers', () => {

        it('should contain table headers', () => {
            ['Address', 'Status', 'Actions'].forEach(text => {
                header().waitForExist(`div.widget-HeaderCell__value*=${text}`);
            });
        });
    });

    describe('Table Rows', () => {
        it('should show all nodes', () => {
            browser.waitUntil(() => {
                return browser.elements('div.react-grid-Canvas>div>div').value.length === 5
            }, 5000, 'expected nodes to equal number set by emulator');
        });

        it('should show all nodes to be new then alive', () => {
            browser.waitUntil( () =>
                browser.elements('div.react-grid-Canvas>div>div').value.length === 5
            );

            ['new', 'alive'].forEach( status =>
                _.times(5).forEach( idx =>
                    browser.elements('div.react-grid-Canvas>div>div').value[idx]
                        .waitForExist(`div=${status}`)
                )
            );
        });
    });
});
