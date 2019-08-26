import React, { Component } from 'react';
// import DefaultLayout from './layouts/Layout';
// import Link from 'next/link';
// import { Icon } from 'antd';

// class Customer extends Component {
//     logout = () => {
//         localStorage.removeItem('user');
//     }
//     render() {
//         return (
//             <DefaultLayout title="Customer">
//                 <div>
//                     <nav className="main-nav" id="main-nav">
//                         <div className="sidebar-header ">
//                             <div className="image_outer_container">
//                                 <div className="green_icon" />
//                                 <img src={(this.props.image !== null) ? this.props.image : "http://ssl.gstatic.com/accounts/ui/avatar_2x.png"} className="rounded-circle img-thumbnail .d-block .mx-auto image_inner_container" alt="avatar" style={{ width: 100, height: 100 }} />
//                             </div>
//                         </div>
//                         <p className="text-center" style={{ color: 'white' }}>{this.props.username}</p>
//                         <ul className="list-unstyled">
//                             <li>
//                                 <Link href="/user"><a><i className="fas fa-home fa-2x"></i></a></Link>
//                             </li>
//                             <li>
//                                 <Link href="/user/khampha"><a><Icon type="dropbox" /> Khám phá</a></Link>
//                             </li>
//                             <li>
//                                 <Link href="/user/exchange_gift"><a><Icon type="gift" /> Đổi quà</a></Link>
//                             </li>
//                             <li>
//                                 <Link href="/user/tichdiem"><a><Icon type="qrcode" /> Quét mã</a></Link>
//                             </li>
//                             <li>
//                                 <Link href="/user/profile"><a><Icon type="user" /> Thông tin & Ví tiền</a></Link>
//                             </li>
//                             <li>
//                                 <Link href="/"><a onClick={this.logout}><i className="fas fa-power-off"></i> Đăng xuất</a></Link>
//                             </li>
//                         </ul>
//                     </nav>
//                     <div className="page-wrap">
//                         <header className="main-header fixed-top">
//                             <a href="#main-nav" className="open-menu">
//                                 <i className="fa fa-align-justify" aria-hidden="true"></i>
//                             </a>
//                             <a href="#" className="close-menu">
//                                 <i className="fa fa-align-left" aria-hidden="true"></i>
//                             </a>
//                             <h2 className="text-light">Hệ thống tích điểm H&M</h2>
//                         </header>
//                         <div className="main-content">
//                             {this.props.children}
//                         </div>
//                     </div>
//                 </div>
//             </DefaultLayout>
//         );
//     }
// }

// export default Customer;
import { Menu, Icon, Button } from 'antd';

const { SubMenu } = Menu;

class App extends Component {
    state = {
        collapsed: false,
    };

    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <div style={{ width: 256 }}>
                <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
                    <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
                </Button>
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                    inlineCollapsed={this.state.collapsed}
                >
                    <Menu.Item key="1">
                        <Icon type="pie-chart" />
                        <span>Option 1</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Icon type="desktop" />
                        <span>Option 2</span>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Icon type="inbox" />
                        <span>Option 3</span>
                    </Menu.Item>
                    <SubMenu
                        key="sub1"
                        title={
                            <span>
                                <Icon type="mail" />
                                <span>Navigation One</span>
                            </span>
                        }
                    >
                        <Menu.Item key="5">Option 5</Menu.Item>
                        <Menu.Item key="6">Option 6</Menu.Item>
                        <Menu.Item key="7">Option 7</Menu.Item>
                        <Menu.Item key="8">Option 8</Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub2"
                        title={
                            <span>
                                <Icon type="appstore" />
                                <span>Navigation Two</span>
                            </span>
                        }
                    >
                        <Menu.Item key="9">Option 9</Menu.Item>
                        <Menu.Item key="10">Option 10</Menu.Item>
                        <SubMenu key="sub3" title="Submenu">
                            <Menu.Item key="11">Option 11</Menu.Item>
                            <Menu.Item key="12">Option 12</Menu.Item>
                        </SubMenu>
                    </SubMenu>
                </Menu>
            </div>
        );
    }
}//
export default App 