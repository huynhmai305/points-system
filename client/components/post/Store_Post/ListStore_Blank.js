import React, { Component } from 'react';
import Post from './Post_Store';
import {Row, Button, CardDeck} from 'reactstrap'
import Router from 'next/router'

class PostListBlank extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    filterData = data => {
        return data.filter(post => {
            return post.User != null
        })
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
            <div>
                <div className="mt-3">
                    <CardDeck>
                    {data.map((post,key) => (
                        <Post 
                            key={key} 
                            picture={post.User.picture}
                            name={post.User.username} 
                            address={post.User.address.slice(0,50)} 
                            type={post.type}
                            id_post={post.id}
                            href="/detail/"
                        />
                    ))}
                    </CardDeck>
                </div>
            </div>
        );
    }
}

export default PostListBlank;
