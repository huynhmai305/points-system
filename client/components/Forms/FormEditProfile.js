import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Row, Col, Media } from 'reactstrap';
import { FaPaperPlane } from 'react-icons/fa'
import Swal from 'sweetalert2'

class FormEditProfile extends Component {
  state = {
    items: [],
    id: 0,
    username: '',
    birthday: '',
    address: '',
    phone: '',
    email: '',
    password: ''
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  submitFormEdit = e => {
    e.preventDefault()
    fetch('http://localhost:3000/admin/user', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: this.state.id,
        username: this.state.username,
        birthday: this.state.birthday,
        address: this.state.address,
        phone: this.state.phone,
        email: this.state.email,
        password: this.state.password
      })
    })
      .then(response => response.json())
      .then(item => {
        Swal.fire(`Chỉnh sửa thành công`, "", "success")
        location.reload()
      })
  }

  componentDidMount() {
    // if item exists, populate the state with proper data
    if (this.props.item) {
      const { id, username, birthday, address, phone, email, password } = this.props.item
      this.setState({ id, username, birthday, address, phone, email, password })
    }
  }

  render() {
    return (
      <Row>
        <Col md={{ offset: 1, size: 4 }}>
          <Media object data-src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png" className="rounded-circle img-thumbnail .d-block .mx-auto image_inner_container" alt="avatar" style={{ width: 100, height: 100 }} />
          <Col className="mt-5">
            <p>Thay đổi ảnh đại diện</p>
            <Input type="file" className="form-control-file " />
          </Col>
        </Col>
        <Col md={7}>
          <Form onSubmit={this.submitFormEdit}>
            <FormGroup className="form-inline">
              <Label for="username" md={{ size: 5 }}>Họ tên:</Label>
              <Input type="text" className="form-control" md={{ size: 6 }} name="username" id="username" onChange={this.onChange} defaultValue={this.state.username} />
            </FormGroup>
            <FormGroup className="form-inline">
              <Label for="birthday" md={{ size: 5 }}>Ngày sinh:</Label>
              <Input type="date" className="form-control" md={{ size: 6 }} name="birthday" id="birthday" onChange={this.onChange} defaultValue={this.state.birthday} />
            </FormGroup>
            <FormGroup className="form-inline">
              <Label for="address" md={{ size: 5 }}>Địa chỉ:</Label>
              <Input type="text" className="form-control" md={{ size: 6 }} name="address" id="address" onChange={this.onChange} defaultValue={this.state.address} />
            </FormGroup>
            <FormGroup className="form-inline">
              <Label for="phone" md={{ size: 5 }}>Số điện thoại:</Label>
              <Input type="tel" className="form-control" md={{ size: 6 }} name="phone" id="phone" onChange={this.onChange} defaultValue={this.state.phone} />
            </FormGroup>
            <FormGroup className="form-inline">
              <Label for="email" md={{ size: 5 }}>Email:</Label>
              <Input type="email" className="form-control" md={{ size: 6 }} name="email" id="email" onChange={this.onChange} defaultValue={this.state.email} />
            </FormGroup>
            <FormGroup className="form-inline">
              <Label for="password" md={{ size: 5 }}>Password:</Label>
              <Input type="text" className="form-control" md={{ size: 6 }} name="password" id="password" onChange={this.onChange} defaultValue={this.state.password} />
            </FormGroup>
            <FormGroup className="mt-5" md={{ offset: 4, size: 4 }}>
              <Button color="success">
                <FaPaperPlane /> Gửi
              </Button>
            </FormGroup>
          </Form>
        </Col>
      </Row>
    );
  }
}

export default FormEditProfile;
