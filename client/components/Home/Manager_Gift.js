import React, { Component } from 'react';
import { Container, Row, Col, FormText } from 'reactstrap';
import ModalForm from '../Modals/ModalGift';
import DataTable from '../Tables/Table_Gift';
import Excel from '../exportTable/XLSX'
import Search from '../Search';
import Admin from '../admin/Admin'

class Manager_Gift extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }
  getItems(keyword) {
    let url = 'http://localhost:3000/users/gift'
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
    var info = JSON.parse(localStorage.getItem('user'))
    this.getItems('')
  }

  render() {
    const header = ["id_gift", "title", "content", "quantity", "point", "User.username", "createdAt"]
    return (
      <Admin title="Quản lý quà đổi thưởng">
        <Container className="App">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/admin">Trang chủ</a>
            </li>
            <li className="breadcrumb-item active">Quản lý quà đổi thưởng</li>
          </ol>
          <Row className="mb-5">
            <Col md={6}>
              <Search handlekeyword={this.onSearch} />
            </Col>
            <Col md={{ offset: 2, size: 4 }}>
              <Excel
                data={this.state.items}
                name="Gift.xlsx"
                header={header}
              />
              {/* <ModalForm buttonLabel='Add' addItemToState={this.addItemToState} /> */}
            </Col>
          </Row>
          <Row>
            <Col>
              <DataTable items={this.state.items} updateState={this.updateState} deleteItemFromState={this.deleteItemFromState} />
            </Col>
          </Row>
        </Container>
      </Admin>
    );
  }
}

export default Manager_Gift;
