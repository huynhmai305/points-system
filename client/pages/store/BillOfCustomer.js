import React, { Component } from 'react';
import { Container, Row, Col,Form, FormGroup,Label, Button} from 'reactstrap';
import ModalForm from '../../components/Modals/ModalAddBill';
import DataTable from '../../components/Tables/Table_Bill_Of_Customer';
import { CSVLink } from 'react-csv';
import Store from '../../components/Store';

class BillOfCustomer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items:[],
            name:'',
            id_user:'',
            username:'',
            birthday:'',
            address:'',
            phone:'',
            email:'',
            point:0
        }
    }
  
    getItems() {
        var query = location.search;
        var id_user = query.substring(9,11)
        this.setState({id_user})
        console.log(this.state.id_user)
        // console.log(this.props.id_user)
        // e.preventDefault();
        let url = 'http://localhost:3000/users/bill/'+id_user;
        fetch(url)
            .then(response => response.json())
            .then(items => {
                this.setState({
                    items,
                    username:items[0].User.username,
                    birthday:items[0].User.birthday,
                    address:items[0].User.address,
                    phone:items[0].User.phone,
                    email:items[0].User.email,
                    point:items[0].User.point
                }); 
                console.log(this.state.username);
            })
            .catch(err => console.log(err))
    }
    // TichDiem = e => {
    //     e.preventDefault()
    //     fetch('http://localhost:3000/users/totalpoint/'+this.state.id_user)
    //     .then(response => response.json())
    //     .then(item => {
    //       var point = item[0].total_point/1000;
    //       this.setState({point});
    //       console.log(this.state.point);
    //       fetch('http://localhost:3000/users/point', {
    //         method: 'PUT',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             id: this.state.id_user,
    //             point: this.state.point
    //         })
    //         })
    //         .then(response => response.json())
    //         .then(item => {
    //             alert(`Tích điểm thành công cho khách hàng ${this.state.username}`);
    //             location.reload()
    //         })            
    //     })   
    //   }
    
    componentDidMount() {
        var info = JSON.parse(localStorage.getItem('user'));
        this.setState({name:info[0].username})
        this.getItems()        
    }
    
    render() {
        return (
            <Store username={this.state.name}>
                <Container className="App">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="/admin">Trang chủ</a>
                        </li>
                        <li className="breadcrumb-item active">Quản lý hóa đơn</li>
                    </ol>
                    <Row className="mb-5">
                        <Col md={{offset:8,size:4}}>
                            <CSVLink
                                filename={"Bill.csv"}
                                color="primary"
                                style={{ float: "left", marginRight: "10px" }}
                                className="btn btn-info"
                                data={this.state.items}
                            >
                                <i className="fas fa-file-csv"> Download CSV</i>
                            </CSVLink>
                            <ModalForm buttonLabel='Add' addItemToState={this.addItemToState} id_user={this.state.id_user} point={this.state.point} username={this.state.username}/>
                        </Col>
                    </Row>           
                    <Form className="align-content-center">
                        <h4 className="text-center">Thông tin tích điểm của khách hàng</h4>
                        <FormGroup row>
                            <Col sm={{offset:2,size:4}}>
                                <Label for="exampleEmail" sm={3}>Họ tên:</Label>
                                <Label sm={9}>{this.state.username}</Label>
                            </Col>
                            <Col sm={6}>
                                <Label for="exampleEmail" sm={3}>Ngày sinh:</Label>
                                <Label sm={9}>{this.state.birthday}</Label>
                            </Col>
                        </FormGroup>
                        <FormGroup row> 
                            <Col sm={{offset:2,size:4}}>
                                <Label for="exampleEmail" sm={3}>Địa chỉ:</Label>
                                <Label sm={9}>{this.state.address}</Label>
                            </Col>
                            <Col sm={6}>
                                <Label for="exampleEmail" sm={3}>Số điện thoại:</Label>
                                <Label sm={9}>{this.state.phone}</Label>
                            </Col>
                        </FormGroup>   
                        <FormGroup row> 
                            <Col sm={{offset:2,size:4}}>
                                <Label for="exampleEmail" sm={3}>Email</Label>
                                <Label sm={9}>{this.state.email}</Label>
                            </Col>
                            <Col sm={6}>
                                <Label for="exampleEmail" sm={3}>Điểm tích lũy:</Label>
                                <Label sm={9}>{this.state.point}</Label>
                            </Col>
                        </FormGroup>                                             
                    </Form>                 
                    <Row>
                        <Col>
                            <DataTable items={this.state.items}  />
                        </Col>
                    </Row>
                    <FormGroup row>
                        <Button color="primary" onClick={this.TichDiem}>Tích điểm</Button>
                    </FormGroup>  
                </Container>
            </Store>
        );
    }
    
}

export default BillOfCustomer;