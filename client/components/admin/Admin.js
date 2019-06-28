import React from "react";
import Layout from '../layouts/Layout';
import Link from 'next/link';

export default class Admin extends React.Component {
  toggle = () => {
    $(document).ready(function () {

      $("#sidebar").mCustomScrollbar({
           theme: "minimal"
      });
  
      $('#sidebarCollapse').on('click', function () {
          // open or close navbar
          $('#sidebar').toggleClass('active');
          // close dropdowns
          $('.collapse.in').toggleClass('in');
          // and also adjust aria-expanded attributes we use for the open/closed arrows
          // in our CSS
          $('a[aria-expanded=true]').attr('aria-expanded', 'false');
      });
  
  });
  }
  render() {
    return (
      <Layout title="Admin">
        <div className="wrapper">
          {/* Sidebar */}
          <nav id="sidebar">
            <div>
              <div className="sidebar-header">
                <h3>{this.props.title}</h3>
              </div>
              <ul className="list-unstyled components">
                <p>Admin</p>
                <li className="active">
                  <Link href="/admin"><a>Trang chủ</a></Link>
                </li>
                <li >
                  <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Cửa hàng</a>
                  <ul className="collapse list-unstyled" id="homeSubmenu">
                    <li>
                      <Link href="/admin/store"><a>Danh sách</a></Link>
                    </li>
                    <li>
                      <Link href="#"><a>Bài viết</a></Link>
                    </li>
                    <li>
                      <Link href="#"><a>Hóa đơn</a></Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Khách hàng</a>
                  <ul className="collapse list-unstyled" id="pageSubmenu">
                    <li>
                      <Link href="/admin/user"><a>Danh sách</a></Link>
                    </li>
                    <li>
                      <Link href="#"><a>Bài viết</a></Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="#"><a>Tích điểm</a></Link>
                </li>
                <li>
                  <Link href="#"><a>Quà đổi thưởng</a></Link>
                </li>
                <li>
                <Link href="#"><a>Đăng xuất</a></Link>
              </li>
              </ul>
            </div>

          </nav>
          {/* Page Content */}
          <div id="content">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                <button type="button" id="sidebarCollapse" className="btn btn-info" onClick={this.toggle}>
                  <i className="fas fa-align-left" />
                  <span>Toggle Sidebar</span>
                </button>
              </div>
            </nav>
            {this.props.children}
          </div>
        </div>
      </Layout>
    );
  }
}
