import React from 'react';
import { Button, FormGroup, Label} from 'reactstrap';
import {FaPaperPlane} from 'react-icons/fa'
import Swal from 'sweetalert2'
import { AvForm, AvField } from 'availity-reactstrap-validation';

class AddEditForm extends React.Component {
  state = {
    id: 0,
    username: '',
    address: '',
    phone: '',
    email: '',
    password: '',
    role: 1
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  submitFormAdd = e => {
    e.preventDefault()
    // console.log(this.state.role)
    fetch('http://localhost:3000/admin/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'

      },
      body: JSON.stringify({
        username: this.state.username,
        address: this.state.address,
        phone: this.state.phone,
        email: this.state.email,
        password: this.state.password,
        role: this.state.role
      })
    })
      .then(response => response.json())
      .then(item => {
        Swal.fire(`Thêm thành công`,"","success")
        location.reload()
      })

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
        address: this.state.address,
        phone: this.state.phone,
        email: this.state.email,
        password: this.state.password
      })
    })
      .then(response => response.json())
      .then(item => {
        Swal.fire(`Chỉnh sửa thành công id: ${this.state.id}`,"","success")
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
      <AvForm onValidSubmit={this.props.item ? this.submitFormEdit : this.submitFormAdd}>
        <FormGroup>
          <Label for="username">Tên cửa hàng</Label>
          <AvField
            type="text"
            name="username"
            id="username"
            onChange={this.onChange}
            value={this.state.username === null ? '' : this.state.username}
            validate={{
              required: {value: true, errorMessage: 'Vui lòng nhập tên cửa hàng'}
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label for="address">Địa chỉ</Label>
          <AvField
            type="text"
            name="address"
            id="address"
            onChange={this.onChange}
            value={this.state.address === null ? '' : this.state.address}
            validate={{
              required: {value: true, errorMessage: 'Vui lòng nhập địa chỉ của cửa hàng'}
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label for="phone">Số điện thoại</Label>
          <AvField
            type="tel"
            name="phone"
            id="phone"
            onChange={this.onChange}
            value={this.state.phone === null ? '' : this.state.phone}
            validate={{
              required: {value: true, errorMessage: 'Vui lòng nhập số điện thoại'},
              tel: {pattern: /0{1}\d{9}$/, errorMessage: 'Số điện thoại gồm 10 số  và bắt đầu từ số 0'}
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <AvField
            type="email"
            name="email"
            id="email"
            onChange={this.onChange}
            value={this.state.email === null ? '' : this.state.email}
            validate={{
              required: {value: true, errorMessage: 'Vui lòng nhập email'},
              email: {value: true, errorMessage: 'Email không đúng định dạng'}
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <AvField 
            type="password"
            name="password"
            id="password"
            onChange={this.onChange}
            value={this.state.password === null ? '' : this.state.password}
            validate={{
              required: {value: true, errorMessage: 'Vui lòng nhập password'}
            }}
          />
        </FormGroup>
        <FormGroup>
          <Button color="success" className="float-right">
            <FaPaperPlane/> Gửi
          </Button>
        </FormGroup>
      </AvForm>
    );
  }
}

export default AddEditForm
