import React, { Component } from 'react';
import {Card, CardHeader,CardBody,CardText, CardTitle, Alert, Label} from 'reactstrap'

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
    }
    
    TichDiem = e => {
        var quantity = this.state.quantity - 1
        this.setState({quantity}, () => {
            e.preventDefault();
            console.log()
            fetch('http://localhost:3000/users/gift/exchangegift', {
                method: 'PUT',
                // headers: {
                //     'Content-Type': 'application/json'
                // },
                body: JSON.stringify({
                    id: this.state.id,
                    id_user: this.state.id_user,
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
                        this.setState({
                            visible: true,
                        });
                        console.log(item)   
                    })  
                // location.reload()
                })   
            })
        });      
    }
    render() {
        return (
            <div className="p-3">
                <Card className="h-100 thumbnail">
                    <CardHeader>
                        <div className="btn-coupon">
                            <div className="coupon-code float-right">{this.props.id_gift}</div>
                            <div className="coupon-text bg-primary">
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
                <Alert color="success" isOpen={this.state.visible} className="mt-5">
                    <Label>Đổi quà thành công, mã thưởng của "{this.props.title}" là {this.props.id_gift}</Label>
                </Alert>
            </div>
        );
    }
}

export default showGift;