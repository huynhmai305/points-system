import React, { Component } from 'react';
import Home from '../../components/Home/Home.js';
import Admin from '../../components/admin/Admin.js';

class User extends Component {
    render() {
        return (
            <Admin title="Quản lý khách hàng">
                <Home/>
            </Admin>
        );
    }
}

export default User;