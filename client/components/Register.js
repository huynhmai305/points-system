import React, { Component } from 'react';
import { Col, Row, Button, FormGroup, Label, FormText, FormFeedback } from 'reactstrap';
import { renderEmail } from 'react-html-email'
import MailTemplate from '../components/mail/MailTemplate'
import NotificationQR from './Modals/Notification_QR_Info'
import Swal from 'sweetalert2'
import { AvForm, AvField } from 'availity-reactstrap-validation';

class Register extends Component {
  state = {
    id: 0,
    username: '',
    birthday: '',
    address: '',
    phone: '',
    email: '',
    password: '',
    password2: '',
    role: 2,
    picture: '',
    showQR: false
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  submitFormAdd = e => {
    e.preventDefault()
    fetch('http://localhost:3000/admin/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: this.state.username,
        birthday: this.state.birthday,
        address: this.state.address,
        phone: this.state.phone,
        email: this.state.email,
        password: this.state.password,
        role: this.state.role
      })
    })
      .then(response => response.json())
      .then(item => {
        console.log(item)
        this.setState({ showQR: true })
      })
      .catch(err => Swal.fire('Tài khoản đã tồn tại',"","error"))
  }

  submitNotification = (pngUrl) => {
    const messageHtml = renderEmail(
      <MailTemplate name={this.state.username} />
    )
    console.log(pngUrl)
    fetch('http://localhost:3000/sendmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: this.state.email,
        messageHtml: messageHtml,
        content: pngUrl
      })
    })
      .then(response => response.json())
      .then(item => {
        Swal.fire('Đăng ký thành công','Đã gửi mã QR về mail bạn thành công!',"success")
      })
      .catch(err => console.log(err))
  }
  render() {
    const { showQR } = this.state
    return (
      <div>
        {showQR == false ? (
          <AvForm onValidSubmit={this.submitFormAdd}>
            <FormText>Form đăng ký của khách hàng</FormText>
            <FormGroup>
              <Label for="username">Họ tên</Label>
              <AvField type="text"
                name="username"
                id="username"
                placeholder="Nhập tên"
                onChange={this.onChange}
                value={this.state.username}
                validate={{
                  required: {value: true, errorMessage: 'Vui lòng nhập họ tên'},
                  pattern: {value: /[a-zA-Z]/, errorMessage: 'Chỉ được nhập chữ'}
                }} 
              />
            </FormGroup>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="birthday">Ngày sinh</Label>
                  <AvField type="date"
                    name="birthday"
                    id="birthday"
                    placeholder="Nhập ngày sinh"
                    onChange={this.onChange}
                    value={this.state.birthday}
                    validate={{
                      required: {value: true, errorMessage: 'Vui lòng nhập ngày sinh'},
                      min: {value: "1960-01-01", errorMessage: 'Năm sinh không được nhỏ hơn 1960'},
                      max: {value: "2004-12-31", errorMessage: 'Năm sinh không được lớn hơn 2004'}
                    }}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="phone">Số điện thoại</Label>
                  <AvField
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder="Nhập số điện thoại"
                    onChange={this.onChange}
                    value={this.state.phone}
                    validate={{
                      required: {value: true, errorMessage: 'Vui lòng nhập số điện thoại'},
                      tel: {pattern: /0{1}\d{9}$/, errorMessage: 'Số điện thoại gồm 10 số  và bắt đầu từ số 0'},
                    }}
                  />
                </FormGroup>
              </Col>
            </Row>
            <FormGroup>
              <Label for="address">Địa chỉ</Label>
              <AvField
                type="text"
                name="address"
                id="address"
                placeholder="Nhập địa chỉ"
                onChange={this.onChange}
                value={this.state.address}
                validate={{
                  required: {value: true, errorMessage: 'Vui lòng nhập địa chỉ'}
                }}
              />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <AvField type="email"
                name="email"
                id="email"
                placeholder="Nhập email"
                onChange={this.onChange}
                value={this.state.email}
                validate={{
                  required: {value: true, errorMessage: 'Vui lòng nhập email'},
                  email: {value: true, errorMessage: 'Email không đúng định dạng'}
                }}
              />
            </FormGroup>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="password1">Password</Label>
                  <AvField 
                    type="password"
                    name="password"
                    id="password1"
                    placeholder="Nhập password"
                    onChange={this.onChange}
                    value={this.state.password}
                    validate={{
                      required: {value: true, errorMessage: 'Vui lòng nhập password'}
                    }}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="password2">Xác nhận password</Label>
                  <AvField
                    type="password"
                    name="password2"
                    id="password2"
                    placeholder="Nhập lại password"
                    onChange={this.onChange}
                    value={this.state.password2}
                    // valid={this.state.password === this.state.password2 && this.state.password2 !== ''}
                    // invalid={this.state.password !== this.state.password2}
                    // required
                    validate={{
                      required: {value: true, errorMessage: 'Vui lòng nhập password xác nhận'},
                      match:{value:'password', errorMessage: 'Password không trùng khớp'}
                    }}
                  />
                </FormGroup>
              </Col>
            </Row>
            <FormGroup>
              <Button color="success">Đăng ký</Button>
            </FormGroup>
          </AvForm>
        ) : (
            <NotificationQR
              username={this.state.username}
              data={this.state.email}
              getPngUrl={this.submitNotification}
            />
          )}
      </div>
    );
  }
}

export default Register;
