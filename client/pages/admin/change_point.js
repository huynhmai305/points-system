import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Col } from 'reactstrap';
import Admin from '../../components/admin/Admin'
import {FaExchangeAlt} from 'react-icons/fa'
import Swal from 'sweetalert2'

export default class Change_point extends Component {
  state = {
    point_change_old: 0,
    point_change: 0
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }
  getItems = () => {
    fetch('http://localhost:3000/users/point_change')
      .then(response => response.json())
      .then(result => {
        this.setState({ point_change_old: result.point_change })
        console.log(this.state.point_change_old)
      })
  }
  submitFormEdit = e => {
    e.preventDefault()
    fetch('http://localhost:3000/users/point_change', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        point_change: this.state.point_change
      })
    })
      .then(() => {
        Swal.fire(`Thiết lập điểm thành công`,"", "success")
        location.reload()
      })
  }

  componentDidMount() {
    this.getItems('')
  }

  render() {
    return (
      <Admin title="Giá trị quy đổi điểm">
        <Container>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/admin">Trang chủ</a>
            </li>
            <li className="breadcrumb-item active">Giá trị quy đổi điểm tích lũy</li>
          </ol>
          <Form >
            <FormGroup>
              <Label>Công thức tính điểm tích lũy:</Label>
              <h5>Điểm tích lũy = Tổng tiền thanh toán / giá trị quy đổi</h5>
            </FormGroup>
            <FormGroup>
              <Label>Giá trị quy đổi hiện tại: {this.state.point_change_old}</Label>
            </FormGroup>
            <FormGroup row>
              <Col md={5}>
                <Label for="point_change">Giá trị quy đổi mới (nếu có)</Label>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1"><FaExchangeAlt/></span>
                  </div>
                  <Input type="text" name="point_change" onChange={this.onChange} value={this.state.point_change} placeholder="Giá trị quy đổi mới.." />
                </div>
              </Col>
              <Col md={3}>
                <Label for="dvt">Đơn vị quy đổi</Label>
                <Input type="text" id="dvt" defaultValue="đồng" readOnly="readonly" />
              </Col>
            </FormGroup>
            <FormGroup>
              <Button color="success" onClick={this.submitFormEdit}>Thay đổi</Button>
            </FormGroup>
          </Form>
        </Container>
      </Admin>
    )
  }
}
