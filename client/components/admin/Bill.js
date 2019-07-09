import React, { Component } from 'react';
import { Container, Row, Col,FormText, FormGroup, Label, Input } from 'reactstrap';
import DataTable from '../Tables/Table_Bill';
import { CSVLink } from 'react-csv';
import Search from '../Search';
import Admin from './Admin.js';

class Manager_Bill extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }
    getItems(keyword) {
        let url = 'http://localhost:3000/users/bill';
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
            <Admin title="Quản lý hóa đơn">
                <Container className="App">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="/admin">Trang chủ</a>
                        </li>
                        <li className="breadcrumb-item active">Quản lý hóa đơn</li>
                    </ol>
                    <Row className="mb-5">
                        <Col md={6}>
                            {/*<FormGroup>
                                <Label for="exampleSelect">Chọn cửa hàng</Label>
                                <Input type="select" name="select" id="exampleSelect">
                                    <option value="AZT">AZTea</option>
                                    <option></option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Input>
                            </FormGroup>*/}
                            <Search handlekeyword={this.onSearch}/>
                            <FormText>Nhập mã hóa đơn cửa hàng tìm kiếm</FormText>
                        </Col>
                        <Col md={{offset:4,size:2}}>
                            <CSVLink
                                filename={"Bill.csv"}
                                color="primary"
                                style={{ float: "left", marginRight: "10px" }}
                                className="btn btn-info"
                                data={this.state.items}
                            >
                                <i className="fas fa-file-csv"> Download CSV</i>
                            </CSVLink>
                        </Col>
                    </Row>                    
                    <Row>
                        <Col>
                            <DataTable items={this.state.items}  />
                        </Col>
                    </Row>
                </Container>
            </Admin>
        );
    }
}

export default Manager_Bill;