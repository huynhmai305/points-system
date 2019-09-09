import React, { Component } from 'react';
import Layout from '../Customer';
import ModalChangePass from '../Modals/ModalChangePass';
import { Container } from 'reactstrap';
// import FileBase64 from 'react-file-base64';
import History_Change_Gift from './History_Change_Gift';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            id: 0,
            username: '',
            birthday: '',
            address: '',
            phone: '',
            email: '',
            point: 0,
            changepass: false,
            image: ''
        }
    }
    onChange(e) {
        let files = e.target.files;
        let reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = e => {
            console.warn('img data', e.target.result)
            this.setState({ image: e.target.result })
            console.log(this.state.image)
        }
    }

    updateStorage() {
        var info = JSON.parse(localStorage.getItem('user'));
        info[0].username = this.state.username;
        info[0].birthday = this.state.birthday;
        info[0].address = this.state.address;
        info[0].phone = this.state.phone;
        info[0].email = this.state.email;
        info[0].point = this.state.point;
        info[0].picture = this.state.image;
        localStorage.setItem("user", JSON.stringify(info));
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
                picture: this.state.image
            })
        })
            .then(response => response.json())
            .then(item => {
                alert(`Chỉnh sửa thành công `);
                this.updateStorage();
                location.reload();
            })
        // alert(this.state.phone)
    }
    show_gift() {
        fetch('http://localhost:3000/users/giftuser/' + this.state.id)
            .then(response => response.json())
            .then(items => {
                console.log(items)
                this.setState({ items })
            })
    }
    handleChange = e => {
        var name = e.target.name;
        var value = e.target.value;
        this.setState({ [name]: value })
        // console.log(this.state.username)
    }

    componentDidMount() {
        const info = JSON.parse(localStorage.getItem('user'));
        this.setState({
            id: info[0].id,
            username: info[0].username,
            birthday: info[0].birthday,
            address: info[0].address,
            phone: info[0].phone,
            email: info[0].email,
            password: info[0].password,
            point: info[0].point,
            image: info[0].picture
        },
            () => this.show_gift()
        );
    }
    render() {
        return (
            <Layout username={this.state.username} image={this.state.image}>
                <Container>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="/user">Trang chủ</a>
                        </li>
                        <li className="breadcrumb-item active">
                            Chỉnh sửa thông tin
                        </li>
                    </ol>
                    <div className="row">
                        <div className="offset-md-1 col-md-3 text-center">
                            <img src={(this.state.image !== null) ? this.state.image : "http://ssl.gstatic.com/accounts/ui/avatar_2x.png"} className=" img-thumbnail .d-block .mx-auto " alt="avatar" style={{ width: 300, height: 200 }} />
                            <div className="mt-3">
                                <h6>Thay đổi ảnh đại diện</h6>
                                <input type="file" className="form-control-file " name="image" onChange={e => this.onChange(e)} />
                            </div>
                            <div className="mt-4 ">
                                <ModalChangePass />
                            </div>
                        </div>
                        <div className="col-md-8 text-center">
                            <form onSubmit={this.submitFormEdit}>
                                <div class="w3-container w3-green">
                                    <h3>Thông tin</h3>
                                </div>
                                <div className="form-inline">
                                    <label htmlFor="username" className="col-md-5">Họ tên:</label>
                                    <input type="text" className="col-md-6 w3-input" id="username" name="username" value={this.state.username} onChange={this.handleChange} required />
                                </div>
                                <div className="form-inline">
                                    <label htmlFor="birthday" className="col-md-5">Ngày sinh:</label>
                                    <input type="date" className="col-md-6 w3-input" id="birthday" name="birthday" value={this.state.birthday} onChange={this.handleChange} min="1960-01-01"
                                        max="2004-12-31" required />
                                </div>
                                <div className="form-inline">
                                    <label htmlFor="address" className="col-md-5">Địa chỉ:</label>
                                    <textarea type="text" className="col-md-6 w3-input" id="address" name="address" value={this.state.address} onChange={this.handleChange} required />
                                </div>
                                <div className="form-inline">
                                    <label htmlFor="phone" className="col-md-5">Số điện thoại:</label>
                                    <input type="tel" className="col-md-6 w3-input" id="phone" name="phone" aria-describedby="emailHelp" value={this.state.phone} onChange={this.handleChange} pattern="[0]{1}[0-9]{9}" required />
                                </div>
                                <div className="form-inline">
                                    <label htmlFor="email" className="col-md-5">Email:</label>
                                    <input type="email" className="col-md-6 w3-input" id="email" name="email" value={this.state.email} onChange={this.handleChange} required />
                                </div>
                                <div className="form-inline">
                                    <label htmlFor="point" className="col-md-5">Điểm tích lũy:</label>
                                    <input type="text" className="col-md-6 w3-input" value={this.state.point} disabled />
                                </div>
                                <div className="form-inline mt-4">
                                    <label className="col-md-5"></label>
                                    <input type="submit" className="col-md-2 btn btn-success" value="Submit" />
                                </div>
                            </form>
                        </div>
                    </div>
                    <h3 className="mt-5 text-center">Lịch sử đổi quà</h3>
                    <Container >
                        <History_Change_Gift items={this.state.items} />
                    </Container>
                </Container>
            </Layout>
        );
    }
}

export default Profile;