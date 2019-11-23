import React, { Component } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Button } from 'reactstrap';
import ModalForm from '../../components/Modals/ModalAddBill';
import DataTable from '../../components/Tables/Table_Bill_Of_Customer';
import Excel from '../../components/exportTable/XLSX';
import Store from '../../components/Store';
import { useRouter } from 'next/router'

class BillOfCustomer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      info:[],
      name: '',
      id_user: this.props.id_user,
      username: '',
      birthday: '',
      address: '',
      phone: '',
      email: '',
      point: 0,
      image: ''
    }
  }

  getItems() {
    fetch('http://localhost:3000/getInfoById/' + this.props.id_user)
    .then(res => res.json())
    .then( info => this.setState({info}))
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

  componentDidMount() {
    var info = JSON.parse(localStorage.getItem('user'));
    this.setState({ name: info[0].username, image: info[0].picture })
    this.getItems()
  }

  render() {
    const header = ["id", "total", "createdAt"]
    return (
      <Store username={this.state.name} image={this.state.image}>
        <Container className="App">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/store">Trang chủ</a>
            </li>
            <li className="breadcrumb-item active">Quản lý hóa đơn</li>
          </ol>
          <Row className="mb-5">
            <Col md={2}>
              <Excel
                data={this.state.items}
                name="Bill.xlsx"
                header={header}
              />
              </Col>
              <Col>
              <ModalForm buttonLabel='Add' addItemToState={this.addItemToState} id_user={this.state.id_user} point={this.state.point} username={this.state.username} />
            </Col>
          </Row>
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
                <Label sm={9}>{item.birthday}</Label>
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
