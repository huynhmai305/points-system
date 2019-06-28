import React, { Component } from 'react';
import Home from '../../components/Home/Manager_Store';
import Admin from '../../components/admin/Admin.js';

class Store extends Component {
    render() {
        return (
            <div>
                <Admin title="Quản lý khách hàng">
                    <Home />
                </Admin>
            </div>
        );
    }
}

export default Store;