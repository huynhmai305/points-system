import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import DataTable from '../Tables/DataTable';
import { CSVLink } from 'react-csv';
import Search from '../Search';


class Home extends Component{
  state = {
    items: [],
  }
  getItems(keyword){
    let url = 'http://localhost:3000/admin/user';
    if(keyword.length>0){
      url = `${url}?keyword=${keyword}`
    }
    fetch(url)
    .then(response => response.json())
    .then(items => this.setState({items}))
    .catch(err => console.log(err))
  }
  addItemToState = (item) => {
    fetch('http://localhost:3000/admin/user')
    this.setState(prevState => ({
      items: [...prevState.items,item]
    }))
  }
  updateState = (item) => {
    const itemIndex = this.state.items.findIndex(data => data.id ===item.id)
    const newArray = [
      ...this.state.items.slice(0, itemIndex),
      item,
      ...this.state.items.slice(itemIndex + 1)
    ]
    this.setState({items: newArray})
  }
  deleteItemFromState = (id) => {
    const updatedItems = this.state.items.filter(item => item.id !== id)
    this.setState.items({items: updatedItems})
  }
  onSearch = (keyword) => {
    console.log(keyword);
     keyword.toLowerCase();
    this.getItems(keyword)
  }
  componentDidMount() {
    this.getItems('')
  }
  render(){
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
          <Col md={6}>
            <Search handlekeyword={this.onSearch}/>
          </Col>
          <Col md={{offset:4,size:2}}>
            <CSVLink
              filename={"dbUser.csv"}
              color="primary"
              style={{float: "left", marginRight: "10px"}}
              className="btn btn-info"
              data={this.state.items}
            >
              <i className="fas fa-file-csv"> Download CSV</i>
            </CSVLink>
            
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
