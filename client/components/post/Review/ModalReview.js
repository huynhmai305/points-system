import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap'
import AddEditForm from './ReviewForm'
import { useRouter } from 'next/router'
import {FaEdit, FaPencilAlt} from 'react-icons/fa'

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
        onClick={this.toggle}
        style={{ float: "left", marginRight: "10px" }}>
        <FaPencilAlt/> Viết bài
      </Button>
      title = 'Thêm mới'
    }
    console.log(this.props.postId)
    return (
      <div>
        {button}
        <Modal isOpen={this.state.modal} size="lg" toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle} close={closeBtn}>{title}</ModalHeader>
          <ModalBody>
            <AddEditForm
              toggle={this.toggle}
              item={this.props.item}
              userId={this.state.userId}
              postId={this.props.postId}
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
    <ModalForm postId={id} />
  )
}
export default getInfo
