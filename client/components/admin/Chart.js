import React, { Component } from 'react';
import {Line} from 'react-chartjs';

class Chart extends Component {
    render() {
        return (
            <div>
                <Line data={chartData} options={chartOptions} width="600" height="250"/>
            </div>
        );
    }
}

export default Chart;