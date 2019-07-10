import React, { Component } from 'react';
import DefaultLayout from './layouts/Layout';
import Link from 'next/link';

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
                                <img src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png" className="rounded-circle img-thumbnail .d-block .mx-auto image_inner_container" alt="avatar" style={{width:100, height:100}}/>
                            </div>        
                        </div>
                        <p className="text-center" style={{color:'white'}}>{this.props.username}</p>
                        <ul className="list-unstyled">
                            <li>
                                <Link href="/user"><a><i className="fas fa-home fa-2x"></i></a></Link>
                            </li>
                            {/*<li className="active">
                                <Link href="#"><a><i className="fas fa-thumbs-up"></i> Khám phá</a></Link>
                            </li>
                            <li>
                                <a href="#storeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle"><i className="fas fa-qrcode "></i> Tích điểm</a>
                                <ul className="collapse list-unstyled" id="storeSubmenu">
                                    <li>
                                        <Link href="#"><a><i className="fas fa-qrcode "></i> QR code</a></Link>
                                    </li>
                                    <li>
                                        <Link href="/user/tichdiem"><a><i className="fas fa-money-bill-alt"></i> Hóa đơn</a></Link>
                                    </li>

                                </ul>
                            </li>*/}
                            <li>
                                <Link href="#"><a><i className="fas fa-gifts"></i> Đổi quà</a></Link>
                            </li>
                            <li>
                                <Link href="/user/profile"><a><i className="fas fa-user"></i> Cá nhân</a></Link>
                            </li>
                            <li>
                                <Link href="/"><a onClick={this.logout}><i className="fas fa-power-off"></i> Đăng xuất</a></Link>
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

export default Customer;