import React from "react";
import Box from '../components/layouts/Box'
import Layout from '../components/layouts/AdminLayout'
export default class Download extends React.Component {
    render() {
        return (
            <Layout contentTitle={'Add User'} contentTitleButton={<i className="fa fa-2x fa-user-plus"/>} url={this.props.url}>
                <Box/>
            </Layout>
            
        );
    }
}
