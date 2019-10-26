import React, { Component } from 'react';
import TabCategory from './Tab_Categories';
import Comment from '../comment/home';
import Layout from '../Customer'
import Review from '../post/ReviewList'

class Khampha extends Component {
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
        return (
            <Layout username={this.state.username} image={this.state.image}>
                <div className="mt-5">
                    <TabCategory />
                    {/* <Review/> */}
                    {/* <Comment /> */}
                </div>
            </Layout>
        );
    }
}

export default Khampha;