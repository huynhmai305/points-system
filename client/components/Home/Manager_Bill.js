import React, { Component } from 'react';
import { Container, Row, Col, FormText } from 'reactstrap';
import ModalForm from '../Modals/ModalAddBill';
import DataTable from '../Tables/Table_Bill';
import Excel from '../exportTable/XLSX';
import Search from '../Search';

class Manager_Bill extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }
  getItems(keyword) {
    let url = 'http://localhost:3000/users/bill/';
    if (keyword.length > 0) {
      url = `${url}?keyword=${keyword}`
    }
    fetch(url)
      .then(response => response.json())
      .then(items => this.setState({ items }))
      .catch(err => console.log(err))
  }
  onSearch = (keyword) => {
    console.log(keyword);
    this.getItems(keyword)
  }
  componentDidMount() {
    this.getItems('')
  }

  render() {
    const header = ["id", "total", "id_user", "User.username", "id_store", "createdAt"]
    return (
      <div>
        <Container className="App">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/admin">Trang chủ</a>
            </li>
            <li className="breadcrumb-item active">Quản lý hóa đơn</li>
          </ol>
          <Row className="mb-5">
            {/* <Col md={4}>
              <Search handlekeyword={this.onSearch} />
              <FormText>Nhập mã hóa đơn tìm kiếm</FormText>
            </Col> */}
            <Col md={2} sm={3} xs={4}>
              <Excel
                data={this.state.items}
                name="Bill.xlsx"
                header={header}
              />
            </Col>
            <Col>
              <ModalForm buttonLabel='Add' addItemToState={this.addItemToState} />
            </Col>
          </Row>
          <Row>
            <Col>
              <DataTable items={this.state.items} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Manager_Bill;
