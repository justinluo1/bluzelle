import _ from 'lodash'

describe('Log tab', () => {
    beforeEach(() => {
        emulator.setMaxNodes(4);
        console.log('node count:', emulator.getNodesCount());
    });

    describe('Table Headers', () => {
        const header = require('../getBaseElement')('div.react-grid-HeaderRow');

        it('should contain table headers', () => {
            ['Level', 'Timestamp', 'Message', 'Node'].forEach( text =>{
                header().waitForExist (`div.widget-HeaderCell__value*=${text}`);
            });
        });
    });

    describe('Table rows', () => {

        _.times(emulator.getNodesCount(), idx => {
            console.log('index:', idx);
            it('@watch should log node added', () => {

                ['info', new Date().toISOString().substring(0, 11), 'Node added', '127.0.0.1'].forEach(text => {
                    browser.elements('div.react-grid-Canvas>div>div').value[idx]
                        .waitForExist(`div*=${text}`);
                });
            });
        });

        it(' should display a log entry when one is received', () =>  {
            console.log('Node count:', emulator.getNodesCount());
            console.log('Node value:', emulator.getNodes()[0].alive);
        });
    });
});
