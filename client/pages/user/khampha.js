import React, { Component } from 'react';
import Khampha from '../../components/customer/Khampha';

class KhamPha extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      image: ''
    }
  }
  componentDidMount() {
    var info = JSON.parse(localStorage.getItem('user'));
    this.setState({
      username: info[0].username,
      image: info[0].picture
    })
  }
  render() {
    return (
      <div>
        <Khampha />
      </div>
    );
  }
}

export default KhamPha;
