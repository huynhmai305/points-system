import React, { Component } from 'react';
import DefaultLayout from '../layouts/Layout';
import Footer from '../layouts/Footer.js';

class Admin extends Component {
    render() {
        return (
            <DefaultLayout title="Admin">
                <div>
                    <nav className="main-nav" id="main-nav">
                        <div className="sidebar-header">
                            <h3>Danh mục</h3>
                        </div>
                        <ul className="list-unstyled">
                            <li>
                                <a href="/admin"><i className="fas fa-home fa-2x"></i></a>
                            </li>
                            <li className="active">
                                <a href="#customerSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><i className="fas fa-users "></i> Quản lý khách hàng</a>
                                <ul className="collapse list-unstyled" id="customerSubmenu">
                                    <li>
                                        <a href="/admin/user"><i className="fas fa-list-ul "></i> Danh sách khách hàng</a>
                                    </li>
                                    <li>
                                        <a href="/admin/post"><i className="fas fa-pen-alt"></i> Bài review</a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="far fa-comment-alt "></i> Bình luận</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#storeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><i className="fas fa-store"></i> Quản lý cửa hàng</a>
                                <ul className="collapse list-unstyled" id="storeSubmenu">
                                    <li>
                                        <a href="/admin/store"><i className="fas fa-list-ul "></i> Danh sách cửa hàng</a>
                                    </li>
                                    <li>
                                        <a href="/admin/post"><i className="fas fa-pen-alt "></i> Bài viết</a>
                                    </li>
                                   
                                </ul>
                            </li>
                            <li>
                                <a href="#"><i className="fas fa-gifts"></i> Quản lý quà đổi thưởng</a>
                            </li>
                            <li>
                                <a href="/logout"><i className="fas fa-sign-out-alt"></i> Đăng xuất</a>
                            </li>
                        </ul>
                    </nav>
                    <div className="page-wrap">
                        <header className="main-header fixed-top">
                            <a href="#main-nav" className="open-menu">
                                <i className="fa fa-align-justify" aria-hidden="true"></i>
                            </a>
                            <a href="#" className="close-menu">
                                <i className="fa fa-align-left" aria-hidden="true"></i>
                            </a>
                            <h2>{this.props.title}</h2>
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

export default Admin;