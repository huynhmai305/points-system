import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class AddEditForm extends React.Component {
  state = {
    id:'',
    total: 0
  }

  onChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }
  TichDiem = (e) => {
      var point=this.state.total/1000;
      console.log(point)
  }

  submitFormAdd = e => {
    console.log(this.props.id_user)
    e.preventDefault()
    fetch('http://localhost:3000/users/bill', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'  
      },
      body: JSON.stringify({
        id: this.state.id,
        total: this.state.total,
        id_user: this.props.id_user
      })
    })
    .then(response => response.json())
    .then(item => {
      alert(`Thêm thành công`);
      location.reload()
    })   
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
          <Input type="number" name="total" id="total" onChange={this.onChange} value={this.state.total}  required/>
        </FormGroup>
        <FormGroup>
          <Button color="success">Tích điểm</Button>
        </FormGroup>       
      </Form>
    );
  }
}

export default AddEditForm