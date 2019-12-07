import React, { Component } from 'react';
import DefaultLayout from './layouts/Layout';
import Link from 'next/link';
import { FaHome, FaExchangeAlt, FaHandHoldingUsd, FaAccusoft, FaChevronRight, FaChevronLeft, FaGift, FaStore, FaPowerOff, FaMoneyBillWaveAlt } from "react-icons/fa";

class Store extends Component {
  logout = () => {
    localStorage.removeItem('user');
  }
  render() {
    return (
      <DefaultLayout title="Store">
        <div>
          <nav className="main-nav" id="main-nav">
            <div className="sidebar-header">
              <div className="image_outer_container">
                <div className="green_icon" />
                <img src={(this.props.image !== null) ? this.props.image : "http://ssl.gstatic.com/accounts/ui/avatar_2x.png"} className="rounded-circle img-thumbnail .d-block .mx-auto image_inner_container" alt="avatar" style={{ width: 100, height: 100 }} />
              </div>
            </div>
            <p className="text-center" style={{ color: 'white' }}>{this.props.username}</p>
            <ul className="list-unstyled">
              <li>
                <Link href="/store"><a><FaHome /><span> Trang chủ</span></a></Link>
              </li>
              <li className="active">
                <Link href="/store/customer"><a><FaHandHoldingUsd /> Tich điểm khách hàng</a></Link>
              </li>
              <li className="active">
                <Link href="/store/bill"><a><FaMoneyBillWaveAlt /> Quản lý hóa đơn</a></Link>
              </li>
              <li className="active">
                <Link href="/store/post"><a><FaAccusoft /> Bài viết</a></Link>
              </li>
              <li className="active">
                <Link href="/store/gift"><a><FaGift /> Quà đổi thưởng</a></Link>
              </li>
              <li className="active">
                <Link href="/store/setpoint"><a><FaExchangeAlt/> Thiết lập điểm quy đổi</a></Link>
              </li>
              <li className="active">
                <Link href="/store/profile"><a><FaStore /> Thông tin cửa hàng</a></Link>
              </li>
              <li className="active">
                <Link href="/"><a onClick={this.logout}><FaPowerOff /> Đăng xuất</a></Link>
              </li> 
            </ul>
          </nav>
          <div className="page-wrap">
            <header className="main-header fixed-top">
              <a href="#main-nav" className="open-menu">
                <FaChevronRight />
              </a>
              <a href="#" className="close-menu">
                <FaChevronLeft />
              </a>
              <h2>Hệ thống tích điểm H&M</h2>
            </header>
            <div className="main-content">
              {this.props.children}
            </div>
          </div>
        </div>
      </DefaultLayout>
    );
  }
}

export default Store;
