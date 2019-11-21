import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ModalForm from '../Modals/Modal';
import DataTable from '../Tables/DataTable_Store';
import Excel from '../exportTable/XLSX'
import Search from '../Search';

class Manager_Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }
  getItems(keyword) {
    let url = 'http://localhost:3000/admin/store';
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
    const header = ["id", "username", "address", "phone", "createdAt"]
    return (
      <div>
        <Container className="App">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/admin">Trang chủ</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Quản lý người dùng</a>
            </li>
            <li className="breadcrumb-item active">Quản lý cửa hàng</li>
          </ol>
          <Row className="mb-5">
            <Col md={6}>
              <Search handlekeyword={this.onSearch} />
            </Col>
            <Col md={3} >
              <Excel
                data={this.state.items}
                name="Store.xlsx"
                header={header}
              />

            </Col>
            <Col md={3} style={{ marginLeft: "-157px" }}>
              <ModalForm buttonLabel='Add' addItemToState={this.addItemToState} />
            </Col>
          </Row>
          <Row>
            <Col>
              <DataTable items={this.state.items} updateState={this.updateState} deleteItemFromState={this.deleteItemFromState} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Manager_Store;
