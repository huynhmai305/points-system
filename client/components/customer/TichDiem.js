import React, {Component} from 'react';
import { Container, Row, Col, Label, FormData,FormGroup, Form, Button, Alert, FormText} from 'reactstrap';
import Search from '../Search';
import Layout from '../Customer.js'

export default class TichDiem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items:[],
            point:0,
            visible: false,
            info: false,
            username:'',
            msg:''
        }
    }   
    
    getItems(keyword) {
        fetch('http://localhost:3000/users/tichdiem?keyword='+keyword)
            .then(response => response.json())
            .then(items => this.setState({ items, info:true }))
            .catch(err => this.setState({msg:'Không tìm thấy hóa đơn'}))
    }
    onSearch = (keyword) => {
        console.log(keyword);
        this.getItems(keyword)
    }
    TichDiem = e => {
        var point = this.state.items.total/1000;
        this.setState({
            point,
            visible:true
        });
    }
    componentDidMount() {
        var info = JSON.parse(localStorage.getItem('user'));
        this.setState({
            username:info[0].username
        });
    }
    
    render(){
        return(
            <Layout username={this.state.username}>
                <Container >
                    <Row className="mt-5">
                        <Col>
                            <Search handlekeyword={this.onSearch}/>
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
                </Container>
            </Layout>
        )
    }
}