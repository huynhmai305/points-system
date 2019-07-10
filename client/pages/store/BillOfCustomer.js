import React, { Component } from 'react';
import { Container, Row, Col,Form, FormGroup,Label, FormText} from 'reactstrap';
import ModalForm from '../../components/Modals/ModalAddBill';
import DataTable from '../../components/Tables/Table_Bill_Of_Customer';
import { CSVLink } from 'react-csv';
import Search from '../../components/Search';
import Store from '../../components/Store';

class BillOfCustomer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items:[],
            name:'',
            id_user:''
        }
    }
  
    getItems(keyword) {
        var query = location.search;
        var id_user = query.substring(9,11)
        this.setState({id_user})
        console.log(this.state.id_user)
        // console.log(this.props.id_user)
        // e.preventDefault();
        let url = 'http://localhost:3000/users/bill/'+id_user;
        if (keyword.length > 0) {
            url = `${url}?keyword=${keyword}`
        }
        fetch(url)
            .then(response => response.json())
            .then(items => this.setState({items}))
            .catch(err => console.log(err))
    }
    onSearch = (keyword) => {
        console.log(keyword);
        this.getItems(keyword)
    }
    componentDidMount() {
        var info = JSON.parse(localStorage.getItem('user'));
        this.setState({name:info[0].username})
        this.getItems('')        
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
                    {this.state.items.map( (val,key) => {         
                    <Form key={key}>
                        <h4>Thông tin tích điểm của khách hàng</h4>
                        <FormGroup row>
                            <Label for="exampleEmail" sm={2}>Họ tên:</Label>
                            <Label sm={10}>{val.User.username}</Label>
                        </FormGroup>
                        <FormGroup row> 
                            <Label for="exampleEmail" sm={2}>Ngày sinh:</Label>
                            <Label sm={10}>{val.User.birthday}</Label>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="exampleEmail" sm={2}>Địa chỉ:</Label>
                            <Label sm={10}>{val.User.address}</Label>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="exampleEmail" sm={2}>Số điện thoại:</Label>
                            <Label sm={10}>{val.User.phone}</Label>
                        </FormGroup>                           
                        <FormGroup row>
                            <Label for="exampleEmail" sm={2}>Email</Label>
                            <Label sm={10}>{val.User.email}</Label>
                        </FormGroup>                       
                    </Form>
                    })} 
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
                            <ModalForm buttonLabel='Add' addItemToState={this.addItemToState} id_user={this.state.id_user} />
                        </Col>
                    </Row>                    
                    <Row>
                        <Col>
                            <DataTable items={this.state.items}  />
                        </Col>
                    </Row>
                </Container>
            </Store>
        );
    }
    
}

export default BillOfCustomer;