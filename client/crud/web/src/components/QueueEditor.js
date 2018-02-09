import {commandQueue, undo, redo, canUndo, canRedo, save, currentPosition} from "../services/CommandQueueService";
import {sendToNodes} from 'bluzelle-client-common/services/CommunicationService';

@observer
export class QueueEditor extends Component {
    constructor(props) {
        super(props);

        this.state = {show: false};
    }

    save() {
        console.log(save());
    }

    download() {
        console.log('downloading');
        sendToNodes('getData');
    }

    render() {

        const undoButton =
            <BS.Button onClick={undo}
                       disabled={!canUndo()}>

                <BS.Glyphicon glyph='chevron-left'/>
            </BS.Button>;

        const redoButton =
            <BS.Button onClick={redo}
                       disabled={!canRedo()}>
                <BS.Glyphicon glyph='chevron-right'/>
            </BS.Button>;

        const undoRedo =
            <BS.ButtonGroup style={{marginRight: 10}}>
                {undoButton}
                {redoButton}
            </BS.ButtonGroup>

        const historyButton =
            <BS.OverlayTrigger placement="bottom" overlay={
                <BS.Tooltip id="list-tooltip">History</BS.Tooltip>
            }>
                <BS.Button style={{marginRight: 10}}
                           onClick={() => this.setState({show: true})}>
                    <BS.Glyphicon glyph='list'/>
                </BS.Button>
            </BS.OverlayTrigger>;

        const saveButton =
            <BS.OverlayTrigger placement="bottom" overlay={
                <BS.Tooltip id="save-tooltip">Save</BS.Tooltip>
            }>
                <BS.Button style={{color: 'green'}}
                           onClick={() => this.save()}>
                    <BS.Glyphicon glyph='floppy-save'/>
                </BS.Button>
            </BS.OverlayTrigger>;


        const downloadButton =
            <BS.OverlayTrigger placement="bottom" overlay={
                <BS.Tooltip id="download-tooltip">Download</BS.Tooltip>
            }>
                <BS.Button onClick={() => this.download()}>
                    <BS.Glyphicon glyph='download'/>
                </BS.Button>
            </BS.OverlayTrigger>;

        const closeButton =
            <BS.Button style={{float: 'right'}}
                       onClick={() => this.setState({show: false})}>
                <BS.Glyphicon glyph='remove'/>
            </BS.Button>;


        const historyList =
            commandQueue.map(({revert, message}, index) =>
                <BS.ListGroupItem
                    onClick={revert}
                    key={index}
                    active={currentPosition.get() === index}>

                    {message}
                </BS.ListGroupItem>);


        return (
            <div style={{padding: 10}}>

                {undoRedo}
                {historyButton}
                {saveButton}
                {downloadButton}

                <BS.Modal show={this.state.show}
                          onHide={() => this.setState({show: false})}>
                    <div style={{padding: 10}}>
                        {undoRedo}
                        {saveButton}
                        {closeButton}
                    </div>
                    <div style={{fontFamily: 'monospace'}}>
                        <BS.ListGroup style={{margin: 0}}>
                            {historyList}
                        </BS.ListGroup>
                    </div>
                </BS.Modal>
            </div>
        );
    }
}