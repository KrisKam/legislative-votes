import React, {Component} from "react";
import {Bar, Pie} from "react-chartjs-2";


class Chart extends Component {

    state = {
      chartData: this.props.chartData
    }

  
  render() {
    console.log(this.props.billNumber)
    return (
      <div className="chart">
        <Bar
          data={this.state.chartData}
          options={{
            title: {
              display: true,
              text: `${this.props.chamber} Vote: ${this.props.billNumber} `,
              fontSize: 25,
              fontColor: "#012f54" 
            },
            legend: {
              display: true,
              position: "top"
            },
            scales: {
              xAxes: [{ stacked: true }],
              yAxes: [{ stacked: true }]
            }
          }}
        />
      </div>
    )
  }
}

export default Chart;
