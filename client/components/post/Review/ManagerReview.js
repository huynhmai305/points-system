import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import List from './ReviewList';
import ModalForm from './ModalReview';

class ManagerReview extends Component {
  state = {
    items: [],
  }
  getItems(keyword) {
    let url = 'http://localhost:3000/users/review';
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
    keyword.toLowerCase();
    this.getItems(keyword)
  }
  componentDidMount() {
    this.getItems('')
  }
  render() {
    return (
      <Container className="App">
        {/* <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/admin">Trang chủ</a>
          </li>
          <li className="breadcrumb-item">
            <a href="/admin/store">Quản lý khách hàng</a>
          </li>
          <li className="breadcrumb-item active">Quản lý bài viết</li>
        </ol> */}
        <Row className="mb-5">
          <Col md={{ offset: 3, size: 3 }}>
            <ModalForm buttonLabel='Add'/>
          </Col>
        </Row>
        <Row>
          <Col>
            <List items={this.state.items}/>
          </Col>
        </Row>
      </Container>
    );
  }

}

export default ManagerReview;
