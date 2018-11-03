import React, {Component} from "react";
import {Bar} from "react-chartjs-2";


class Chart extends Component {
  
  render() {

    return (
      <div className="chart">
        <Bar
          data={this.props.chartData}
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

export default Chart;
