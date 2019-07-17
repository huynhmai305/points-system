import React, { Component } from 'react';
import {Bar, defaults} from 'react-chartjs-2';
defaults.global.maintainAspectRatio = false;

class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : {
                labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
                datasets: [
                  {
                    label: 'Doanh số',
                    backgroundColor: "rgba(153,255,51)",
                    data: [42, 49, 33, 47, 36, 33, 37]                  
                  },
                  {
                    label: 'Quà đổi thưởng',
                    backgroundColor: "rgba(255,153,0)",
                    data: [32, 59, 35, 35, 32, 33, 40]
                  }
                ]
            }
        }
    }
    
    render() {
        return (
            <div>
                <article className="container canvas-container" style={{height:'40vh'}}>
                    <Bar data={this.state.data} option={{responsive: true}}/>
                </article>
            </div>
        );
    }
}

export default Chart;