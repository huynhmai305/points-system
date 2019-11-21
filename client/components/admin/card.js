import React, { Component } from 'react';
import NumberFormat from 'react-number-format';
import {FaUserFriends, FaExchangeAlt, FaMoneyBillAlt} from 'react-icons/fa'

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:'',
            bill:0,
            money:0,
            members:0
        }
    }
    countBill(){
        fetch('http://localhost:3000/countbills')
        .then(response => response.json())
        .then(item => this.setState({bill:item[0].total_bills}))
    }
    countMembers(){
        fetch('http://localhost:3000/countmembers')
        .then(response => response.json())
        .then(item => this.setState({members:item[0].total_members}))
    }
    getTotal(){
        fetch('http://localhost:3000/alltotalmoney')
        .then(response => response.json())
        .then(item => {this.setState({money:item[0].total_money})})
    }
    componentDidMount() {
        this.getTotal();
        this.countBill();
        this.countMembers();
    }
    render() {
        return (
            <div className="row background">
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 mb-4">
                    <div className="card border-success">
                        <div className="clearfix">
                            <FaUserFriends className="float-right text-success fa-2x mr-1"/>
                        </div>
                        <div className="card-body">
                            <h4 className="card-title text-success">{this.state.members}</h4>
                            <p className="card-text">Người tham gia</p>
                            <div className="progress">
                                <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" style={{ width: '50%' }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>50%</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 mb-4">
                    <div className="card border-info">
                        <div className="clearfix">
                            <FaExchangeAlt className="float-right text-info fa-2x mr-1"/>
                        </div>
                        <div className="card-body">
                            <h4 className="card-title text-info">{this.state.bill}</h4>
                            <p className="card-text">Giao dịch</p>
                            <div className="progress">
                                <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar" style={{ width: '40%' }} aria-valuenow={40} aria-valuemin={0} aria-valuemax={100}>40%</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 mb-4">
                    <div className="card border-danger">
                        <div className="clearfix">
                            <FaMoneyBillAlt className="float-right text-danger fa-2x mr-1"/>
                        </div>
                        <div className="card-body">
                            <h4 className="card-title text-danger">
                                <NumberFormat value={this.state.money} displayType={'text'} thousandSeparator={true} suffix={' đ'} />
                            </h4>
                            <p className="card-text">Doanh thu</p>
                            <div className="progress">
                                <div className="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar" style={{ width: '65%' }} aria-valuenow={65} aria-valuemin={0} aria-valuemax={100}>65%</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;
