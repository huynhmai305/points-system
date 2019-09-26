import React, { Component } from 'react';
import Post from './Post_Store'
import {Row} from 'reactstrap'
const img = ['/static/images/1.jpg','/static/images/4.jpg']

class PostList extends Component {
    render() {
        return (
            <Row>
                {img.map(img => (
                    <Post image={img}/>
                ))}
                
            </Row>
        );
    }
}

export default PostList;