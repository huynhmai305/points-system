import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class AddEditForm extends React.Component {
  state = {
    id: 0,
    username: '',
    birthday: '',
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
        alert(`Thêm thành công`);
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
        password: this.state.password,
        role: this.state.role
      })
    })
      .then(response => response.json())
      .then(item => {
        alert(`Chỉnh sửa thành công id: ${this.state.id}`);
        location.reload()
      })
  }

  componentDidMount() {
    // if item exists, populate the state with proper data
    if (this.props.item) {
      const { id, username, birthday, address, phone, email, password, role } = this.props.item
      this.setState({ id, username, birthday, address, phone, email, password, role })
    }
  }

  render() {
    return (
      <Form onSubmit={this.props.item ? this.submitFormEdit : this.submitFormAdd}>
        <FormGroup>
          <Label for="username">Họ tên</Label>
          <Input type="text" name="username" id="username" onChange={this.onChange} value={this.state.username === null ? '' : this.state.username} />
        </FormGroup>
        <FormGroup>
          <Label for="birthday">Ngày sinh</Label>
          <Input type="date" name="birthday" id="birthday" onChange={this.onChange} value={this.state.birthday === null ? '' : this.state.birthday} />
        </FormGroup>
        <FormGroup>
          <Label for="address">Địa chỉ</Label>
          <Input type="text" name="address" id="address" onChange={this.onChange} value={this.state.address === null ? '' : this.state.address} />
        </FormGroup>
        <FormGroup>
          <Label for="phone">Số điện thoại</Label>
          <Input type="tel" name="phone" id="phone" onChange={this.onChange} value={this.state.phone === null ? '' : this.state.phone} placeholder="ex.0123456789" />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" name="email" id="email" onChange={this.onChange} value={this.state.email === null ? '' : this.state.email} placeholder="ex.mail@gmail.com" required />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input type="text" name="password" id="password" onChange={this.onChange} value={this.state.password === null ? '' : this.state.password} />
        </FormGroup>
        <FormGroup check inline>
          <Label check>
            <Input type="radio" name="role" onChange={this.onChange} value={1} checked={(this.state.role === 1) ? true : false} />Cửa hàng
          </Label>
        </FormGroup>
        <FormGroup check inline>
          <Label check>
            <Input type="radio" name="role" id="role2" onChange={this.onChange} value={2} checked={(this.state.role === 2) ? true : false} />Khách hàng
          </Label>
        </FormGroup>
        <FormGroup>
          <Button color="light" className="float-right">
            <img src="/static/images/btn_send.png" style={{width:'50px',height:'50px'}}/>
          </Button>
        </FormGroup>

      </Form>
    );
  }
}

export default AddEditForm