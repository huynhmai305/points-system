import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input,FormFeedback } from 'reactstrap';

class ModalExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        modal: false,
        id:'',
        password: '',
        password2: '',
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
        modal: !prevState.modal
        }));
    }
    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
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
                password: this.state.password
            })
        })
        .then(response => response.json())
        .then(item => {
            alert(`Chỉnh sửa thành công `);
            location.reload()
        })
        
    }
    componentDidMount() {
        var info = JSON.parse(localStorage.getItem('user'));
        console.log(info)
        this.setState({
            id:info[0].id
        });
    }
    render() {
        return (
            <div>
                <Button color="danger" onClick={this.toggle}>Đổi mật khẩu</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>Đổi mật khẩu</ModalHeader>
                <ModalBody>
                    <Form onSubmit={this.submitFormEdit}>
                        <FormGroup>
                            <Label for="password1">Password</Label>
                            <Input type="password"
                                name="password"
                                id="password1"
                                placeholder="Nhập password"
                                onChange={this.onChange}
                                value={this.state.password}
                                required
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="password2">Xác nhận password</Label>
                            <Input
                                type="password"
                                name="password2"
                                id="password2"
                                placeholder="Nhập lại password"
                                onChange={this.onChange}
                                value={this.state.password2}
                                valid={this.state.password === this.state.password2 && this.state.password2 !== ''}
                                invalid={this.state.password !== this.state.password2 }
                                required
                            />
                            <FormFeedback valid>
                                Nhập password trùng khớp
                            </FormFeedback>
                            <FormFeedback>
                                Password không trùng khớp
                            </FormFeedback>
                        </FormGroup>
                        <Button color="success">Submit</Button>
                    </Form>
                </ModalBody>
            </Modal>
      </div>
    );
  }
}

export default ModalExample;