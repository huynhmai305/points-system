import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {FaPaperPlane} from 'react-icons/fa'
import Swal from 'sweetalert2'

class AddEditForm extends React.Component {
  state = {
    id: 0,
    username: '',
    birthday: '',
    address: '',
    phone: '',
    email: '',
    password: '',
    role: 2
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
        birthday: this.state.birthday,
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
      <Form onSubmit={this.props.item ? this.submitFormEdit : this.submitFormAdd}>
        <FormGroup>
          <Label for="username">Họ tên</Label>
          <Input type="text" name="username" id="username" onChange={this.onChange} value={this.state.username === null ? '' : this.state.username} required/>
        </FormGroup>
        <FormGroup>
          <Label for="birthday">Ngày sinh</Label>
          <Input type="date" min="1960-01-01" max="2004-12-31" name="birthday" id="birthday" onChange={this.onChange} value={this.state.birthday === null ? '' : this.state.birthday} required/>
        </FormGroup>
        <FormGroup>
          <Label for="address">Địa chỉ</Label>
          <Input type="text" name="address" id="address" onChange={this.onChange} value={this.state.address === null ? '' : this.state.address} required/>
        </FormGroup>
        <FormGroup>
          <Label for="phone">Số điện thoại</Label>
          <Input type="tel" pattern="[0]{1}[0-9]{9}" name="phone" id="phone" onChange={this.onChange} value={this.state.phone === null ? '' : this.state.phone} placeholder="ex.0123456789" required/>
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" pattern="[^@\s]+@[^@\s]+\.[^@\s]+" name="email" id="email" onChange={this.onChange} value={this.state.email === null ? '' : this.state.email} placeholder="ex.mail@gmail.com" required />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input type="password" name="password" id="password" onChange={this.onChange} value={this.state.password === null ? '' : this.state.password} required/>
        </FormGroup>
        <FormGroup>
          <Button color="success" className="float-right">
            <FaPaperPlane/> Gửi
          </Button>
        </FormGroup>
      </Form>
    );
  }
}

export default AddEditForm
