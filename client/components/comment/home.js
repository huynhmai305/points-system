import React, { Component } from 'react';
import Layout from '../Customer';
import {Container, Row, Col} from 'reactstrap';
import CommentList from './CommentList.js';
import CommentForm from './CommentForm.js'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username:'',
            image:'',
            comments: [],
            loading: false
        }
        this.addComment = this.addComment.bind(this);
    }
    addComment(comment) {
        this.setState({
          loading: false,
          comments: [comment, ...this.state.comments]
        });
    }
    componentDidMount() {
        var info = JSON.parse(localStorage.getItem('user'));
        this.setState({
          username:info[0].username,
          image:info[0].picture,
          loading: true
        })
        // this.setState({ loading: true });
        fetch("http://localhost:3000/comment")
        .then(response => response.json())
        .then(res => {
            this.setState({
                comments: res,
                loading: false
            });
        })
        .catch(err => {
            this.setState({loading: false})
        })
    }
    render() {
        return (
            <Layout username={this.state.username} image={this.state.image}>
                <Container>
                    <Row>
                        <Col md="4" className="border-right pt-3">
                        <CommentForm addComment={this.addComment}/>
                        </Col>
                        <Col sm="8" className="pt-3 bg-white">
                            <CommentList loading={this.state.loading} comments={this.state.comments}/>
                        </Col>
                    </Row>
                </Container>
            </Layout>
        );
    }
}

export default Home;