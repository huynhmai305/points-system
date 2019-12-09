import React, { Component } from 'react';
import { Card, CardBody,Button, Form, FormGroup, Label, Input, Container, Col } from 'reactstrap';
import Admin from '../../components/Store'
import {FaExchangeAlt} from 'react-icons/fa'
import Swal from 'sweetalert2'

export default class Change_point extends Component {
  state = {
    point_change_old: 0,
    point_change: 0
  }
  onChange = e => {
    this.setState({ [e.target.name]: parseFloat(e.target.value)})
  }
  getItems = (id_store) => {
    console.log(id_store)
    fetch(`http://localhost:3000/users/point_change/${id_store}`)
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
        point_change: this.state.point_change,
        id_store: this.state.id_store
      })
    })
      .then(() => {
        Swal.fire(`Thiết lập giá trị quy đổi thành công`,"", "success")
        location.reload()
      })
  }

  componentDidMount() {
    let info = JSON.parse(localStorage.getItem('user'))
    this.setState({
      id_store: info[0].id,
      name: info[0].username,
      image: info[0].picture
    },() => {
      this.getItems(this.state.id_store)
    })
  }

  render() {
    return (
      <Admin username={this.state.name} image={this.state.image}>
        <Container>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/store">Trang chủ</a>
            </li>
            <li className="breadcrumb-item active">Giá trị quy đổi điểm thưởng</li>
          </ol>
          <Form>
            <Card>
              <CardBody>
                <FormGroup>
                  <Label>Công thức tính điểm thưởng:</Label>
                  <h5>Điểm thưởng = Tổng tiền thanh toán * giá trị quy đổi</h5>
                </FormGroup>
                <FormGroup>
                  <Label>Giá trị quy đổi hiện tại: {this.state.point_change_old}</Label>
                </FormGroup>
                <FormGroup row>
                  <Col md={4}>
                    <Label for="dvt">Giá trị quy đổi trên hóa đơn</Label>
                    <Input type="text" id="dvt" defaultValue={this.state.point_change_old*100+'%'} readOnly="readonly" />
                  </Col>
                </FormGroup>
              </CardBody>
            </Card>
            <Card className="mt-3">
              <CardBody>
                <FormGroup>
                  <Label for="point_change">Giá trị quy đổi mới (nếu có)</Label>
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="basic-addon1"><FaExchangeAlt/></span>
                    </div>
                    <Input type="number" step="0.01" name="point_change" onChange={this.onChange} value={this.state.point_change} placeholder="Giá trị quy đổi mới.." />
                  </div>
                </FormGroup>
                <FormGroup>
                  <Button color="success" onClick={this.submitFormEdit}>Thay đổi</Button>
                </FormGroup>
              </CardBody>
            </Card>
          </Form>
        </Container>
      </Admin>
    )
  }
}
