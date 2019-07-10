import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ModalForm from '../Modals/Modal';
import DataTable from '../Tables/DataCustomer';
import { CSVLink } from 'react-csv';
import Search from '../Search';
import Layout from '../Store'

class Manager_Store extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            id: '',
            name:''
        }
    }
    getItems(keyword) {
        let url = 'http://localhost:3000/admin/user';
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
        var info = JSON.parse(localStorage.getItem('user'));
        this.setState({id: info[0].id, name:info[0].username})
        this.getItems('')
    }

    render() {
        return (
            <Layout username={this.state.name}>
                <Container className="App">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="/admin">Trang chủ</a>
                        </li>
                        <li className="breadcrumb-item active">Quản lý khách hàng</li>
                    </ol>
                    <Row className="mb-5">
                        <Col md={6}>
                            <Search handlekeyword={this.onSearch}/>
                        </Col>
                        <Col md={{offset:3,size:3}}>
                            <CSVLink
                                filename={"dbStore.csv"}
                                color="primary"
                                style={{ float: "left", marginRight: "10px" }}
                                className="btn btn-info"
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
            </Layout>
        );
    }
}

export default Manager_Store;