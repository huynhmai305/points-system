import React, { Component } from 'react';
import { Line, defaults } from 'react-chartjs-2';
defaults.global.maintainAspectRatio = false;

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        labels: [
          'Tháng 1', 'Tháng 2',
          'Tháng 3', 'Tháng 4',
          'Tháng 5', 'Tháng 6',
          'Tháng 7', 'Tháng 8',
          'Tháng 9', 'Tháng 10',
          'Tháng 11', 'Tháng 12',
        ],
        datasets: [
          {
            label: 'Hóa đơn tích điểm',
            backgroundColor: "#OOACE9",
            data: [32, 42, 49, 33, 47, 36, 20, 37, 30, 25, 30, 50],

          },
          {
            label: 'Quà đổi thưởng',
            backgroundColor: "#D43F3F",
            data: [14, 32, 60, 50, 35, 32, 33, 40, 42, 15, 40, 25],
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'Biểu đồ thống kê doanh số tich điểm đôỉ quà',
          position: 'bottom',
          padding: 10
        },
        responsive: true,
        scales: {
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: "Số lượng",
              fontFamily: "Montserrat",
              fontColor: "black",
            }
          }]
        }
      }
    }
  }
  setGradientColor = (canvas, color) => {
    const ctx = canvas.getContext('2d');
    const gradient = ctx.createLinearGradient(0, 0, 700, 1000);
    gradient.addColorStop(0, color);
    gradient.addColorStop(0.95, "#cc65fe");
    return gradient;
  }
  getChartData = canvas => {
    const data = this.state.data;
    if (data.datasets) {
      let colors = ["rgba(82, 139, 139, 0.75)", "rgba(128, 0, 0, 0.75)"];
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
      <div >
        <article className="container canvas-container" style={{ position: 'relative', height: '40vh', width: '80vw' }}>
          <Line data={this.getChartData} options={this.state.options} />
        </article>
      </div>
    );
  }
}

export default Chart;
