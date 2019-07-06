import React, { Component } from 'react';
import Layout from '../Customer'
import Card from './Card';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    }
  } 
  componentDidMount() {
    var user = JSON.parse(localStorage.getItem('user'));
    this.setState({name:user[0].username})
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