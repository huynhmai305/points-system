import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import StarRatings from 'react-star-ratings';

const ModalExample = (props) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="info" onClick={toggle}>Xem chi tiết</Button>
      <Modal isOpen={modal} toggle={toggle} className="modal-lg">
        <ModalHeader toggle={toggle}>{props.title}</ModalHeader>
        <ModalBody>
          <StarRatings
            rating={props.rating}
            starRatedColor="blue"
            numberOfStars={5}
            name='rating'
            starDimension='30px'
          />
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
