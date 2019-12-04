import React, { Component } from 'react';
import { Container, Row, Col, Alert } from 'reactstrap';
import Search from '../Search';
import Layout from '../Customer.js';
import ReadQR from '../QRCode/ReadQR';
import FormAddBill from '../Forms/FormAddBill'

export default class TichDiem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      point: 0,
      visible: false,
      username: '',
      msg: '',
      id: 0
    }
  }

  addBillQR = (bill) => {
    const billArr = (new Function("return [" + bill + "];")());
    console.log(billArr)
    this.setState({ bill: billArr, visible: true })
  }

  componentDidMount() {
    var info = JSON.parse(localStorage.getItem('user'));
    this.setState({
      username: info[0].username,
      id: info[0].id,
      image: info[0].picture
    });
  }

  render() {
    const { msg, id, bill, username, visible } = this.state
    return (
      <Layout username={this.state.username} image={this.state.image}>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/user">Trang chủ</a>
          </li>
          <li className="breadcrumb-item active">
            Tích điểm
          </li>
        </ol>
        <Container >
          <Row className="mt-5">
            <Col xs="12" sm="12" md="12">
              <Col xs="12" sm="6" md="6">
                <ReadQR handleData={this.addBillQR} /><br />
                <div className="text-danger">
                  {msg}
                </div>
              </Col>
              <Col xs="12" sm="6" md="6">
                <Alert color="light" className="mt-5" isOpen={visible}>
                  <h4 className="alert-heading">Thông tin hóa đơn</h4>
                  <FormAddBill id_user={id} bill={bill} username={username} />
                </Alert>
              </Col>
            </Col>
          </Row>
        </Container>
      </Layout>
    )
  }
}
