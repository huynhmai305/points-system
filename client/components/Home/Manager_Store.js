import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ModalForm from '../Modals/Modal';
import DataTable from '../Tables/DataTable';
import { CSVLink } from 'react-csv';
import Search from '../Search';

class Manager_Store extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }
    getItems(keyword) {
        let url = 'http://localhost:3000/admin/store';
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
        this.getItems(keyword)
      }
    componentDidMount() {
        this.getItems('')
    }

    render() {
        return (
            <div>
                <Container className="App">
                    <Row>
                        <Col>
                            <Search handlekeyword={this.onSearch}/>
                        </Col>
                    </Row>
                    <Row style={{marginBottom: '5%',marginTop: '5%'}}>
                        <Col>
                            <CSVLink
                                filename={"dbStore.csv"}
                                color="primary"
                                style={{ float: "left", marginRight: "10px" }}
                                className="btn btn-primary"
                                data={this.state.items}
                            >
                                <i className="fas fa-file-csv"> Download CSV</i>
                            </CSVLink>
                            <ModalForm buttonLabel='Add' addItemToState={this.addItemToState} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <DataTable items={this.state.items} updateState={this.updateState} deleteItemFromState={this.deleteItemFromState} />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Manager_Store;