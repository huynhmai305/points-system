import Swal from 'sweetalert2'
import React, { Component } from 'react';

class Test_State extends Component {
  a(){
    Swal.fire("abc","","success")
  }
  render() {
    return (
      <div>
        <button onClick={()=>this.a()}>click</button>
      </div>
    );
  }
}

export default Test_State;
