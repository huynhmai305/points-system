import React, { Component } from 'react';
import Comment from '../../components/comment/home';
import Post from '../../components/post/Post1'

class KhamPha extends Component {
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
            <div>
                <Post/>
                <Comment />
            </div>
        );
    }
}

export default KhamPha;