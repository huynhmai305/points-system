import React, { Component } from 'react';
import { Bar, defaults } from 'react-chartjs-2';
defaults.global.maintainAspectRatio = false;

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
        datasets: [
          {
            label: 'Doanh số',
            backgroundColor: "#00B2BF",
            data: [2, 4, 3, 4, 6, 6, 7]
          },
          {
            label: 'Quà đổi thưởng',
            backgroundColor: "#103667",
            data: [2, 5, 3, 3, 2, 3, 4]
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'Biểu đồ thống kê tài chính của cửa hàng trên hệ thống',
          position: 'bottom',
          padding: 10
        },
        responsive: true,
        scales: {
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: "Doanh thu (triệu đồng)",
              fontFamily: "Montserrat",
              fontColor: "black",
            },
            ticks: {
              fontFamily: "Montserrat",
              min: 0,
            },
          }]
        }
      }
    }
  }

  render() {
    return (
      <div>
        <article className="container canvas-container" style={{ position: 'relative', height: '40vh', width: '80vw' }}>
          <Bar data={this.state.data} options={this.state.options} />
        </article>
      </div>
    );
  }
}

export default Chart;
