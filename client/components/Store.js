import React, { Component } from 'react';
import DefaultLayout from './layouts/Layout';
import Link from 'next/link';

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
                                <img src={(this.props.image!==null) ? this.props.image : "http://ssl.gstatic.com/accounts/ui/avatar_2x.png"} className="rounded-circle img-thumbnail .d-block .mx-auto image_inner_container" alt="avatar" style={{width:100, height:100}}/>
                            </div>
                        </div>
                        <p className="text-center" style={{color:'white'}}>{this.props.username}</p>
                        <ul className="list-unstyled">
                            <li>
                                <Link href="/store"><a><i className="fas fa-home fa-2x"></i></a></Link>
                            </li>
                            <li className="active">
                                <Link href="/store/customer"><a><i className="fas fa-edit"></i> Khách hàng</a></Link>
                            </li>
                            {/*<li className="active">
                                <Link href="#"><a><i className="fas fa-edit"></i> Bài viết</a></Link>
                            </li>
                            <li>
                                <Link href="#"><a><i className="fas fa-thumbs-up"></i> Bài review</a></Link>
                            </li>*/}
                            <li className="active">
                                <Link href="/store/gift"><a><i className="fas fa-gifts"></i> Quà đổi thưởng</a></Link>
                            </li>
                            <li>
                                <Link href="/store/profile"><a><i className="fas fa-store"></i> Thông tin cửa hàng</a></Link>
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

export default Store;