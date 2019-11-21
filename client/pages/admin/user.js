import React, { Component } from 'react';
import Home from '../../components/Home/Manager_User';
import Admin from '../../components/admin/Admin';

class User extends Component {
  render() {
    return (
      <Admin title="Quản lý khách hàng">
        <Home />
      </Admin>
    );
  }
}

export default User;
