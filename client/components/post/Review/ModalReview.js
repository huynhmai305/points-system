import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, Alert } from 'reactstrap'
import AddEditForm from './ReviewForm'
import { useRouter } from 'next/router'
import {FaEdit, FaPlus} from 'react-icons/fa'

class ModalForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false,
      userId: '',
      loading: false
    }
  }

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }))
  }
  componentDidMount() {
    if (localStorage.getItem('user') !== null) {
      var info = JSON.parse(localStorage.getItem('user'));
      this.setState({
        userId: info[0].id,
        loading: true
      })
    }
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
        <FaEdit/>
      </Button>
      title = 'Chỉnh sửa'
    } else {
      button = <Button
        color="success"
        className="w3-circle"
        onClick={this.toggle}
        style={{ float: "left", marginRight: "10px" }}>
        <FaPlus/>
      </Button>
      title = 'Thêm mới'
    }

    return (
      <div>
        {button}
        <Modal isOpen={this.state.modal} size="lg" toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle} close={closeBtn}>{title}</ModalHeader>
          <ModalBody>
            <AddEditForm
              addItemToState={this.props.addItemToState}
              updateState={this.props.updateState}
              toggle={this.toggle}
              item={this.props.item}
              userId={this.state.userId}
              storeId={this.props.storeId}
            />
          </ModalBody>
        </Modal>
      </div>
    )
  }
}

const getInfo = () => {
  const router = useRouter();
  const id = parseInt(router.query.id);
  return (
    <ModalForm storeId={id} />
  )
}
export default getInfo
