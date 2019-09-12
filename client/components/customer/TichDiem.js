import React, { Component } from 'react';
import { Container, Row, Col, Label, FormData, FormGroup, Form, Button, Alert, FormText } from 'reactstrap';
import Search from '../Search';
import Layout from '../Customer.js';
import ReadQR from '../QRCode/ReadQR';

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
    updateStorage = () => {
        var info = JSON.parse(localStorage.getItem('user'));
        if (this.state.id === info[0].id) {
            info[0].point = this.state.point;
            localStorage.setItem("user", JSON.stringify(info[0].point));
        }
    }

    getItems(keyword) {
        fetch('http://localhost:3000/users/tichdiem?keyword=' + keyword)
            .then(response => response.json())
            .then(items => this.setState({ items, info: true }))
            .catch(err => this.setState({ msg: 'Không tìm thấy hóa đơn' }))
    }
    onSearch = (keyword) => {
        console.log(keyword);
        this.getItems(keyword)
    }
    TichDiem = e => {
        var point = this.state.items.total / 1000;
        this.setState({
            point,
            visible: true
        });
        console.log(this.state.point);
        e.preventDefault()
        fetch('http://localhost:3000/admin/user', {
            method: 'PUT',
            //   headers: {
            //     'Content-Type': 'application/json'
            //   },
            body: JSON.stringify({
                id: this.state.id,
                point: this.state.point
            })
        })
            .then(response => response.json())
            .then(item => {
                alert(`Chỉnh sửa thành công `);
                this.updateStorage;
                //location.reload()
            })
        //   .catch(err => console.log(err))
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
                        <a href="/store">Trang chủ</a>
                    </li>
                    <li className="breadcrumb-item active">
                        Lấy mã
                    </li>
                </ol>
                <Container >
                    <Row className="mt-5">
                        <Col>
                            <Search handlekeyword={this.onSearch} />
                        </Col>
                        <Col xs="8">
                            <div className="text-danger">
                                {this.state.msg}
                            </div>
                        </Col>
                    </Row>
                    <FormText color="muted">
                        Nhập mã hóa đơn ở đây
                    </FormText>
                    <Alert color="light" className="mt-5" isOpen={this.state.info}>
                        <h4 className="alert-heading">Thông tin hóa đơn</h4>
                        <Form>
                            <FormGroup row>
                                <Label md={2}>Mã hóa đơn:</Label>
                                <Label md={10}>{this.state.items.id}</Label>
                            </FormGroup>
                            <FormGroup row>
                                <Label md={2}>Tên cửa hàng:</Label>
                                <Label md={10}>{this.state.items.id_store}</Label>
                            </FormGroup>
                            <FormGroup row>
                                <Label md={2}>Tiền thanh toán:</Label>
                                <Label md={10}>{this.state.items.total}</Label>
                            </FormGroup>
                            <hr />
                            <Button onClick={this.TichDiem} color="success">Tích điểm</Button>
                            <Alert color="success" isOpen={this.state.visible} className="mt-5">
                                Số điểm được tích lũy là: <Label>{this.state.point}</Label>
                            </Alert>
                        </Form>
                    </Alert>
                    <ReadQR/>
                </Container>
            </Layout>
        )
    }
}
