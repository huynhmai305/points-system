import React, { Component } from 'react';
import { Line, defaults } from 'react-chartjs-2';
import moment from 'moment'
defaults.global.maintainAspectRatio = false;

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      labels: '',
      datasets: '',
      data: {
        labels: [],
        datasets: []
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
              // labelString: "Số lượng ",
              fontFamily: "Montserrat",
              fontColor: "black",
            }
          }],
          xAxes: [{
            title: "time",
            type: 'time',
            gridLines: {
              lineWidth: 2
            },
            // time: {
            //   unit: "day",
            //   unitStepSize: 10,
            //   displayFormats: {
            //     day: 'DD/MM/YYYY',
            //   },
            //   // max: moment(data.end_date).format('MM'),
            //   // min: monent(data.start_date).format('MM')
            // }
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

  getDataBill() {
    fetch('http://localhost:3000/getbillchart')
      .then(res => res.json())
      .then(items => {
        console.log('item received', items)
        items.map((val,key) => {
          key={key}
          this.setState({
            datasets: parseInt(val.bills),
            labels: val.date
          })
          this.state.data.labels.push(this.state.labels)
          this.state.data.datasets.push(this.state.datasets)
          console.log(this.state.data)
        })
      })
  }

  componentDidMount() {
    this.getDataBill()
  }
  render() {
    return (
      <div >
        {this.state.data.length &&
          <article className="container canvas-container" style={{ position: 'relative', height: '40vh', width: '80vw' }}>
            <Line data={this.getChartData} options={this.state.options} />
          </article>
        }
      </div>
    );
  }
}

export default Chart;
