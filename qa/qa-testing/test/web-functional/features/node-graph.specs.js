const _ = require('lodash');
import {addNode, updateNode} from "../CommunicationService";

describe('Node graph tab', () => {
    require('../getBaseElement')('body');

    beforeEach(() => {
        browser.waitForExist('=Node Graph');
        browser.click('=Node Graph');
    });

    describe('multiple nodes', () => {
        it('should show the number of nodes set by the emulator', () => {
            emulator.setMaxNodes(5);
            browser.waitUntil(() => browser.elements('circle').value.length === 10);
        });
    });

    describe('individual nodes', () => {
        _.each({green: 'alive', red: 'dead', blue: 'new'}, (state, color) => {
            it(`should display specs when mouseover on ${color} node`, () => {
                const nodeInfo = addNode({nodeState: state});
                updateNode(nodeInfo.address, {nodeState: state});
                checkInfoTable(nodeInfo.address, state);
                checkInfoTable(nodeInfo.address, nodeInfo.address);
            });
        });
    });
});

const checkInfoTable = (address, value) => {
    browser.waitForExist(`g#node-${address}`);
    browser.moveToObject(`g#node-${address}`);
    browser.waitForExist(`td=${value}`);
}