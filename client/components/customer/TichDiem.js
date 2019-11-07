import React, { Component } from 'react';
import { Container, Row, Col, Label, FormData, FormGroup, Form, Button, Alert, FormText } from 'reactstrap';
import Search from '../Search';
import Layout from '../Customer.js';
import ReadQR from '../QRCode/ReadQR';
import FormAddBill from '../Forms/FormAddBill'

export default class TichDiem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            point: 0,
            visible: false,
            info: false,
            username: '',
            msg: '',
            id: 0
        }
    }

    onSearch = (data) => {
        console.log(data);
        this.setState({data, info: true})
    }

    componentDidMount() {
        var info = JSON.parse(localStorage.getItem('user'));
        this.setState({
            username: info[0].username,
            id: info[0].id,
            image: info[0].picture
        });
    }

    render() {
        return (
            <Layout username={this.state.username} image={this.state.image}>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <a href="/user">Trang chủ</a>
                    </li>
                    <li className="breadcrumb-item active">
                        Tích điểm
                    </li>
                </ol>
                <Container >
                    <Row className="mt-5">
                        <Col xs="12" sm="12" md="12">
                            <Col xs="12" sm="6" md="6">
                                <ReadQR handleData={this.onSearch}/><br/>
                                <div className="text-danger">
                                    {this.state.msg}
                                </div>
                            </Col>
                            <Col xs="12" sm="6" md="6">
                                <Alert color="light" className="mt-5" isOpen={this.state.info}>
                                    <h4 className="alert-heading">Thông tin hóa đơn</h4>
                                    <FormAddBill id_user={this.state.id} item={this.state.data}/>
                                </Alert>
                            </Col>
                        </Col>                       
                    </Row>
                </Container>
            </Layout>
        )
    }
}
