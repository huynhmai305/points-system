import React, { Component } from 'react';
import Layout from '../Customer'
import Card from './Card';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username:'',
      image:''
    }
  } 
  componentDidMount() {
    var info = JSON.parse(localStorage.getItem('user'));
    this.setState({
      username:info[0].username,
      image:info[0].picture
    })
  }
  render() {
    return (
      <Layout username={this.state.username} image={this.state.image}>
        <Card/>
      </Layout>
    );
  }
}

export default Home;