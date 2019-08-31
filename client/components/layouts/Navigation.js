import React, { Component } from 'react';
import Link from 'next/link';
import ModalLogin from '../Modals/ModalLogin';

class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top navbar-shrink " id="mainNav">
        <div className="container">
          <Link href="/"><a className="navbar-brand " >H&M</a></Link>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive"
            aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
                <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav text-uppercase ml-auto">
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#about">Giới thiệu</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#quytrinhtichdiem">Quy trình tích điểm</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#client">Cửa hàng</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#contact">Liên lạc</a>
              </li>
            </ul>
            <ModalLogin buttonLabel="Đăng nhập" className="nav-link js-scroll-trigger"></ModalLogin>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;