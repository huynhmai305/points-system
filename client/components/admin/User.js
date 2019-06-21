import React, { Component } from 'react';
import Admin from './Admin.js';
var dateFormat = require('dateformat');
class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }
    render() {
        return (
            <Admin title="Quản lý khách hàng">
                <div>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="/admin">Trang chủ</a>
                        </li>
                        <li className="breadcrumb-item">
                            <a href="#">Quản lý người dùng</a>
                        </li>
                        <li className="breadcrumb-item active">Quản lý khách hàng</li>
                    </ol>
                    <table className="table table-striped table-hover">
                        <thead className="table-primary">
                            <tr >
                                <th>#</th>
                                <th>Name</th>
                                <th>Address</th>
                                <th>Phone</th>
                                <th>Email</th>
                                <th>Ngày đăng ký</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.result.map((item, key) =>
                                <tr key={key}>
                                    <td scope="row">{item.id}</td>
                                    <td>{item.username}</td>
                                    <td>{item.address}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.email}</td>
                                    <td>{dateFormat(item.createdAt, "dddd, mmmm dS, yyyy, h:MM:ss TT")}</td>
                                    <td>
                                        <a type="submit" name="btnDelete" className="btn btn-danger"  href={"/admin/user/delete/"+item.id}><i className="fas fa-trash-alt"></i></a>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>

                </div>
            </Admin>
        );
    }
}

export default Users;