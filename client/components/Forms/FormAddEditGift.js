import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
var randomString = require('random-string');

class FormAddEditGift extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items:[],
      id: 0,
      id_gift: randomString(7),
      title: '',
      content: '',
      point: '',
      quantity: 0,
      id_store: ''
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  submitFormAdd = e => {
    console.log(this.state.id_gift)
    // console.log(this.state.title+''+this.state.content+""+this.state.point)
    e.preventDefault()
    fetch('http://localhost:3000/users/gift', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'

      },
      body: JSON.stringify({
        id_gift: this.state.id_gift,
        title: this.state.title,
        content: this.state.content,
        point: this.state.point,
        quantity: this.state.quantity,
        id_store: this.state.id_store
      })
    })
      .then(response => response.json())
      .then(item => {
        console.log(item)
        alert(`Thêm thành công`);
        location.reload()
      })

  }

  submitFormEdit = e => {
    e.preventDefault()
    fetch('http://localhost:3000/users/gift', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: this.state.id,
        title: this.state.title,
        content: this.state.content,
        point: this.state.point,
        quantity: this.state.quantity,
        id_store: this.state.id_store
      })
    })
      .then(response => response.json())
      .then(item => {
        alert(`Chỉnh sửa thành công id: ${this.state.id}`);
        location.reload()
      })
  }
  getStore() {
    let url = 'http://localhost:3000/admin/store';
    fetch(url)
      .then(response => response.json())
      .then(items => {
        this.setState({ items });
        console.log(this.state.items)
      })
      .catch(err => console.log(err))
  }

  componentDidMount() {
    // if item exists, populate the state with proper data
    if (this.props.item) {
      const { id, title, content, point, quantity, id_store } = this.props.item
      this.setState({ id, title, content, point, quantity, id_store })
    }
    this.getStore()
  }
  render() {
    return (
      <Form onSubmit={this.props.item ? this.submitFormEdit : this.submitFormAdd}>
        <FormGroup>
          <Label for="title">Tiêu đề</Label>
          <Input type="text" name="title" id="title" onChange={this.onChange} value={this.state.title === null ? '' : this.state.title} />
        </FormGroup>
        <FormGroup>
          <Label for="content">Nội dung</Label>
          <Input type="textarea" name="content" id="content" onChange={this.onChange} value={this.state.content === null ? '' : this.state.content} />
        </FormGroup>
        <FormGroup>
          <Label for="point">Điểm</Label>
          <Input type="number" name="point" id="point" onChange={this.onChange} value={this.state.point === null ? '' : this.state.point} />
        </FormGroup>
        <FormGroup>
          <Label for="quantity">Số lượng</Label>
          <Input type="number" name="quantity" id="quantity" onChange={this.onChange} value={this.state.quantity === null ? '' : this.state.quantity} />
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">Chọn cửa hàng</Label>
          <Input type="select" name="id_store" id="id_store" onChange={this.onChange}>
            {this.state.items.map(item => {
              <option value={item.id}>{item.username}</option>
            })}
          </Input>
        </FormGroup>
        <FormGroup>
          <Button color="success">Submit</Button>
        </FormGroup>
      </Form>
    );
  }
}

export default FormAddEditGift;