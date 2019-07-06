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
    var info = JSON.parse(localStorage.getItem('user'));
    this.setState({username:info[0].username})
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