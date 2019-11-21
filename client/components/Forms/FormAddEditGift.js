import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
const randomString = require('random-string');
import Select from 'react-select';
import {FaPaperPlane} from 'react-icons/fa'

class FormAddEditGift extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items:[],//luu gia tri tra ve tu api
      options:[],//luu option cua select
      value:'',
      label:'',
      id: 0,
      id_gift: randomString(7),
      title: '',
      content: '',
      point: '',
      quantity: 0,
      id_store: '',
      store_obj:''
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }
  handleChange = id_store => {
    this.setState({
      store_obj: id_store, 
      id_store: id_store.value
    });
    console.log(`Option selected:`, id_store.value);
  };

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
    let url = 'http://localhost:3000/users/optionstore';
    fetch(url)
      .then(response => response.json())
      .then(items => {
        this.setState({items})
        this.addItem(items)
      })
      .catch(err => console.log(err))
  }
  addItem(items){
    items.map((val,key) => {
      key={key}
      this.setState({
        value: val.id,
        label: val.username
      })
      let item = {'value':this.state.value,'label': this.state.label};
      this.state.options.push(item)
      console.log(this.state.options)
    })

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
    const { store_obj} = this.state;
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
          <Select
            value={store_obj}
            onChange={this.handleChange}
            options={this.state.options}
          />
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

export default FormAddEditGift;
