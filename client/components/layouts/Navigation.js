import React, { Component } from 'react';
import Link from 'next/link';
import ModalLogin from '../Modals/ModalLogin'
import { Layout, Menu, Affix } from 'antd';

const { Header } = Layout;

class Navigation extends Component {
  state = {
    top: 0
  };
  render() {
    return (
      <Affix offsetTop={this.state.top}>
        <Layout className="layout">
          <Header>
            <div className="logo">
              <Menu>H&M</Menu>
            </div>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['0']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1"><a href="#about">Giới thiệu</a></Menu.Item>
              <Menu.Item key="2"><a href="#quytrinhtichdiem">Quy trình tích điểm</a></Menu.Item>
              <Menu.Item key="3"><a href="#client">Cửa hàng</a></Menu.Item>
              <Menu.Item key="4"><a href="#contact">Liên lạc</a></Menu.Item>
              <Menu.Item span={4}>
                <ModalLogin btnLabel="Đăng nhập"></ModalLogin>
              </Menu.Item>
            </Menu>
          </Header>
        </Layout>
      </Affix>
    );
  }
}
export default Navigation;