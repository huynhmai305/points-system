import React, { Component } from './node_modules/react';
import Layout from '../customer'
import Card from './card';

class Home extends Component {
  render() {
    return (
      <Layout username={this.props.name}>
        <Card/>
      </Layout>
    );
  }
}

export default Home;