import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap'
import AddForm from '../Forms/FormAddBill';
import { FaMoneyBillWave } from "react-icons/fa"; 

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
      let button = ''
      let title = ''
        button = <Button
                  color="success"
                  onClick={this.toggle}
                  style={{float: "left", marginRight:"10px"}}>
                  <FaMoneyBillWave/> Thêm hóa đơn
                </Button>
        title = 'Thêm hóa đơn'

      return (
      <div>
        {button}
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle} close={closeBtn}>{title}</ModalHeader>
          <ModalBody>
            <AddForm
              toggle={this.toggle}
              id_user={this.props.id_user}
              point={this.props.point}
              username={this.props.username}/>
          </ModalBody>
        </Modal>
      </div>
    )
  }
}

export default ModalForm
