import React, { Component } from 'react';
import NumberFormat from 'react-number-format';
import {FaExchangeAlt, FaMoneyBillAlt} from 'react-icons/fa'

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      total: 0,
      bill: 0
    }
  }
  countBill() {
    fetch('http://localhost:3000/countbills/'+ this.state.id)
      .then(response => response.json())
      .then(item => this.setState({ bill: item[0].total_bills }))
  }
  getTotal() {
    fetch('http://localhost:3000/totalmoney/' + this.state.id)
      .then(response => response.json())
      .then(item => {
        if (item.length != 0) {
          this.setState({ total: item[0].total_money});
        }
      })
  }
  componentDidMount() {
    let info = JSON.parse(localStorage.getItem('user'))
    this.setState({ id: info[0].id }, () => {
      this.getTotal();
      this.countBill();
    })
  }
  render() {
    return (
      <div className="row">
        <div className="offset-md-1 col-5 mt-5 mb-4">
          <div className="card border-success">
            <div className="clearfix">
              <FaExchangeAlt className="float-right text-success fa-2x mr-1"/>
            </div>
            <div className="card-body">
              <h4 className="card-title text-success">{this.state.bill}</h4>
              <p className="card-text">Giao dịch</p>
              <div className="progress">
                <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" style={{ width: '40%' }} aria-valuenow={40} aria-valuemin={0} aria-valuemax={100}>40%</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-5 mt-5 mb-4">
          <div className="card border-danger">
            <div className="clearfix">
              <FaMoneyBillAlt className="float-right text-danger fa-2x mr-1"/>
            </div>
            <div className="card-body">
              <h4 className="card-title text-danger">
                <NumberFormat value={this.state.total} displayType={'text'} thousandSeparator={true} suffix={' đ'} />
              </h4>
              <p className="card-text">Doanh thu</p>
              <div className="progress">
                <div className="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar" style={{ width: '25%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>25%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
