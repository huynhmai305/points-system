import React, { Component } from 'react';
import Detail from '../post/Store_Post/Post_Detail_Store'
import Back from '../Button_GoBack/GoBack'
import Layout from '../Customer'

class PostDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            image: '',
            loading: false
        }
    }
    componentDidMount() {
        var info = JSON.parse(localStorage.getItem('user'));
        this.setState({
            username: info[0].username,
            image: info[0].picture,
            loading: true
        })
    }
    render() {
        const {title, content, createdAt, image} = this.props
        return (
            <Layout username={this.state.username} image={this.state.image}>
                <div className="mt-3">
                    <Back path='/user'/>
                    <Detail title={title} content={content} createdAt={createdAt} image={image}/>
                </div>
            </Layout>
        );
    }
}

export default PostDetail;
