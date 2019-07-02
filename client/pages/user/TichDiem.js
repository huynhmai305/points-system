import React, { Component } from 'react';
import Layout from '../../components/layouts/Layout';
import TichDiemUser from '../../components/customer/Tichdiem';

class TichDiem extends Component {
    render() {
        return (
            <Layout title="Tich Diem">
                <TichDiemUser/>
            </Layout>
        );
    }
}

export default TichDiem;