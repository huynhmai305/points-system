import React, { Component } from 'react';
import { Container, Row, Col,FormText } from 'reactstrap';
import ModalForm from '../Modals/ModalGift';
import DataTable from '../Tables/Table_Gift';
import { CSVLink } from 'react-csv';
import Search from '../Search';
import Admin from '../admin/Admin'

class Manager_Gift extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            id_getData:0
        }
    }
    getItems(keyword) {
        let url = 'http://localhost:3000/users/gift/';
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
        var info = JSON.parse(localStorage.getItem('user'))
        this.setState({id_getData:info[0].id})
        this.getItems('')
    }

    render() {
        return (
            <Admin title="Quản lý quà đổi thưởng">
                <Container className="App">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="/admin">Trang chủ</a>
                        </li>
                        <li className="breadcrumb-item active">Quản lý quà đổi thưởng</li>
                    </ol>
                    <Row className="mb-5">
                        <Col md={6}>
                            <Search handlekeyword={this.onSearch}/>
                        </Col>
                        <Col md={{offset:3,size:3}}>
                            <CSVLink
                                filename={"dbGift.csv"}
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
            </Admin>
        );
    }
}

export default Manager_Gift;