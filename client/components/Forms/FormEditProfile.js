import React, { Component } from 'react';
import { Button, FormGroup, Label, Row, Col, Media } from 'reactstrap';
import { FaPaperPlane } from 'react-icons/fa'
import Swal from 'sweetalert2'
import { AvForm, AvField } from 'availity-reactstrap-validation';

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
            <AvField type="file" className="form-control-file " />
          </Col>
        </Col>
        <Col md={7}>
          <AvForm onValidSubmit={this.submitFormEdit}>
            <FormGroup className="form-inline">
              <Label for="username" md={{ size: 5 }}>Họ tên:</Label>
              <AvField
                type="text"
                className="form-control"
                md={{ size: 6 }}
                name="username"
                id="username"
                onChange={this.onChange}
                defaultValue={this.state.username}
                validate={{
                  required: {value: true, errorMessage: 'Vui lòng nhập họ tên'}
                }}
              />
            </FormGroup>
            <FormGroup className="form-inline">
              <Label for="birthday" md={{ size: 5 }}>Ngày sinh:</Label>
              <AvField
                type="date"
                className="form-control"
                md={{ size: 6 }}
                name="birthday"
                id="birthday"
                onChange={this.onChange}
                defaultValue={this.state.birthday}
                validate={{
                  required: {value: true, errorMessage: 'Vui lòng nhập ngày sinh'},
                  min: {value: "1960-01-01", errorMessage: 'Năm sinh không được nhỏ hơn 1960'},
                  max: {value: "2004-12-31", errorMessage: 'Năm sinh không được lớn hơn 2004'}
                }}
              />
            </FormGroup>
            <FormGroup className="form-inline">
              <Label for="address" md={{ size: 5 }}>Địa chỉ:</Label>
              <AvField
                type="text"
                className="form-control"
                md={{ size: 6 }}
                name="address"
                id="address"
                onChange={this.onChange}
                defaultValue={this.state.address}
                validate={{
                  required: {value: true, errorMessage: 'Vui lòng nhập địa chỉ'}
                }}
              />
            </FormGroup>
            <FormGroup className="form-inline">
              <Label for="phone" md={{ size: 5 }}>Số điện thoại:</Label>
              <AvField
                type="tel"
                className="form-control"
                md={{ size: 6 }}
                name="phone"
                id="phone"
                onChange={this.onChange}
                defaultValue={this.state.phone}
                validate={{
                  required: {value: true, errorMessage: 'Vui lòng nhập số điện thoại'},
                  tel: {pattern: /0{1}\d{9}$/, errorMessage: 'Số điện thoại gồm 10 số  và bắt đầu từ số 0'},
                }}
              />
            </FormGroup>
            <FormGroup className="form-inline">
              <Label for="email" md={{ size: 5 }}>Email:</Label>
              <AvField
                type="email"
                className="form-control"
                md={{ size: 6 }}
                name="email"
                id="email"
                onChange={this.onChange}
                defaultValue={this.state.email}
                validate={{
                  required: {value: true, errorMessage: 'Vui lòng nhập email'},
                  email: {value: true, errorMessage: 'Email không đúng định dạng'}
                }}
              />
            </FormGroup>
            <FormGroup className="form-inline">
              <Label for="password" md={{ size: 5 }}>Password:</Label>
              <AvField
                type="text"
                className="form-control"
                md={{ size: 6 }}
                name="password"
                id="password"
                onChange={this.onChange}
                defaultValue={this.state.password}
                validate={{
                  required: {value: true, errorMessage: 'Vui lòng nhập password'}
                }}
              />
            </FormGroup>
            <FormGroup className="mt-5" md={{ offset: 4, size: 4 }}>
              <Button color="success">
                <FaPaperPlane /> Gửi
              </Button>
            </FormGroup>
          </AvForm>
        </Col>
      </Row>
    );
  }
}

export default FormEditProfile;
