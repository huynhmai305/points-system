import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import List from './ReviewListAll';
import ModalForm from './ModalReview';

class ManagerReview extends Component {
  state = {
    items: [],
  }
  getItems() {
    let url = 'http://localhost:3000/users/review';
    fetch(url)
      .then(response => response.json())
      .then(items => this.setState({ items }))
      .catch(err => console.log(err))
  }
  componentDidMount() {
    this.getItems()
  }
  render() {
    console.log(this.state.items)
    return (
      <Container className="App">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/admin">Trang chủ</a>
          </li>
          <li className="breadcrumb-item">
            <a href="/admin/user">Quản lý khách hàng</a>
          </li>
          <li className="breadcrumb-item active">Quản lý bài review</li>
        </ol>
        {/* <Row className="mb-5">
          <Col md={{ offset: 10, size: 3 }}>
            <ModalForm buttonLabel='Add'/>
          </Col>
        </Row> */}
        <Row>
          <Col>
            <List items={this.state.items} type="all"/>
          </Col>
        </Row>
      </Container>
    );
  }

}

export default ManagerReview;
