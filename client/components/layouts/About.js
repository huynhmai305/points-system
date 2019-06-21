
import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <section id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                        <h2 className="section-heading text-uppercase">Giới thiệu</h2>
                        <h3 className="section-subheading text-muted">Cách dễ dàng để nhận phần thưởng cho các hoạt động hằng ngày của bạn</h3>
                        </div>
                    </div>
                    <div className="row text-center">
                        <div className="col-md-4">
                            <span className="fa-stack fa-4x">
                                <i className="fas fa-circle fa-stack-2x text-primary"></i>
                                <i className="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
                            </span>
                            <h4 className="service-heading">Tiện lợi</h4>
                            <p className="text-muted">Thay vì hình thức tích điểm bằng thẻ trước đây, thì giờ bạn đã được trải nghiệm tích điểm với mã QR tiện lợi và nhanh chóng hơn.</p>
                        </div>
                        <div className="col-md-4">
                            <span className="fa-stack fa-4x">
                                <i className="fas fa-circle fa-stack-2x text-primary"></i>
                                <i className="fas fa-donate fa-stack-1x fa-inverse"></i>
                            </span>
                            <h4 className="service-heading">Tiết kiệm</h4>
                            <p className="text-muted">Chỉ bằng một mã QR, bạn có thể tích Mcoin ở mọi cửa hàng tích điểm thuộc hệ thống.</p>
                        </div>
                        <div className="col-md-4">
                            <span className="fa-stack fa-4x">
                                <i className="fas fa-circle fa-stack-2x text-primary"></i>
                                <i className="fas fa-gift fa-stack-1x fa-inverse"></i>
                            </span>
                            <h4 className="service-heading">Hấp dẫn</h4>
                            <p className="text-muted">Chỉ với các hoạt động mua sắm, ăn uống hằng ngày, bạn đã tích góp cho mình một số điểm kha khá để đổi voucher giảm giá hấp dẫn rồi đấy.</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;