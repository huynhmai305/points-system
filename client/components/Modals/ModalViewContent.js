import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalExample = (props) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="info" onClick={toggle}>Xem chi tiết</Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{props.title}</ModalHeader>
        <ModalBody>
          {props.content}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Ok</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample;
