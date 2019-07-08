import React, { Component } from 'react';
import {Line, defaults} from 'react-chartjs-2';
defaults.global.maintainAspectRatio = false;

class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : {
                labels: [
                  'Tháng 1', 'Tháng 2', 
                  'Tháng 3', 'Tháng 4', 
                  'Tháng 5', 'Tháng 6', 
                  'Tháng 7', 'Tháng 8', 
                  'Tháng 9', 'Tháng 10', 
                  'Tháng 11','Tháng 12', 
                ],
                datasets: [
                  {
                    label: 'Nguồn thu',
                    backgroundColor: "rgba(255, 0, 255, 0.75)",
                    data: [4, 5, 1, 10, 32, 2, 12, 23, 15, 31, 10, 32, 7, 30, 46, 30, 50],
                  
                  },
                  {
                    label: 'Nguồn chi',
                    backgroundColor: "rgba(0, 255, 0, 0.75)",
                    data: [14, 15, 21, 0, 12, 17, 2, 10, 40, 23, 1, 12, 5, 40, 25],
                  
                  }
                ]
            }
        }
    }
    setGradientColor = (canvas, color) => {
        const ctx = canvas.getContext('2d');
        const gradient = ctx.createLinearGradient(0,0,500,1000);
        gradient.addColorStop(0, color);
        gradient.addColorStop(0.95, "rgba(133, 122, 144, 0.5"); 
        return gradient;                          
    }
    getChartData = canvas => {
        const data = this.state.data;
        if(data.datasets){
            let colors = ["rgba(255, 0, 255, 0.75)", "rgba(0, 255, 0, 0.75)"];
            data.datasets.forEach((set, i) => {
                set.backgroundColor = this.setGradientColor(canvas, colors[i]);
                set.borderColor = "white";
                set.borderWidth = 2;
            });
        }
        return data;
    }
    
    render() {
        return (
            <div>
                <article className="container canvas-container">
                    <Line data={this.getChartData} option={{responsive: true}}/>
                </article>
            </div>
        );
    }
}

export default Chart;