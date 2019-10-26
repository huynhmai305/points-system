import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import DataTable from '../Tables/DataCustomer';
import { CSVLink } from 'react-csv';
import {Icon} from 'antd'
import Search from '../Search';
import Layout from '../Store';
import QuetMa from './TichDiem'

class Manager_Store extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            id: '',
            name:'',
            image:''
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
        this.setState({
            id: info[0].id, 
            name:info[0].username,
            image:info[0].picture
        })
        this.getItems('')
    }

    render() {
        return (
            <Layout username={this.state.name} image={this.state.image}>
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
                        <Col md={{offset:2,size:4}}>
                            <CSVLink
                                filename={"dbStore.csv"}
                                color="primary"
                                style={{ float: "left", marginRight: "10px" }}
                                className="btn btn-info"
                                data={this.state.items}
                            >
                                <i className="fas fa-file-csv"> Download CSV</i>
                            </CSVLink>
                            <QuetMa handleData={this.onSearch}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <DataTable items={this.state.items}/>
                        </Col>
                    </Row>
                </Container>
            </Layout>
        );
    }
}

export default Manager_Store;