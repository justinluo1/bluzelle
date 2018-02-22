import {sendLogMessage} from "../CommunicationService";
import _ from 'lodash'

describe('Log tab', () => {
    describe('Table Headers', () => {
        const header = require('../getBaseElement')('div.react-grid-HeaderRow');

        it('should contain table headers', () =>{
            ['Level', 'Timestamp', 'Message', 'Node'].forEach(text =>{
                header().waitForExist (`div.widget-HeaderCell__value*=${text}`);
            });
        });
    });

    describe('Table rows', () => {
        it('@watch should log node added', () => {
            emulator.setMaxNodes(2)
            browser.elements('div.react-grid-Canvas>div>div').value[0]
                .waitForExist('div=Node Added');
        });

        it('should display a log entry when one is received', () =>  {
            _.times(5, (num) => sendLogMessage(`some message ${num}`));
        });
    });
});
