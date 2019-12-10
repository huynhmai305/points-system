import React, { Component } from 'react';
import { Button, FormGroup, Label } from 'reactstrap';
const randomString = require('random-string');
import {FaPaperPlane} from 'react-icons/fa'
import Swal from 'sweetalert2'
import { AvForm, AvField } from 'availity-reactstrap-validation';

class FormAddEditGift extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
          Swal.fire("Thêm thành công", "", "success")
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
        Swal.fire(`Chỉnh sửa thành công id: ${this.state.id}`,"", "success")
        location.reload()
      })
  }

  componentDidMount() {
    // if item exists, populate the state with proper data
    if (this.props.item) {
      const { id, title, content, point, quantity, id_store } = this.props.item
      this.setState({ id, title, content, point, quantity, id_store })
    }
    let info = JSON.parse(localStorage.getItem('user'))
    this.setState({ id_store: info[0].id })
    this.getStore()
  }
  render() {
    const { store_obj } = this.state;
    return (
      <AvForm onValidSubmit={this.props.item ? this.submitFormEdit : this.submitFormAdd}>
        <FormGroup>
          <Label for="title">Tiêu đề</Label>
          <AvField
            type="text"
            name="title"
            id="title"
            onChange={this.onChange}
            value={this.state.title === null ? '' : this.state.title}
            validate={{
              required: {value: true, errorMessage: 'Vui lòng nhập tiêu đề'}
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label for="content">Nội dung</Label>
          <AvField
            type="textarea"
            name="content"
            id="content"
            onChange={this.onChange}
            value={this.state.content === null ? '' : this.state.content}
            validate={{
              required: {value: true, errorMessage: 'Vui lòng nhập nội dung mô tả quà thưởng'}
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label for="point">Điểm</Label>
          <AvField
            type="number"
            name="point"
            id="point"
            onChange={this.onChange}
            value={this.state.point === null ? '' : this.state.point}
            validate={{
              required: {value: true, errorMessage: 'Vui lòng nhập điểm đổi quà'},
              number: {value: true, errorMessage: 'Điểm đổi quà phải là số'},
              min: {value: 10000, errorMessage: 'Điểm đổi quà không thấp hơn 10000'}
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label for="quantity">Số lượng</Label>
          <AvField
            type="number"
            name="quantity"
            id="quantity"
            onChange={this.onChange}
            value={this.state.quantity === null ? '' : this.state.quantity}
            validate={{
              required: {value: true, errorMessage: 'Vui lòng nhập số lượng quà'},
              number: {value: true, errorMessage: 'Số lượng phải là số'},
              min: {value: 0, errorMessage: 'Số lượng không nhỏ hơn 0'}
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

export default FormAddEditGift;
