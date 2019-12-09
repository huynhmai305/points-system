import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import DataTable from '../Tables/DataTable';
import ModalForm from '../Modals/Modal';
import Excel from '../exportTable/XLSX'
import Search from '../Search';


class Home extends Component {
  state = {
    items: [],
  }
  getItems(keyword) {
    let url = 'http://localhost:3000/admin/user';
    if (keyword.length > 0) {
      url = `${url}?keyword=${keyword}`
    }
    fetch(url)
      .then(response => response.json())
      .then(items => this.setState({ items },() =>{
      }))
      .catch(err => console.log(err))
  }
  addItemToState = (item) => {
    fetch('http://localhost:3000/admin/user')
    this.setState(prevState => ({
      items: [...prevState.items, item]
    }))
  }
  updateState = (item) => {
    const itemIndex = this.state.items.findIndex(data => data.id === item.id)
    const newArray = [
      ...this.state.items.slice(0, itemIndex),
      item,
      ...this.state.items.slice(itemIndex + 1)
    ]
    this.setState({ items: newArray })
  }
  deleteItemFromState = (id) => {
    const updatedItems = this.state.items.filter(item => item.id !== id)
    this.setState.items({ items: updatedItems })
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
    const header = ["id","username","birthday","address","email","phone","point","createdAt"];
    return (
      <Container className="App">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/admin">Trang chủ</a>
          </li>
          <li className="breadcrumb-item">
            <a href="#">Quản lý người dùng</a>
          </li>
          <li className="breadcrumb-item active">Quản lý khách hàng</li>
        </ol>
        <Row className="mb-5">
          <Col md={2} sm={3} xs={4}> 
            <Excel 
              data={this.state.items}
              name="User.xlsx"
              header={header}
            />
          </Col>
          <Col>
            <ModalForm buttonLabel='Add' addItemToState={this.addItemToState}/>
          </Col>
        </Row>
        <Row>
          <Col>
            <DataTable items={this.state.items} updateState={this.updateState} deleteItemFromState={this.deleteItemFromState} />
          </Col>
        </Row>
      </Container>
    );
  }

}

export default Home;
