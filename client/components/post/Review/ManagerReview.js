import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import List from './ReviewListAll';
import ModalForm from './ModalReview';

class ManagerReview extends Component {
  state = {
    items: [],
    storename: [],
    store: {}
  }
  getItems() {
    let url = 'http://localhost:3000/users/review';
    fetch(url)
      .then(response => response.json())
      .then(items => this.setState({ items }))
      .catch(err => console.log(err))
  }

  getStoreName() {
    fetch('http://localhost:3000/users/optionstore')
    .then(rs => rs.json())
    .then(item => {
      item.map(val => {
        const it = {}
        const key = val.id
        it[key] = val.username
        this.state.storename.push(it)
      })
      console.log('store name',this.state.storename)
      const storename = this.state.storename.reduce(function(acc, x) {
        for (var key in x) acc[key] = x[key];
        return acc;
      }, {});
      console.log('acc',storename)
      this.setState({store: storename}, () => console.log('store',this.state.store))
    })
  }

  componentDidMount() {
    this.getItems()
    this.getStoreName()
  }
  render() {
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
            <List items={this.state.items} type="all" storename={this.state.store}/>
          </Col>
        </Row>
      </Container>
    );
  }

}

export default ManagerReview;
