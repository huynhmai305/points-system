import React, { Component } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class Register extends Component {
    render() {
        return (
            <Form>
                <FormGroup>
                    <Label for="username">Họ tên</Label>
                    <Input type="text" name="username" id="username" placeholder="Nhập tên" />
                </FormGroup>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="birthday">Ngày sinh</Label>
                            <Input type="date" name="birthday" id="birthday" placeholder="Nhập ngày sinh" />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="phone">Số điện thoại</Label>
                            <Input 
                                type="text" 
                                name="phone" 
                                id="phone" 
                                placeholder="Nhập số điện thoại" 
                               />
                        </FormGroup>
                    </Col>
                </Row>
                <FormGroup>
                    <Label for="address">Địa chỉ</Label>
                    <Input type="text" name="address" id="address" placeholder="Nhập địa chỉ" />
                </FormGroup>
                <FormGroup>
                            <Label for="email">Email</Label>
                            <Input type="email" name="email" id="email" placeholder="Nhập email" />
                        </FormGroup>
                <Row form>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="password1">Password</Label>
                            <Input type="password" name="password1" id="password1" placeholder="Nhập password" />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="password2">Nhập lại password</Label>
                            <Input type="password" name="password2" id="password2" placeholder="Nhập lại password" />
                        </FormGroup>
                    </Col>
                </Row>
                <FormGroup>
                    <Label for="picture">Chọn ảnh đại diện</Label>
                    <Input type="file" name="picture" id="picture" />
                </FormGroup>
                <FormGroup check inline>
                    <Label check>
                        <Input type="radio" name="role" />{' '}
                        Cửa hàng
                    </Label>
                </FormGroup>
                <FormGroup check inline>
                    <Label check>
                        <Input type="radio" name="role" />{' '}
                        Khách hàng
                    </Label>
                </FormGroup>
            </Form>
        );
    }
}

export default Register;