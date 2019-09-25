import React, { Component } from 'react';
import DefaultLayout from './layouts/Layout';
import Link from 'next/link';
import { Icon } from 'antd';

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
                                <Link href="/user"><a><i className="fas fa-home fa-2x"></i></a></Link>
                            </li>
                            <li>
                                <Link href="/user/khampha"><a><Icon type="dropbox" /> Khám phá</a></Link>
                            </li>
                            <li>
                                <Link href="/user/exchange_gift"><a><Icon type="gift" /> Đổi quà</a></Link>
                            </li>
                            <li>
                                <Link href="/user/tichdiem"><a><Icon type="qrcode" /> Quét mã</a></Link>
                            </li>
                            <li>
                                <Link href="/user/profile"><a><Icon type="user" /> Thông tin & Ví tiền</a></Link>
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
                            <h2 className="text-light">Hệ thống tích điểm H&M</h2>
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

export default Customer;
