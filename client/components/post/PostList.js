import React, { Component } from 'react';
import Post from './Post_Store'
import {Row} from 'reactstrap'
const img = ['/static/images/1.jpg','/static/images/4.jpg']

class PostList extends Component {
    render() {
        return (
            <Row>
                {img.map((img,key) => (
                    <Post image={img} key={key}/>
                ))}
                
            </Row>
        );
    }
}

export default PostList;