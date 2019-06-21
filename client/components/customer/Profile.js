import React, { Component } from 'react';
import Layout from '../customer.jsx';

class Profile extends Component {
    render() {
        return (
            <Layout title='Hệ thống tích điểm H&M'>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <a href="/users">Trang chủ</a>
                    </li>
                    <li className="breadcrumb-item active">
                        <a href="#">Chỉnh sửa profile</a>
                    </li>
                </ol>
                <div className="row">
                    <div className="offset-md-1 col-md-4">
                        <img src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png" className="rounded-circle img-thumbnail .d-block .mx-auto image_inner_container" alt="avatar" style={{ width: 100, height: 100 }} />
                        <div className="mt-5">
                            <p>Thay đổi ảnh đại diện</p>
                            <input type="file" className="form-control-file " />
                        </div>
                    </div>
                    {this.props.result.map((item, key) =>
                        <div key={key} className="col-md-7">
                            <form method="POST" action={"/users/profile/edit/"+ item.id}>
                                <div className="form-inline">
                                    <label htmlFor="ten" className="col-md-5">Họ tên:</label>
                                    <input type="text" className="form-control col-md-6 " id="ten" name="ten" defaultValue={item.username}/>
                                </div>
                                <div className="form-inline">
                                    <label htmlFor="ngsinh" className="col-md-5">Ngày sinh:</label>
                                    <input type="text" className="form-control col-md-6 " id="ngsinh" name="ngsinh" defaultValue={item.ngsinh}/>
                                </div>
                                <div className="form-inline">
                                    <label htmlFor="diachi" className="col-md-5">Địa chỉ:</label>
                                    <input type="text" className="form-control col-md-6" id="diachi" name="diachi" defaultValue={item.address} />
                                </div>
                                <div className="form-inline">
                                    <label htmlFor="ten" className="col-md-5">Số điện thoại:</label>
                                    <input type="text" className="form-control col-md-6" id="sdt" name="sdt" aria-describedby="emailHelp" defaultValue={item.phone} />
                                </div>
                                <div className="form-inline">
                                    <label htmlFor="ten" className="col-md-5">Email:</label>
                                    <input type="text" className="form-control col-md-6" id="email" name="email" defaultValue={item.email}/>
                                </div>
                                <div className="form-inline">
                                    <label htmlFor="ten" className="col-md-5">Password:</label>
                                    <input type="text" className="form-control col-md-6" id="password" name="password" defaultValue={item.password} />
                                </div>
                                <div className="offset-md-4 col-md-4 mt-5">
                                    <input type="submit" className="btn btn-outline-success" value="Chỉnh sửa profile" />
                                </div>                                
                            </form>
                        </div>
                    )}
                </div>
            </Layout>
        );
    }
}

export default Profile;