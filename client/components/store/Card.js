import React, { Component } from 'react';

class Card extends Component {
    render() {
        return (
            <div className="row" >
                <div className="offset-md-1 col-5 mt-5 mb-4">
                    <div className="card border-success">
                        <div className="clearfix">
                            <i className="fa fa-edit float-right text-success" />
                        </div>
                        <div className="card-body">
                            <h4 className="card-title text-success">132</h4>
                            <p className="card-text">Bài review</p>
                            <div className="progress">
                                <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" style={{ width: '40%' }} aria-valuenow={40} aria-valuemin={0} aria-valuemax={100}>40%</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" col-5 mt-5 mb-4">
                    <div className="card border-danger">
                        <div className="clearfix">
                            <i className="fa fa-bar-chart float-right text-danger" />
                        </div>
                        <div className="card-body">
                            <h4 className="card-title text-danger">$ 9623</h4>
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