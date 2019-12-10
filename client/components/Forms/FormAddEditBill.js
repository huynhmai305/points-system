import React from 'react';
import { Button, FormGroup, Label } from 'reactstrap';
import NumberFormat from 'react-number-format';
import Swal from 'sweetalert2'
import { AvForm, AvField } from 'availity-reactstrap-validation';

class AddEditForm extends React.Component {
  state = {
    id: '',
    total: 0,
    point_change: 0,//giá trị quy đổi điểm hiện tại
    id_store: ''
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }
  getItems = () => {
    fetch('http://localhost:3000/users/point_change')
      .then(response => response.json())
      .then(result => {
        this.setState({ point_change: result.point_change })
        console.log(this.state.point_change)
      })
  }

  updateStorage = () => {
    var info = JSON.parse(localStorage.getItem('user'));
    if (this.props.id_user === info[0].id) {
      info[0].point = this.state.point;
      localStorage.setItem("user", JSON.stringify(info[0].point));
    }
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
        Swal.fire("Thêm thành công", "", "success")
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
            Swal.fire("Tích điểm thành công", `cho khách hàng ${this.props.username}`, "success")
            this.updateStorage;
            location.reload()
          })
      })
  }
  submitFormEdit = e => {
    e.preventDefault()
    fetch('http://localhost:3000/users/bill', {
      method: 'PUT',
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
        Swal.fire(`Chỉnh sửa thành công id: ${this.state.id}`,"", "success")
        location.reload()
      })
  }
  componentDidMount() {
    if (this.props.item) {
      const { id, total, id_store } = this.props.item;
      this.setState({ id, total, id_store })
    }
    let info = JSON.parse(localStorage.getItem('user'))
    this.setState({ id_store: info[0].id })
    this.getItems()
  }
  render() {
    return (
      <AvForm onValidSubmit={this.submitFormAdd}>
        <FormGroup>
          <Label for="id">Mã hóa đơn</Label>
          <AvField
            type="text"
            name="id"
            id="id"
            onChange={this.onChange}
            value={this.state.id}
            validate={{
              required: {value: true, errorMessage: 'Vui lòng nhập mã hóa đơn'}
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label for="total">Tổng tiền thanh toán</Label>
          {/*<NumberFormat thousandSeparator={true} suffix={'đ'} name="total" id="total" onChange={this.onChange} value={this.state.total}  required/>*/}
          <AvField
            type="number"
            name="total"
            id="total"
            onChange={this.onChange}
            value={this.state.total}
            validate={{
              required: {value: true, errorMessage: 'Vui lòng nhập tổng tiền thanh toán'},
              number: {value: true, errorMessage: 'Chỉ được nhập số'},
              min: {value: 0, errorMessage: 'Tiền thanh toán không được nhỏ hơn 0'}
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label for="id_store">Mã cửa hàng</Label>
          <AvField
            type="text"
            name="id_store"
            id="id_store"
            onChange={this.onChange}
            value={this.state.id_store}
            readOnly="readonly"
          />
        </FormGroup>
        <FormGroup>
          <Button color="success">Tích điểm</Button>
        </FormGroup>
      </AvForm>
    );
  }
}

export default AddEditForm
