import React, { Component } from 'react';
import { Container, Row, Col,FormText } from 'reactstrap';
import ModalForm from '../Modals/ModalAddBill';
import DataTable from '../Tables/Table_Bill';
import { CSVLink } from 'react-csv';
import Search from '../Search';

class Manager_Bill extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }
    getItems(keyword) {
        console.log(this.props.id_user)
        // console.log(this.props.id_user)
        let url = 'http://localhost:3000/users/bill/'+this.props.id_user;
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
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="/admin">Trang chủ</a>
                        </li>
                        <li className="breadcrumb-item active">Quản lý hóa đơn</li>
                    </ol>
                    <Row>
                    <label >Tên khách hàng:</label>
                    <label></label> <br/>
                    <label >Địa chỉ:</label>
                    <label></label> <br/>
                    <label >Số điện thoại:</label>
                    <label></label> <br/>
                    <label >Số điểm tính lũy:</label>
                    <label></label> <br/>
                    </Row>
                    <Row className="mb-5">
                        <Col md={6}>
                            <Search handlekeyword={this.onSearch}/>
                            <FormText>Nhập mã hóa đơn tìm kiếm</FormText>
                        </Col>
                        <Col md={{offset:2,size:4}}>
                            <CSVLink
                                filename={"Bill.csv"}
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
                            <DataTable items={this.state.items}  />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Manager_Bill;