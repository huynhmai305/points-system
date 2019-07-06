import React, { Component } from 'react';
import Layout from '../Customer'
import Card from './Card';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username:''
    }
  } 
  componentDidMount() {
<<<<<<< HEAD
    var user = JSON.parse(localStorage.getItem('user'));
    this.setState({name:user[0].username})
=======
    var info = JSON.parse(localStorage.getItem('user'));
    this.setState({username:info[0].username})
>>>>>>> aecd1c2d41d6ecb31dadae6a64eeb5913d18697e
  }
  render() {
    return (
      <Layout username={this.state.username}>
        <Card/>
      </Layout>
    );
  }
}

export default Home;