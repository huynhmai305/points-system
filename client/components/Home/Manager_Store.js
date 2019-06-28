import React, { Component } from 'react';
import { Container, Row, Col, Input } from 'reactstrap';
import ModalForm from '../Modals/Modal';
import DataTable from '../Tables/DataTable';
import { CSVLink } from 'react-csv';

class Manager_Store extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            filterStr: ''
        }
    }
    getItems() {
        fetch('http://localhost:3000/admin/store')
            .then(response => response.json())
            .then(items => this.setState({ items }))
            .catch(err => console.log(err))
    }
    componentDidMount() {
        this.getItems()
    }


    render() {
        return (
            <div>
                <Container className="App">
                    <Row>
                        <Col>
                            <h1 style={{ margin: "20px 0" }}>CRUD Database</h1>
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
                                style={{ float: "left", marginRight: "10px" }}
                                className="btn btn-primary"
                                data={this.state.items}>
                                Download CSV
                            </CSVLink>
                            <ModalForm buttonLabel="Add Item" addItemToState={this.addItemToState} />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Manager_Store;