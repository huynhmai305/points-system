import React, { Component } from 'react';

class Quytrinhtichdiem extends Component {
  render() {
    return (
      <section id="quytrinhtichdiem" className="mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Quy trình tích điểm</h2>
              <h3 className="section-subheading text-muted">Ba bước tích điểm Mcoin</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <ul className="timeline">
                <li>
                  <div className="timeline-image">
                    <img className="rounded-circle img-fluid" src="/static/images/btn_left.png" alt="Bước 1" />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>Bước 1</h4>
                      <h4 className="subheading">Đăng ký tài khoản</h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">Đăng ký tài khoản trên hệ thống bằng email của mình</p>
                    </div>
                  </div>
                </li>
                <li className="timeline-inverted">
                  <div className="timeline-image">
                    <img className="rounded-circle img-fluid" src="/static/images/btn_right.png" alt="Bước 2" />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>Bước 2</h4>
                      <h4 className="subheading">Tích điểm cực nhanh bằng mã QR</h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">Nhân viên sẽ quét mã đã gửi về email của bạn và tích điểm trong 2s</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="timeline-image">
                    <img className="rounded-circle img-fluid" src="/static/images/btn_left.png" alt="Bước 3" />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>Bước 3</h4>
                      <h4 className="subheading">Nhận điểm</h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">Nhận điểm tích lũy </p>
                    </div>
                  </div>
                </li>
                <li className="timeline-inverted">
                  <div className="timeline-image">
                    <img className="rounded-circle img-fluid" src="/static/images/btn_gift.png" alt="Bước 4" />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Quytrinhtichdiem;
