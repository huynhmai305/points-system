import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Icon } from 'antd'
import ReadQR from '../QRCode/ReadQR';

class ModalScan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
        }
    }
    copyText = (result) => {
        alert(result)
    }
    
    render() {
        const { modal } = this.state;
        const toggle = () => this.setState({modal:!modal})
    
        return (
            <div>
                <Button color="danger" onClick={toggle}><Icon type="scan"/> Quét mã</Button>
                <Modal isOpen={modal} toggle={toggle}>
                    <ModalHeader toggle={toggle}>Quét mã QR</ModalHeader>
                    <ModalBody>
                        <ReadQR handleData={this.copyText}/>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={toggle} onClick={() => {navigator.clipboard.writeText(this.state.textToCopy)}}>Copy</Button>{' '}
                        <Button color="secondary" onClick={toggle}>Hủy</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default ModalScan;
