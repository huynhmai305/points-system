import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import QR from '../QRCode/GenerateQR_Image'

const NotificationQR = (props) => {
  const { username, data, getPngUrl } = props;

  const [modal, setModal] = useState(true);

  const toggle = () => setModal(!modal);

  const convert = () => {
    const canvas = document.getElementById("123456");
    const pngUrl = canvas.toDataURL("image/png");
    console.log(pngUrl)
    getPngUrl(pngUrl)
    toggle;
  }

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Thông báo</ModalHeader>
        <ModalBody>
          <p>Chúc mừng <b>{username}</b> đã đăng ký tài khoản thành công trên hệ thống tích điểm H&M </p>
          <p>Đây là QR code của bạn, vui lòng kiểm tra mail để nhận mã và sử dụng</p>
          <p><QR data={data} /></p>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={convert}>OK</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
export default NotificationQR
