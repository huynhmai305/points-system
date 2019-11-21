import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { FaQrcode } from 'react-icons/fa'
import ReadQR from '../QRCode/ReadQR';

class ModalScan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    }
  }
  copyText = (result) => {
    console.log(result)
    this.props.handleData(result)
    this.setState({ modal: !this.state.modal })
  }

  render() {
    const { modal } = this.state;
    const toggle = () => this.setState({ modal: !modal })

    return (
      <div>
        <Button color="danger" onClick={toggle}><FaQrcode /> Quét mã</Button>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Quét mã QR</ModalHeader>
          <ModalBody>
            <ReadQR handleData={this.copyText} />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>Tìm kiếm</Button>{' '}
            <Button color="secondary" onClick={toggle}>Hủy</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalScan;
