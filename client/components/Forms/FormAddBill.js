import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import NumberFormat from 'react-number-format';

class AddEditForm extends React.Component {
  state = {
    id:'',
    total: 0,
    point_change:0 ,//giá trị quy đổi điểm hiện tại
    id_store:''
  }

  onChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }
  getItems =() => {
    fetch('http://localhost:3000/users/point_change')
    .then (response => response.json())
    .then(result =>{
        this.setState({point_change:result.point_change})
        console.log(this.state.point_change)  
    })
}
  
  submitFormAdd = e => {
    // console.log(this.state.total)
    e.preventDefault()
    fetch('http://localhost:3000/users/bill', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'  
      },
      body: JSON.stringify({
        id: this.state.id,
        total: this.state.total,
        id_user: this.props.id_user,
        id_store: this.state.id_store
      })
    })
    .then(response => response.json())
    .then(item => {
      alert(`Thêm thành công`);
      var point = this.props.point + this.state.total / this.state.point_change;
      console.log(this.state.point_change)
      fetch('http://localhost:3000/users/point', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: this.props.id_user,
          point: point
        })
      })
      .then(response => response.json())
      .then(item => {
        alert(`Tích điểm thành công cho khách hàng ${this.props.username}`);
        location.reload()
      })      
     })   
    }
    componentDidMount() {
      let info = JSON.parse(localStorage.getItem('user'))
      this.setState({id_store: info[0].id})
      this.getItems()
    }
  render() {
    return (
      <Form onSubmit={this.submitFormAdd}>
        <FormGroup>
          <Label for="id">Mã hóa đơn</Label>
          <Input type="text" name="id" id="id" onChange={this.onChange} value={this.state.id} required/>
        </FormGroup>
        <FormGroup>
          <Label for="total">Tổng tiền thanh toán</Label>
          {/*<NumberFormat thousandSeparator={true} suffix={'đ'} name="total" id="total" onChange={this.onChange} value={this.state.total}  required/>*/}
          <Input type="number" name="total" id="total" onChange={this.onChange} value={this.state.total} required/>
        </FormGroup>
        <FormGroup>
          <Label for="id_store">Mã cửa hàng</Label>
          <Input type="text" name="id_store" id="id_store" onChange={this.onChange} value={this.state.id_store} readOnly="readonly"/>
        </FormGroup>
        <FormGroup>
          <Button color="success">Tích điểm</Button>
        </FormGroup>       
      </Form>
    );
  }
}

export default AddEditForm