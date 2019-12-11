import React, { Component } from 'react';
import NumberFormat from 'react-number-format';
import { FaUserFriends, FaExchangeAlt, FaMoneyBillAlt } from 'react-icons/fa'

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      bill: 0,
      money: 0,
      members: 0
    }
  }
  countBill() {
    fetch('http://localhost:3000/countbills')
      .then(response => response.json())
      .then(item => this.setState({ bill: item[0].total_bills }))
  }
  countMembers() {
    fetch('http://localhost:3000/countmembers')
      .then(response => response.json())
      .then(item => this.setState({ members: item[0].total_members }))
  }
  getTotal() {
    fetch('http://localhost:3000/alltotalmoney')
      .then(response => response.json())
      .then(item => { this.setState({ money: item[0].total_money }) })
  }
  componentDidMount() {
    this.getTotal();
    this.countBill();
    this.countMembers();
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="dbox dbox--color-1">
              <div className="dbox__icon">
                <FaUserFriends className="fa-2x text-light ml-1 mt-1"/>
              </div>
              <div className="dbox__body">
                <span className="dbox__count">{this.state.members}</span>
                <h5 className="dbox__title">Khách hàng tham gia</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="dbox dbox--color-2">
              <div className="dbox__icon">
                <FaExchangeAlt className="fa-2x text-light ml-1 mt-1"/>
              </div>
              <div className="dbox__body">
                <span className="dbox__count">{this.state.bill}</span>
                <h5 className="dbox__title">Hóa đơn được tích điểm</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="dbox dbox--color-3">
              <div className="dbox__icon">
                <FaMoneyBillAlt className="fa-2x text-light ml-1 mt-1"/>
              </div>
              <div className="dbox__body">
                <span className="dbox__count">
                  <NumberFormat value={this.state.money} displayType={'text'} thousandSeparator={true} suffix={' đ'}/>
                </span>
                <h5 className="dbox__title">Doanh thu</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
