import React, { Component } from 'react';
import Card from './card.js';
import Admin from './Admin.js';
import Chart from './Chart.js';

class Index extends Component {  
    render() {
        return (
            <Admin title="Hệ thống tích điểm H&M">
                <Card />
                <div style={{margin:"15px"}}>
                    <Chart/>
                </div>                
            </Admin>
        );
    }
}

export default Index;