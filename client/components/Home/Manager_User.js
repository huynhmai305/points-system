import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ModalForm from '../Modals/Modal';
import DataTable from '../Tables/DataTable';
import { CSVLink } from 'react-csv';


class Home extends Component{
  state = {
    items: []
  }
  getItems(){
    fetch('http://localhost:3000/admin/user')
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
  componentDidMount() {
    this.getItems()
  }
  render(){
    return (
      <Container className="App">
        <Row>
          <Col>
            <h1 style={{margin: "20px 0"}}>CRUD Database</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <DataTable items={this.state.items} updateState={this.updateState} deleteItemFromState={this.deleteItemFromState} />
          </Col>
        </Row>
        <Row>
          <Col>
            <CSVLink
              filename={"db.csv"}
              color="primary"
              style={{float: "left", marginRight: "10px"}}
              className="btn btn-primary"
              data={this.state.items}>
              Download CSV
            </CSVLink>
            
          </Col>
        </Row>
      </Container>
    );
  }
 
}

export default Home;
