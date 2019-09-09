import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import Login from '../Login';
import Register from '../Register';

class ModalLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            nestedModal: false,
            closeAll: false
        };
        this.toggle = this.toggle.bind(this);
        this.toggleNested = this.toggleNested.bind(this);
        this.toggleAll = this.toggleAll.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    toggleNested() {
        this.setState({
            nestedModal: !this.state.nestedModal,
            closeAll: false
        });
    };

    toggleAll() {
        this.setState({
            nestedModal: !this.state.nestedModal,
            closeAll: true
        });
    };

    render() {
        return (
            <div>
                <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel} <i className="fas fa-sign-in-alt"></i></Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Đăng nhập</ModalHeader>
                    <ModalBody>
                        <Login />
                        <br />
                        <Button color="info" className="float-right" onClick={this.toggleNested}>Đăng ký</Button>
                        <Modal isOpen={this.state.nestedModal} toggle={this.toggleNested} onClosed={this.state.closeAll ? this.toggle : undefined} >
                            <ModalHeader toggle={this.toggle}>Đăng ký</ModalHeader>
                            <ModalBody>
                                <Register />
                            </ModalBody>
                        </Modal>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default ModalLogin;