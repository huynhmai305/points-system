import React, { Component } from 'react';
import ManagerPost from '../post/PostManager/ManagerPost_Store'
import {Container} from 'reactstrap'
import Layout from '../Store'

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      image: '',
    }
  }
  
  componentDidMount() {
    var info = JSON.parse(localStorage.getItem('user'));
    console.log(info)
    this.setState({
      id: info[0].id,
      name: info[0].username,
      image: info[0].picture
    })
  }
  render() {
    return (
      <Layout username={this.state.name} image={this.state.image}>
        <Container>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/admin">Trang chủ</a>
            </li>
            <li className="breadcrumb-item active">Quản lý bài viết</li>
          </ol>
          <ManagerPost/>
        </Container>
      </Layout>
    );
  }
}

export default Post;
