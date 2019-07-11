import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
var randomString = require('random-string');

class FormAddEditGift extends Component {
    state = {
        id:0,
        id_gift:randomString(7),
        title: '',
        content: '',
        point: '',
        id_store: ''
      }
    
      onChange = e => {
        this.setState({[e.target.name]: e.target.value})
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
            id_gift:this.state.id_gift,
            title: this.state.title,
            content: this.state.content,
            point: this.state.point,
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
            id:this.state.id,
            title: this.state.title,
            content: this.state.content,
            point: this.state.point,
            id_store: this.state.id_store
          })
        })
          .then(response => response.json())
          .then(item => {
            alert(`Chỉnh sửa thành công id: ${this.state.id}`);
            location.reload()
          })
      }
    
      componentDidMount(){
        // if item exists, populate the state with proper data
        if(this.props.item){
          const { id, title, content, point, id_store} = this.props.item
          this.setState({id, title, content, point, id_store})
        }
        var info = JSON.parse(localStorage.getItem('user'));
        var id_store = info[0].id;
        this.setState({id_store})
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
              <Input type="textarea" name="content" id="content" onChange={this.onChange} value={this.state.content === null ? '' : this.state.content}  />
            </FormGroup>
            <FormGroup>
              <Label for="point">Điểm</Label>
              <Input type="number" name="point" id="point" onChange={this.onChange} value={this.state.point === null ? '' : this.state.point}  />
            </FormGroup>
            <FormGroup>
              <Label for="id_store">Mã cửa hàng</Label>
              <Input type="tel" name="id_store" id="id_store" onChange={this.onChange} value={this.state.id_store === null ? '' : this.state.id_store} />
            </FormGroup>
            <FormGroup>
              <Button color="success">Submit</Button>
            </FormGroup>            
          </Form>
        );
      }
}

export default FormAddEditGift;