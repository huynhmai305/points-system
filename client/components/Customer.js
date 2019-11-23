import React, { Component } from 'react';
import DefaultLayout from './layouts/Layout';
import Link from 'next/link';
import ChatClient from './chat/Chat_Client';
import { FaHome, FaQrcode, FaUserAlt, FaPaperPlane, FaChevronRight, FaChevronLeft, FaGift, FaPowerOff } from "react-icons/fa";

class Customer extends Component {
  logout = () => {
    localStorage.removeItem('user');
  }
  render() {
    return (
      <DefaultLayout title="Customer">
        <div>
          <nav className="main-nav" id="main-nav">
            <div className="sidebar-header ">
              <div className="image_outer_container">
                <div className="green_icon" />
                <img src={(this.props.image !== null) ? this.props.image : "http://ssl.gstatic.com/accounts/ui/avatar_2x.png"} className="rounded-circle img-thumbnail .d-block .mx-auto image_inner_container" alt="avatar" style={{ width: 100, height: 100 }} />
              </div>
            </div>
            <p className="text-center" style={{ color: 'white' }}>{this.props.username}</p>
            <ul className="list-unstyled">
              <li>
                <Link href="/user"><a><FaHome /> Trang chủ</a></Link>
              </li>
              <li>
                <Link href="/user/khampha"><a><FaPaperPlane /> Khám phá</a></Link>
              </li>
              <li>
                <Link href="/user/exchange_gift"><a><FaGift /> Đổi quà</a></Link>
              </li>
              <li>
                <Link href="/user/tichdiem"><a><FaQrcode /> Tích điểm hóa đơn</a></Link>
              </li>
              <li>
                <Link href="/user/profile"><a><FaUserAlt /> Thông tin & Giao dịch</a></Link>
              </li>
              <li>
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
              <h2 className="text-light">
                Hệ thống tích điểm H&M
                {
                  this.props.point !== null ? (
                    <p className="text-light float-right" style={{ fontSize: '15px' }}>
                      {this.props.username}: {this.props.point}
                    </p>
                  ) : null
                }
              </h2>

            </header>
            <div className="main-content">
              {this.props.children}
              {/* <ChatClient /> */}
            </div>
          </div>
        </div>
      </DefaultLayout>
    );
  }
}

export default Customer;
