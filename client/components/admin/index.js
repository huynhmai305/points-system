import React, { Component } from 'react';
import Card from './Card.js';
import Admin from './Admin.js';
import Chart from './Chart.js';
import Footer from '../layouts/Footer.js';

class Index extends Component {
   
    render() {
        return (
            <Admin title="Hệ thống tích điểm H&M">
                <Card />
                <div className="row">
                    <div className="offset-4 col-4 offset-4">
                        <img src="/static/images/tichdiem.jpg" alt="tichdiem" />
                    </div>
                </div>
                <Chart/>
            </Admin>
        );
    }
}

export default Index;