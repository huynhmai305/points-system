import React, { Component } from 'react';

class Card extends Component {
    render() {
        return (
            <div className="row " id="post-store">
                <div className="col-4">
                    <div className="card">
                        <img className="card-img-top" src="/static/images/logo_MinHouse.png" alt="logo_MinHouse" />
                        <div className="card-body">
                            <h4 className="card-title">Min House</h4>
                            <p className="card-text">Thời trang 2HAND</p>
                            <div>
                                <i className="fas fa-star checked"></i>
                                <i className="fas fa-star checked"></i>
                                <i className="fas fa-star checked"></i>
                                <i className="fas fa-star checked"></i>
                                <i className="far fa-star checked"></i>
                            </div>
                        </div>
                        <div className="card-body">
                            <a href="https://minhouse.com.vn/" className="card-link btn btn-info">Trang chính</a>
                            <a href="#" className="card-link btn btn-success">Xem thêm</a>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card">
                        <img className="card-img-top" src="/static/images/logo_AZtea.png" alt="logo_AZtea" />
                        <div className="card-body">
                            <h4 className="card-title">AZTea</h4>
                            <p className="card-text">Trà sữa</p>
                            <div>
                                <i className="fas fa-star checked"></i>
                                <i className="fas fa-star checked"></i>
                                <i className="fas fa-star checked"></i>
                                <i className="fas fa-star checked"></i>
                                <i className="far fa-star checked"></i>
                            </div>
                        </div>
                        <div className="card-body">
                            <a href="http://aztea.vn/" className="card-link btn btn-info">Trang chính</a>
                            <a href="#" className="card-link btn btn-success">Xem thêm</a>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card">
                        <img className="card-img-top" src="/static/images/logo_FeelingTea.png" alt="logo_AZtea" />
                        <div className="card-body">
                            <h4 className="card-title">Feeling Tea</h4>
                            <p className="card-text">Trà sữa</p>
                            <div>
                                <i className="fas fa-star checked"></i>
                                <i className="fas fa-star checked"></i>
                                <i className="fas fa-star checked"></i>
                                <i className="far fa-star checked "></i>
                                <i className="far fa-star checked"></i>
                            </div>
                        </div>
                        <div className="card-body">
                            <a href="http://feelingteaonline.com/" className="card-link btn btn-info">Trang chính</a>
                            <a href="#" className="card-link btn btn-success">Xem thêm</a>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card">
                        <img className="card-img-top" src="/static/images/logo_KenzoShop.png" alt="logo_KenzoShop" />
                        <div className="card-body">
                            <h4 className="card-title">Kenzo Shop</h4>
                            <p className="card-text">Thời trang nam, nữ, trẻ em</p>
                            <div>
                                <i className="fas fa-star checked"></i>
                                <i className="fas fa-star checked"></i>
                                <i className="fas fa-star checked"></i>
                                <i className="fas fa-star checked"></i>
                                <i className="far fa-star checked"></i>
                            </div>
                        </div>
                        <div className="card-body">
                            <a href="https://www.kenzo.com/eu/en/home" className="card-link btn btn-info">Trang chính</a>
                            <a href="#" className="card-link btn btn-success">Xem thêm</a>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card">
                        <img className="card-img-top" src="/static/images/logo_Tocotoco.png" alt="logo_Tocotoco" />
                        <div className="card-body">
                            <h4 className="card-title">Tocotoco</h4>
                            <p className="card-text">Trà sữa</p>
                            <div>
                                <i className="fas fa-star checked"></i>
                                <i className="fas fa-star checked"></i>
                                <i className="fas fa-star checked"></i>
                                <i className="fas fa-star checked"></i>
                                <i className="far fa-star checked"></i>
                            </div>
                        </div>
                        <div className="card-body">
                            <a href="http://tocotocotea.com/" className="card-link btn btn-info">Trang chính</a>
                            <a href="#" className="card-link btn btn-success">Xem thêm</a>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card">
                        <img className="card-img-top" src="/static/images/logo_GDACollection.png" alt="logo_MinHouse" />
                        <div className="card-body">
                            <h4 className="card-title">GDACollection</h4>
                            <p className="card-text">Thời trang công sở nữ</p>
                            <div>
                                <i className="fas fa-star checked"></i>
                                <i className="fas fa-star checked"></i>
                                <i className="fas fa-star checked"></i>
                                <i className="fas fa-star checked"></i>
                                <i className="far fa-star checked"></i>
                            </div>
                        </div>
                        <div className="card-body">
                            <a href="http://gda.vn/" className="card-link btn btn-info">Trang chính</a>
                            <a href="#" className="card-link btn btn-success">Xem thêm</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;