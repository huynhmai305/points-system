import React, { Component } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Button } from 'reactstrap';
import moment from 'moment'
import ModalForm from '../../components/Modals/ModalAddBill';
import DataTable from '../../components/Tables/Table_Bill_Of_Customer';
import Excel from '../../components/exportTable/XLSX';
import Store from '../../components/Store';
import { useRouter } from 'next/router'
import QuetQRBill from '../../components/store/TichDiem'
import FormAddBill from '../../components/Forms/FormAddBill'

class BillOfCustomer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      info:[],
      name: '',
      id_user: this.props.id_user,
      username: '',
      point: 0,
      image: '',
    }
  }

  getItems() {
    fetch('http://localhost:3000/getInfoById/' + this.props.id_user)
    .then(res => res.json())
    .then( info => {
      this.setState({info, point: info[0].point, username: info[0].username})
      console.log('point db',info[0].point)
    })
    let url = 'http://localhost:3000/users/bill/' + this.props.id_user;
    fetch(url)
      .then(response => response.json())
      .then(items => {
        this.setState({
          items
        });
        console.log(this.state.username);
      })
      .catch(err => console.log(err))
  }

  addBillQR = (bill) => {
    //bill:{id:'',total:0,id_store:0}
    const billArr = (new Function("return [" + bill+ "];")());
    console.log(billArr)
    this.setState({bill: billArr})
  }

  componentDidMount() {
    var info = JSON.parse(localStorage.getItem('user'));
    this.setState({ name: info[0].username, image: info[0].picture})
    this.getItems()
  }

  render() {
    const header = ["id", "total", "createdAt"]
    const { bill, id_user, point, username} = this.state
    console.log('point modal',point)
    return (
      <Store username={this.state.name} image={this.state.image}>
        <Container className="App">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/store">Trang chủ</a>
            </li>
            <li className="breadcrumb-item active">Quản lý tích điểm khách hàng</li>
          </ol>
          <Row className="mb-5">
            <Col>
              <Excel
                data={this.state.items}
                name="Bill.xlsx"
                header={header}
              />{' '}
              <ModalForm buttonLabel='Add' id_user={id_user} point={point} username={username} />{' '}
              <QuetQRBill handleData={this.addBillQR} />
            </Col>
            {/* <Col md={2}>
              <ModalForm buttonLabel='Add' id_user={id_user} point={point} username={username} />
            </Col>
            <Col>
              <QuetQRBill handleData={this.addBillQR} />
            </Col> */}
          </Row>
          {this.state.bill != null ? (
          <FormAddBill id_user={id_user} bill={bill} username={username} point={point}/>
          ) : ''}
          {this.state.info.map((item,key) => (
          <Form className="align-content-center" key={key}>
            <h4 className="text-center">Thông tin tích điểm của khách hàng</h4>
            <FormGroup row>
              <Col sm={{ offset: 2, size: 4 }}>
                <Label for="exampleEmail" sm={3}>Họ tên:</Label>
                <Label sm={9}>{item.username}</Label>
              </Col>
              <Col sm={6}>
                <Label for="exampleEmail" sm={3}>Ngày sinh:</Label>
                <Label sm={9}>{moment(item.birthday).format('DD/MM/YYYY')}</Label>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col sm={{ offset: 2, size: 4 }}>
                <Label for="exampleEmail" sm={3}>Địa chỉ:</Label>
                <Label sm={9}>{item.address}</Label>
              </Col>
              <Col sm={6}>
                <Label for="exampleEmail" sm={3}>Số điện thoại:</Label>
                <Label sm={9}>{item.phone}</Label>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col sm={{ offset: 2, size: 4 }}>
                <Label for="exampleEmail" sm={3}>Email</Label>
                <Label sm={9}>{item.email}</Label>
              </Col>
              <Col sm={6}>
                <Label for="exampleEmail" sm={3}>Điểm tích lũy:</Label>
                <Label sm={9}>{item.point}</Label>
              </Col>
            </FormGroup>
          </Form>
          ))}
          <Row>
            <Col>
              <DataTable items={this.state.items} />
            </Col>
          </Row>
        </Container>
      </Store>
    );
  }
}
const getInfo = () => {
  const router = useRouter();
  const id_user = parseInt(router.query.id_user);
  return (
    <BillOfCustomer id_user={id_user} />
  )
}
export default getInfo;
