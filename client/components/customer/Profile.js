import React, { Component } from 'react';
import Layout from '../Customer';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: [],
            id:0,
            username: '',
            birthday: '',
            address: '',
            phone: '',
            email: '',
            password: '',
            role: 1

        }
    }

    getItem(name) {
        var url = 'http://localhost:3000/users/profile';
        if(name !== null){
            url = url +'?name='+name;
        }
        fetch(url)
            .then(response => response.json())
            .then(item => this.setState({ item }))
    }
    submitFormEdit = e => {
        e.preventDefault()
        fetch('http://localhost:3000/admin/user', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            id: this.state.id,
            username: this.state.username,
            birthday: this.state.birthday,
            address: this.state.address,
            phone: this.state.phone,
            email: this.state.email,
            password: this.state.password,
            role: this.state.role
          })
        })
          .then(response => response.json())
          .then(item => {
            alert(`Chỉnh sửa thành công id: ${this.state.id}`);
            location.reload()
          })
      }

    componentDidMount() {
        var username = localStorage.getItem('name');
        this.getItem(username);
    }
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
                {this.state.item.map((item, key) =>(
                    <div className="row" key={key}>
                        <div className="offset-md-1 col-md-4">
                            <img src="http://ssl.gstatic.com/accounts/ui/avatar_2x.png" className="rounded-circle img-thumbnail .d-block .mx-auto image_inner_container" alt="avatar" style={{ width: 100, height: 100 }} />
                            <div className="mt-5">
                                <p>Thay đổi ảnh đại diện</p>
                                <input type="file" className="form-control-file " />
                            </div>
                        </div>

                        <div className="col-md-7">
                            <form method="POST" onSubmit={this.submitFormEdit}>
                                <div className="form-inline">
                                    <label htmlFor="ten" className="col-md-5">Họ tên:</label>
                                    <input type="text" className="form-control col-md-6 " id="ten" name="ten" defaultValue={item.username} />
                                </div>
                                <div className="form-inline">
                                    <label htmlFor="ngsinh" className="col-md-5">Ngày sinh:</label>
                                    <input type="text" className="form-control col-md-6 " id="ngsinh" name="ngsinh" defaultValue={item.ngsinh} />
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
                                    <input type="text" className="form-control col-md-6" id="email" name="email" defaultValue={item.email} />
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
                    </div>
                ))}
            </Layout>
        );
    }
}

export default Profile;