import React, { Component } from 'react';
import {Card, CardHeader,CardBody,CardText, CardTitle, Label,Modal, ModalHeader, ModalBody, ModalFooter,Button} from 'reactstrap'
import QRCode from './QRcode1';

class showGift extends Component {
    constructor(props) {
        super(props);
        this.state ={
            visible: false,
            id: this.props.id,
            id_user: this.props.id_user,
            quantity:this.props.quantity,
            point_gift: this.props.point,
            point_user: this.props.point_user
        }
        this.toggle = this.toggle.bind(this);
    }
    updateStorage() {
        var info = JSON.parse(localStorage.getItem('user'));
        info[0].point = this.state.point_user;
        localStorage.setItem("user", JSON.stringify(info));
    }
    
    TichDiem = e => {
        var quantity = this.state.quantity - 1
        this.setState({quantity}, () => {
            e.preventDefault();
            console.log()
            fetch('http://localhost:3000/users/gift', {
                method: 'PUT',
                // headers: {
                //     'Content-Type': 'application/json'
                // },
                body: JSON.stringify({
                    id: this.state.id,
                    quantity: this.state.quantity    
                })
            })
            .then(response => response.json())
            .then(item => {
                console.log(this.state.point_user)
                var point_user = this.state.point_user - this.state.point_gift
                console.log(point_user)    
                this.setState({point_user}, () => {
                    console.log(this.state.id_user)
                    e.preventDefault()
                    fetch('http://localhost:3000/users/point', {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            id: this.state.id_user,
                            point: this.state.point_user
                        })
                    })
                    .then(response => response.json())
                    .then(item => {
                        console.log(this.state.id_user+this.props.id_gift)
                        fetch('http://localhost:3000/users/exchange_gift',{
                            method:'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                id_user: this.state.id_user,
                                id_gift: this.props.id_gift  
                            })
                        })
                        .then(() => {
                            this.setState({
                            visible: true
                            });
                            this.updateStorage();
                        })
                        // .catch(err => console.log(err))
                        // console.log(item);
                    })  
                // location.reload()
                })   
            })
        });      
    }  
    toggle() {
        this.setState(prevState => ({
          visible: !prevState.visible
        }));
      }
    render() {
        return (
            <div className="p-3">
                <Card className="h-100 thumbnail">
                    <CardHeader>
                        <div className="btn-coupon">
                            <div className="coupon-code float-right">{this.props.id_gift}</div>
                            <div className="coupon-text">
                                <a onClick={this.TichDiem}>Lấy mã</a>
                            </div>
                        </div>
                    </CardHeader>
                    <CardBody className="bg-info text-light">
                        <CardTitle>{this.props.title}</CardTitle>
                        <CardText>{this.props.content}</CardText>
                        <CardText>Điểm đổi: {this.state.point_gift}</CardText>
                        <CardText>Số lượng: {this.state.quantity}</CardText>
                    </CardBody>
                </Card>
                <Modal isOpen={this.state.visible} fade={false} toggle={this.toggle} className="">
                    <ModalHeader toggle={this.toggle}>Nhận mã code</ModalHeader>
                    <ModalBody>
                        <Label>Đổi quà thành công, đây là mã thưởng của "{this.props.title}", download để sử dụng</Label>
                        <div>
                            <QRCode data={this.props.id_gift}/>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Close</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default showGift;