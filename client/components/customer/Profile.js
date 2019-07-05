import React, { Component } from 'react';
import Layout from '../Customer';
import FormEditProfile from '../Forms/FormEditProfile';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item:[],
            username:''
        }
    }
    componentDidMount() {
        let info = JSON.parse(localStorage.getItem('user'));
        console.log(info)
        this.setState({
            item:info,
            username:info[0].username
        })
        
    }
    render() {
        return (
            <Layout username={this.state.username}>
                <FormEditProfile item={this.state.item}/>
            </Layout>
        );
    }
}

export default Profile;