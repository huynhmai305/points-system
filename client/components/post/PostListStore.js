import React, { Component } from 'react';
import Post from './Post_Store'
import {Row} from 'reactstrap'

class PostList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    filterData = data => {
        if(this.props.type == 'all') {
            return data.filter(post => {
                return post.User != null
            })
        } else {
            return data.filter(post => {
                return post.User != null && post.type == this.props.type
            })
        }
    }
    getPost() {
        fetch('http://localhost:3000/users/post')
        .then(res => res.json())
        .then(data => {
            const post = this.filterData(data)
            this.setState({data: post})
        })
        .catch(console.error('Khong tim thay ket qua'))
    }
    componentDidMount() {
        this.getPost()
    }
    render() {
        const {data} = this.state
        return (
            <Row className="mt-3">
                <h5 className="col-12">Có {data.length} kết quả phù hợp</h5>
                {data.map((post,key) => (
                    <Post 
                        key={key} 
                        picture={post.User.picture}
                        name={post.User.username} 
                        address={post.User.address.slice(0,50)} 
                        type={post.type}
                    />
                ))}
                
            </Row>
        );
    }
}

export default PostList;