
import React, { Component } from 'react';
import dynamic from 'next/dynamic'
const SweetAlert = dynamic(()=> import('react-bootstrap-sweetalert'))
class Test_State extends Component {
  render() {
    return (
      <div>
        <SweetAlert 
          success 
          title="Đăng nhập thành công"
          onConfirm={this.onConfirm}
          onCancel={this.onCancel}
          confirmBtnBsStyle="success"
        />
      </div>
    );
  }
}

export default Test_State;
