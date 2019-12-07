import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import DataTable from './Table_List_Set_Point';
import ModalForm from './Modal_Set_Point';
import Excel from '../exportTable/XLSX'

class ManagerPointSetUp extends Component {
  state = {
    items: [],
  }
  getItems() {
    let url = 'http://localhost:3000/users/point_change';
    fetch(url)
      .then(response => response.json())
      .then(items => this.setState({ items }))
      .catch(err => console.log(err))
  }

  componentDidMount() {
    this.getItems('')
  }

  render() {
    const header = ["id", "point_change", "id_store", "createdAt"]
    return (
      <Container className="mt-5">
        <Row className="mb-5">
          <Col md={2} sm={3} xs={4}>
            <Excel
              data={this.state.items}
              name="PointChange.xlsx"
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

export default ManagerPointSetUp;
