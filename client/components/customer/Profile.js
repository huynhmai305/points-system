import React, { Component } from 'react';
import Layout from '../Customer';
import ShowGift from './Show_Gift';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items:[],
            id:0,
            username: '',
            birthday: '',
            address: '',
            phone: '',
            email: '',
            password: '',
            point:0
        }
    }
    updateStorage = () => {
        var info = JSON.parse(localStorage.getItem('user'));
        if(this.state.id===info[0].id){
            info[0].username=this.state.username;
            localStorage.setItem("user", JSON.stringify(info[0].username));
        }
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
          })
        })
          .then(response => response.json())
          .then(item => {
            alert(`Chỉnh sửa thành công `);
            this.updateStorage;
            // location.reload()
          })
        // alert(this.state.phone)
      }
      show_gift () {
          fetch('http://localhost:3000/users/giftuser/'+ this.state.id)
          .then(response => response.json())
          .then(items => this.setState({items}))
      }
    handleChange = e => {
        var name = e.target.name;
        var value = e.target.value;
        this.setState({[name]:value})
        // console.log(this.state.username)
    }
    
    componentDidMount() {
        var info = JSON.parse(localStorage.getItem('user'));
        this.setState({
            id:info[0].id,
            username:info[0].username,
            birthday: info[0].birthday,
            address: info[0].address,
            phone: info[0].phone,
            email: info[0].email,
            password: info[0].password,
            point: info[0].point,
        },
        () => this.show_gift()
        );
    }
    render() {
        return (
            <Layout username={this.state.username}>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <a href="/user">Trang chủ</a>
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
                        <div className="col-md-7">
                            <form onSubmit={this.submitFormEdit}>
                                <div className="form-inline">
                                    <label htmlFor="username" className="col-md-5">Họ tên:</label>
                                    <input type="text" className="form-control col-md-6 " id="username" name="username" value={this.state.username} onChange={this.handleChange} required/>
                                </div>
                                <div className="form-inline">
                                    <label htmlFor="birthday" className="col-md-5">Ngày sinh:</label>
                                    <input type="date" className="form-control col-md-6 " id="birthday" name="birthday" value={this.state.birthday} onChange={this.handleChange}  min="1960-01-01" 
                                    max="2004-12-31" required/>
                                </div>
                                <div className="form-inline">
                                    <label htmlFor="address" className="col-md-5">Địa chỉ:</label>
                                    <input type="text" className="form-control col-md-6" id="address" name="address" value={this.state.address} onChange={this.handleChange} required/>
                                </div>
                                <div className="form-inline">
                                    <label htmlFor="phone" className="col-md-5">Số điện thoại:</label>
                                    <input type="tel" className="form-control col-md-6" id="phone" name="phone" aria-describedby="emailHelp" value={this.state.phone} onChange={this.handleChange}  pattern="[0]{1}[0-9]{9}" required/>
                                </div>
                                <div className="form-inline">
                                    <label htmlFor="email" className="col-md-5">Email:</label>
                                    <input type="email" className="form-control col-md-6" id="email" name="email" value={this.state.email} onChange={this.handleChange} required/>
                                </div>
                                <div className="form-inline">
                                    <label htmlFor="password" className="col-md-5">Password:</label>
                                    <input type="text" className="form-control col-md-6" id="password" name="password" value={this.state.password} onChange={this.handleChange} required/>
                                </div>
                                <div className="form-inline">
                                    <label htmlFor="point" className="col-md-5">Điểm tích lũy:</label>
                                    <label htmlFor="point" className="col-md-6">{this.state.point}</label>
                                </div>
                                <div className="offset-md-4 col-md-4 mt-5">
                                    <input type="submit" className="btn btn-outline-success" value="Chỉnh sửa profile" />
                                </div>
                            </form>
                        </div>
                    </div>
                    {this.state.items.map((item, key) => (
                        <ShowGift key={key} id_gift={item.id_gift} title={item.title} content={item.content} point_gift={item.point}/>
                    ))}
                    
            </Layout>
        );
    }
}

export default Profile;