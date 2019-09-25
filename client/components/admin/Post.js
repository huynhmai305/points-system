import React, { Component } from 'react';
import ManagerPost from '../post/ManagerPost';
import Admin from './Admin';

class Post extends Component {
    render() {
        return (
            <Admin title="Hệ thống tích điểm H&M">
                <ManagerPost/>
            </Admin>
        );
    }
}

export default Post;