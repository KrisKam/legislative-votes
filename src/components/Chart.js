import React, {Component} from "react";
import {Bar} from "react-chartjs-2";


class Chart extends Component {
  
  render() {
    console.log("chart props", this.props.chartData.datasets)
    if (this.props.chartData.datasets === undefined) {
      return <h4>No final vote for this bill--see last action.</h4>
    } else {
    return (
      <div className="chart">
        <Bar
          data={this.props.chartData}
          options={{
            title: {
              display: true,
              text: `${this.props.chamber} Vote: ${this.props.billNumber} `,
              fontSize: 20,
              fontColor: "#012f54" 
            },
            legend: {
              display: true,
              position: "top"
            },
            scales: {
              xAxes: [{ stacked: true }],
              yAxes: [{ 
                stacked: true,
                ticks: {beginAtZero:true} 
              }]
            }
          }}
        />
      </div>
    )
  }
}
}

export default Chart;
