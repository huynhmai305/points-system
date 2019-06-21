import React, { Component } from 'react';
var DefaultLayout = require('../layouts/default');

class Post extends Component {
    render() {
        return (
            <DefaultLayout title="Quản lý bài viết">
                <section id="services">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="float-right">
                                    <a className="btn btn-success" data-toggle="modal" href="/post/add"><i className="fas fa-pencil-alt"></i> Thêm bài viết</a>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <h4>Danh sách bài viết</h4>
                                <div className="records_content">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Tiêu đề</th>
                                                <th>Nội dung</th>
                                                <th>Ngày nhập</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td>
                                                    <button type="button" className="btn btn-info" data-dismiss="modal"><i className="fas fa-edit"> Sửa</i></button>
                                                    <button type="button" className="btn btn-danger" onclick="addRecord()"><i className="fas fa-trash"> Xóa</i></button>
                                                </td>

                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                </section>
            </DefaultLayout>
        );
    }
}

export default Post;