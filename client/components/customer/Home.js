import React, { Component } from 'react';
import Layout from '../Customer';
import Card from '../post/Store_Post/PostListStore';
import Preferential from '../post/Preferential/Preferential_List';
import { Container } from 'reactstrap';
import News from '../post/News/ListNews';

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
            <div className="col-xs-12 col-md-12 col-lg-12 mb-3">
              <div className="mb-3">
                <h4 className="title"><span>Danh sách ưu đãi</span></h4>
              </div>
              <Preferential/>
            </div>
            <div className="col-xs-12 col-md-12 col-lg-12 mb-3">
              <div className="mb-3">
                <h4 className="title"><span>Danh sách cửa hàng</span></h4>
              </div>
              <Card type='all'/>
            </div>
            <div className="col-xs-12 col-md-12 col-lg-12 mb-3">
              <div className="mb-3">
                <h4 className="title"><span>Khách hàng nói gì về H&M</span></h4>
              </div>
              {/* <Card content="Content card"/> */}
            </div>
            <div className="col-xs-12 col-md-12 col-lg-12 mb-3">
              <div className="mb-3">
                <h4 className="title"><span>Tin tức</span></h4>
              </div>
              <News type="all"/>
            </div>
          </div>
        </Container>
      </Layout>
    );
  }
}

export default Home;
