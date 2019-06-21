import React, { Component } from 'react';
import {Bar, Line, Pie} from ''

class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            chartData: {
               labels: ['Boston', 'Cambridge', 'New Bedford'],
               datasets: [
                   {
                       label: 'Population',
                       data: [123,213,312]
                   }
               ],
               backgroundColor:[
                   'rgba(255,99,132,0.6)',
                   'rgba(54,162,235,0.6)',
                   'rgba(255,206,86,0.6)',
                   'rgba(75,192,192,0.6)',
                   'rgba(153,102,255,0.6)',
                   'rgba(255,159,64,0.6)',
                   'rgba(255,99,132,0.6)'
               ],
               borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }
        };
    }
    static defaultProps = {
        displayTitle:true,
        displayLengend:true,
        legendPosition:'right'
    }
    render(){
        return(
           <div className="chart">
                <Bar
                    data={this.state.chartData;}
                    option={{
                        title:{
                            display:this.props.displayTitle,
                            text:'abcd',
                            fontSize:25
                        },
                        legend:{
                            display:this.props.displayLegend,
                            position:this.props.legendPosition
                        }
                    }}
                />
           </div> 
        )
    }
export default Chart;