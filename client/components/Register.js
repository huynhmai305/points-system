import React, { Component } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText, FormFeedback } from 'reactstrap';

class Register extends Component {
    state = {
        id: 0,
        username: '',
        birthday: '',
        address: '',
        phone: '',
        email: '',
        password: '',
        password2: '',
        role: 2,

    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitFormAdd = e => {
        e.preventDefault()
        fetch('http://localhost:3000/admin/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'

            },
            body: JSON.stringify({
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
                alert(`Đăng ký thành công `);
                location.reload();
            })
            .catch(err => alert('Tài khoản đã tồn tại'))

    }
    render() {
        return (
            <Form onSubmit={this.submitFormAdd}>
                <FormText>Form đăng ký của khách hàng</FormText>
                <FormGroup>
                    <Label for="username">Họ tên</Label>
                    <Input type="text"
                        name="username"
                        id="username"
                        placeholder="Nhập tên"
                        onChange={this.onChange}
                        value={this.state.username}
                        valid={this.state.username !== ''}
                        invalid={this.state.username === ''}
                    />
                    <FormFeedback valid>
                        Nhập họ tên thành công
                    </FormFeedback>
                    <FormFeedback>
                        Họ tên trống
                        </FormFeedback>
                </FormGroup>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="birthday">Ngày sinh</Label>
                            <Input type="date"
                                name="birthday"
                                id="birthday"
                                placeholder="Nhập ngày sinh"
                                onChange={this.onChange}
                                value={this.state.birthday}
                                valid={this.state.birthday !== ''}
                                invalid={this.state.birthday === ''}
                            />
                            <FormFeedback valid>
                                Nhập ngày sinh thành công
                            </FormFeedback>
                            <FormFeedback>
                                Ngày sinh trống
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="phone">Số điện thoại</Label>
                            <Input
                                type="tel"
                                name="phone"
                                id="phone"
                                placeholder="Nhập số điện thoại"
                                onChange={this.onChange}
                                value={this.state.phone}
                                length={10}
                                valid={this.state.phone !== '' && this.state.phone.length === 10}
                                invalid={this.state.phone === '' || this.state.phone.length !== 10}
                            />
                            <FormFeedback valid>
                                Nhập số điện thoại thành công
                                </FormFeedback>
                            <FormFeedback>
                                Số điện thoại trống hoặc sai định dạng
                                </FormFeedback>
                        </FormGroup>
                    </Col>
                </Row>
                <FormGroup>
                    <Label for="address">Địa chỉ</Label>
                    <Input type="text" name="address" id="address" placeholder="Nhập địa chỉ" onChange={this.onChange} value={this.state.address} />
                </FormGroup>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input type="email"
                        name="email"
                        id="email"
                        placeholder="Nhập email"
                        onChange={this.onChange}
                        value={this.state.email}
                        required
                    />
                    <FormFeedback valid>
                        Nhập email thành công
                    </FormFeedback>
                    <FormFeedback>
                        Vui lòng nhập một email chính xác
                    </FormFeedback>
                </FormGroup>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="password1">Password</Label>
                            <Input type="password"
                                name="password"
                                id="password1"
                                placeholder="Nhập password"
                                onChange={this.onChange}
                                value={this.state.password}
                                valid={this.state.password !== ''}
                                invalid={this.state.password === ''}
                            />
                            <FormFeedback valid>
                                Nhập password thành công
                            </FormFeedback>
                            <FormFeedback>
                                Password trống
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="password2">Xác nhận password</Label>
                            <Input
                                type="password"
                                name="password2"
                                id="password2"
                                placeholder="Nhập lại password"
                                onChange={this.onChange}
                                value={this.state.password2}
                                valid={this.state.password === this.state.password2}
                                invalid={this.state.password !== this.state.password2 || this.state.password2 === ''}
                            />
                            <FormFeedback valid>
                                Nhập password trùng khớp
                            </FormFeedback>
                            <FormFeedback>
                                Password trống hoặc không trùng khớp
                            </FormFeedback>
                        </FormGroup>
                    </Col>
                </Row>
                <FormGroup>
                    <Button color="success">Submit</Button>
                </FormGroup>
            </Form>
        );
    }
}

export default Register;