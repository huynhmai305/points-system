import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import DataTable from '../Tables/Table_Bill';
import Excel from '../exportTable/XLSX'
import Layout from '../Store';

class Manager_Bill extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }
  getItems(keyword) {
    let url = 'http://localhost:3000/users/bill';
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
    var info = JSON.parse(localStorage.getItem('user'));
    console.log(info)
    this.setState({
      id: info[0].id,
      name: info[0].username,
      image: info[0].picture
    })
    this.getItems('')
  }

  render() {
    const header = ["id", "total", "id_user", "User.username", "id_store", "createdAt"]
    return (
      <Layout username={this.state.name} image={this.state.image}>
        <Container className="App">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/store">Trang chủ</a>
            </li>
            <li className="breadcrumb-item active">Quản lý hóa đơn</li>
          </ol>
          <Row className="mb-5">
            <Col md={2} sm={3} xs={4}>
              <Excel
                data={this.state.items}
                name="Bill.xlsx"
                header={header}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <DataTable items={this.state.items} />
            </Col>
          </Row>
        </Container>
      </Layout>
    );
  }
}

export default Manager_Bill;
