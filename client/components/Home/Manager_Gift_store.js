import React, { Component } from 'react';
import { Container, Row, Col, FormText } from 'reactstrap';
import ModalForm from '../Modals/ModalGift';
import DataTable from '../Tables/Table_Gift_Store';
import Excel from '../exportTable/XLSX'
import Search from '../Search';
import Store from '../Store'

class Manager_Gift_Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      id_store: '',
      name: '',
      image: ''
    }
  }
  getItems(keyword) {
    let url = 'http://localhost:3000/users/giftstore/' + this.state.id_store
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
    this.setState({
      id_store: info[0].id,
      name: info[0].username,
      image: info[0].picture
    }, () => this.getItems(''))
  }

  render() {
    const header = ["id_gift", "title", "content", "quantity", "point", "createdAt"]
    return (
      <Store username={this.state.name} image={this.state.image}>
        <Container className="App">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/admin">Trang chủ</a>
            </li>
            <li className="breadcrumb-item active">Quản lý quà đổi thưởng</li>
          </ol>
          <Row className="mb-5">
            {/* <Col md={6}>
              <Search handlekeyword={this.onSearch} />
            </Col> */}
            <Col md={2}>
              <Excel
                data={this.state.items}
                name="Gift.xlsx"
                header={header}
              />
            </Col>
            <Col>
              <ModalForm buttonLabel='Add' addItemToState={this.addItemToState} />
            </Col>
          </Row>
          <Row>
            <Col>
              <DataTable items={this.state.items} updateState={this.updateState} deleteItemFromState={this.deleteItemFromState} />
            </Col>
          </Row>
        </Container>
      </Store>
    );
  }
}

export default Manager_Gift_Store;
