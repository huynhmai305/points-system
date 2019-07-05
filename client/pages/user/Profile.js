import React, { Component } from 'react';
import Layout from '../../components/layouts/Layout';
import ProfileUser from '../../components/customer/Profile';

class Profile extends Component {

    render() {
        return (
            <Layout title="Profile">
                <ProfileUser/>
            </Layout>
        );
    }
}

export default Profile;