import React, { Component } from 'react';
import Layout from '../Customer';
import Card from './Card';
import { Container } from 'reactstrap';
const list = ['Danh sách ưu đãi', 'Danh sách cửa hàng', 'Khách hàng nói gì về H&M', 'Tin tức']

class Home extends Component {
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
      <Layout username={this.state.username} image={this.state.image}>
        <Container className="mt-5">
          <div className="row">
            {list.map((item,key) => (
            <div className="col-xs-12 col-md-12 col-lg-12 mb-3" key={key}>
              <div className="mb-3">
                <h4 className="title"><span>{item}</span></h4>
              </div>
              <Card content="Content card"/>
            </div>
            ))}
          </div>
        </Container>
      </Layout>
    );
  }
}

export default Home;