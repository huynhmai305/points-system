import React, {Component} from "react";
import Layout from '../layouts/Layout';
import Link from 'next/link';
import { Icon } from 'antd';

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
              <Link href="/admin"><a><i className="fas fa-home fa-2x"></i></a></Link>
            </li>
            <li >
              <a href="#customerSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><i className="fas fa-users "></i> Quản lý khách hàng</a>
              <ul className="collapse list-unstyled" id="customerSubmenu">
                <li>
                  <Link href="/admin/user"><a><i className="fas fa-list-ul "></i> Danh sách khách hàng</a></Link>
                </li>
                <li>
                  <Link href="/admin/post"><a><i className="fas fa-pen-alt"></i> Bài review</a></Link>
                </li>
              </ul>
            </li>
            <li>
              <a href="#storeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><i className="fas fa-store"></i> Quản lý cửa hàng</a>
              <ul className="collapse list-unstyled" id="storeSubmenu">
                <li>
                  <Link href="/admin/store"><a><i className="fas fa-list-ul "></i> Danh sách cửa hàng</a></Link>
                </li>
                <li>
                  <Link href="/admin/post"><a><i className="fas fa-pen-alt"></i> Bài viết</a></Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/admin/bill"><a><i className="fas fa-money-bill-alt"></i> Quản lý hóa đơn</a></Link>
            </li>
            <li>
              <Link href="/admin/gift"><a><i className="fas fa-gifts"></i> Quản lý quà đổi thưởng</a></Link>
            </li>
            <li>
              <Link href="/admin/change_point"><a><i className="fas fa-exchange-alt"></i> Giá trị quy đổi điểm</a></Link>
            </li>
            <li>
              <Link href="/"><a onClick={this.logout}><i className="fas fa-power-off"></i> Đăng xuất</a></Link>
            </li>
          </ul>
        </nav>
        <div className="page-wrap">
          <header className="main-header fixed-top">
            <a href="#main-nav" className="open-menu">
              <Icon type="right" />
            </a>
            <a href="#" className="close-menu">
              <Icon type="left" />
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
