import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class AddEditForm extends React.Component {
  state = {
    id:'',
    total: 0,
    id_store: 0,
    point: 0
  }

  onChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitFormAdd = e => {
    var point
    e.preventDefault()
    fetch('http://localhost:3000/users/bill', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'  
      },
      body: JSON.stringify({
        id: this.state.id,
        total: this.state.total,
        id_store: this.state.id_store,
      })
    })
    .then(response => response.json())
    .then(item => {
      alert(`Thêm thành công`);
      location.reload()
    })
   
  }
  componentDidMount() {
    var info = JSON.parse(localStorage.getItem('user'))
    var id_store = info[0].id
    this.setState({id_store})
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
          <Label for="phone">Số điện thoại khách hàng (nếu có):</Label>
          <Input type="tel" name="phone" id="phone" onChange={this.onChange} value={this.state.phone}  placeholder="ex.0123456789" />
        </FormGroup>
        <FormGroup>
          <Button color="success">Submit</Button>
        </FormGroup>
        
      </Form>
    );
  }
}

export default AddEditForm