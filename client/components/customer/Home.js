import React, { Component } from 'react';
import Layout from '../Customer'
import Card from './Card';
var user = localStorage.getItem('name');

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: user
    }
  } 
  render() {
    return (
      <Layout username={this.state.name}>
        <Card/>
      </Layout>
    );
  }
}

export default Home;