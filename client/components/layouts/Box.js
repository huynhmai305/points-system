import React, { Component } from 'react';

class Box extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-lg-3 col-6">
                        {/* small box */}
                        <div className="small-box bg-info">
                            <div className="inner">
                                <h3>150</h3>
                                <p>Giao dịch</p>
                            </div>
                            <div className="icon">
                                <i className="ion ion-bag" />
                            </div>
                            <a href="#" className="small-box-footer">Xem thêm <i className="fas fa-arrow-circle-right" /></a>
                        </div>
                    </div>
                    {/* ./col */}
                    <div className="col-lg-3 col-6">
                        {/* small box */}
                        <div className="small-box bg-success">
                            <div className="inner">
                                <h3>53<sup style={{ fontSize: '20px' }}>%</sup></h3>
                                <p>Bài viết</p>
                            </div>
                            <div className="icon">
                                <i className="ion ion-stats-bars" />
                            </div>
                            <a href="#" className="small-box-footer">Xem thêm <i className="fas fa-arrow-circle-right" /></a>
                        </div>
                    </div>
                    {/* ./col */}
                    <div className="col-lg-3 col-6">
                        {/* small box */}
                        <div className="small-box bg-warning">
                            <div className="inner">
                                <h3>44</h3>
                                <p>Khách hàng đăng ký</p>
                            </div>
                            <div className="icon">
                                <i className="ion ion-person-add" />
                            </div>
                            <a href="#" className="small-box-footer">Xem thêm <i className="fas fa-arrow-circle-right" /></a>
                        </div>
                    </div>
                    {/* ./col */}
                    <div className="col-lg-3 col-6">
                        {/* small box */}
                        <div className="small-box bg-danger">
                            <div className="inner">
                                <h3>65</h3>
                                <p>Doanh thu</p>
                            </div>
                            <div className="icon">
                                <i className="ion ion-pie-graph" />
                            </div>
                            <a href="#" className="small-box-footer">Xem thêm <i className="fas fa-arrow-circle-right" /></a>
                        </div>
                    </div>
                    {/* ./col */}
                </div>
            </div>
        );
    }
}

export default Box;
