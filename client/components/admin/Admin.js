import React, {Component} from "react";
import Layout from '../layouts/Layout';
import Link from 'next/link';
import ChatServer from '../chat/Chat_Server';
import { 
  FaHome, FaUserFriends, FaList, FaChevronRight, FaChevronLeft, FaGift, FaAccusoft, FaPowerOff, FaStore, FaMoneyBillWave, FaStarHalfAlt, FaExchangeAlt
} from "react-icons/fa";

export default class Admin extends Component {
  logout = () => {
    localStorage.removeItem('name');
  }
  render() {
    return (
      <Layout title="Admin">
        <nav className="main-nav" id="main-nav">
          <div className="sidebar-header">
            <h3>Admin</h3>
          </div>
          <ul className="list-unstyled">
            <li className="active">
              <Link href="/admin"><a><FaHome/> Trang chủ</a></Link>
            </li>
            <li >
              <a href="#customerSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">< FaUserFriends/> Quản lý khách hàng</a>
              <ul className="collapse list-unstyled" id="customerSubmenu">
                <li>
                  <Link href="/admin/user"><a><FaList/> Danh sách khách hàng</a></Link>
                </li>
                <li>
                  <Link href="/admin/post"><a><FaStarHalfAlt/> Bài review</a></Link>
                </li>
              </ul>
            </li>
            <li>
              <a href="#storeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><FaStore/> Quản lý cửa hàng</a>
              <ul className="collapse list-unstyled" id="storeSubmenu">
                <li>
                  <Link href="/admin/store"><a><FaList/> Danh sách cửa hàng</a></Link>
                </li>
                <li>
                  <Link href="/admin/post"><a><FaAccusoft/> Bài viết</a></Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/admin/bill"><a><FaMoneyBillWave/> Quản lý hóa đơn</a></Link>
            </li>
            <li>
              <Link href="/admin/gift"><a><FaGift/> Quản lý quà đổi thưởng</a></Link>
            </li>
            {/* <li>
              <Link href="/admin/chat"><a><i className="fas fa-gifts"></i> Chat</a></Link>
            </li> */}
            <li>
              <Link href="/admin/change_point"><a><FaExchangeAlt/> Giá trị quy đổi điểm</a></Link>
            </li>
            <li>
              <Link href="/"><a onClick={this.logout}><FaPowerOff/> Đăng xuất</a></Link>
            </li>
          </ul>
        </nav>
        <div className="page-wrap">
          <header className="main-header fixed-top">
            <a href="#main-nav" className="open-menu">
              <FaChevronRight/>
            </a>
            <a href="#" className="close-menu">
              <FaChevronLeft/>
            </a>
            <h2>{this.props.title}</h2>
          </header>
          <div className="main-content">
            {this.props.children}
          </div>
        </div>
      </Layout>
    );
  }
}
