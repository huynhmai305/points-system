import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import DataTable from './Table_Post_Store';
import ModalForm from './Modal_Post';
import Excel from '../../exportTable/XLSX'

class ManagerPostStore extends Component {
  state = {
    items: [],
    storeId: ''
  }
  getItems() {
    console.log(this.state.storeId)
    let url = 'http://localhost:3000/users/post/'+this.state.storeId;
    fetch(url)
      .then(response => response.json())
      .then(items => {
        console.log('post about store',items)
        this.setState({ items })
      })
      .catch(err => console.log(err))
  }

  componentDidMount() {
    var info = JSON.parse(localStorage.getItem('user'));
    this.setState({
      storeId: info[0].id
    }, () => this.getItems())
  }
  render() {
    const header = ["id", "title", "content", "storeId", "createdAt"]
    return (
      <Container className="App">
        <Row className="mb-5">
          <Col md={2} sm={3} xs={4}>
            <Excel
              data={this.state.items}
              name="Post.xlsx"
              header={header}
            />
          </Col>
          <Col>
            <ModalForm buttonLabel='Add'/>
          </Col>
        </Row>
        <Row>
          <Col>
            <DataTable items={this.state.items}/>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ManagerPostStore;
