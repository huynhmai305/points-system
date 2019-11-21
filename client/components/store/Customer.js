import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import DataTable from '../Tables/DataCustomer';
import Search from '../Search';
import Layout from '../Store';
import QuetMa from './TichDiem'

class Manager_Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      id: '',
      name: '',
      image: '',
      show: false
    }
  }

  getItems(keyword) {
    let url = `http://localhost:3000/getinfo/${keyword}`;
    console.log(url)
    fetch(url)
      .then(response => response.json())
      .then(items => {
        items.length == 0 ? this.setState({ msgErr: 'Không tìm thấy kết quả phù hợp' }) : this.setState({ items, show: true })
        console.log(items)
      })
      .catch(err => {
        console.log(err);
        this.setState({ msgErr: 'Không tìm thấy kết quả phù hợp' })
      })
  }
  onSearch = (keyword) => {
    console.log(keyword);
    this.getItems(keyword)
  }
  componentDidMount() {
    var info = JSON.parse(localStorage.getItem('user'));
    this.setState({
      id: info[0].id,
      name: info[0].username,
      image: info[0].picture
    })
  }

  render() {
    return (
      <Layout username={this.state.name} image={this.state.image}>
        <Container className="App">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/admin">Trang chủ</a>
            </li>
            <li className="breadcrumb-item active">Tích điểm khách hàng</li>
          </ol>
          <Row className="mb-5">
            <Col md={4}>
              <Search handlekeyword={this.onSearch} />
              <p className="text-muted mt-2">Nhập thông tin tìm kiếm khách hàng</p>
            </Col>
            <Col>
              <QuetMa handleData={this.onSearch} />
            </Col>
          </Row>
          <Row>
            <Col>
              {this.state.show == true ? <DataTable items={this.state.items} /> : this.state.msgErr}
            </Col>
          </Row>
        </Container>
      </Layout>
    );
  }
}

export default Manager_Store;
