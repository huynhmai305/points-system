import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap'
import AddForm from '../Forms/FormAddBill';
import { FaEdit, FaPlus } from "react-icons/fa";

class ModalForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false
    }
  }

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }))
  }

  render() {
    const closeBtn = <button className="close" onClick={this.toggle}>&times;</button>
    const label = this.props.buttonLabel
    let button = ''
    let title = ''

    if (label === 'Edit') {
      button = <Button
        color="warning"
        onClick={this.toggle}
        style={{ float: "left", marginRight: "10px", color: 'white' }}>
        <FaEdit />
      </Button>
      title = 'Chỉnh sửa'
    } else {
      button = <Button
        color="success"
        className="w3-circle"
        onClick={this.toggle}
        style={{ float: "left", marginRight: "10px" }}>
        <FaPlus />
      </Button>
      title = 'Thêm mới'
    }
    return (
      <div>
        {button}
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle} close={closeBtn}>{title}</ModalHeader>
          <ModalBody>
            <AddForm
              addItemToState={this.props.addItemToState}
              toggle={this.toggle}
              item={this.props.item}
              id_user={this.props.id_user}
              point={this.props.point}
              username={this.props.username} />
          </ModalBody>
        </Modal>
      </div>
    )
  }
}

export default ModalForm
