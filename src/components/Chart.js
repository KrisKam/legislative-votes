import React, {Component} from "react";
var Chart = require("chart.js");
var myChart = new Chart(ctx, {...});


class Chart extends Component {

  var ctx = "myChart";
  
  render() {
    
    var ctx = document.getElementById("myChart");

    // Chart.defaults.global.defaultFontSize= 18;
    // Chart.defaults.global.defaultFontColor= "#000";

    var myChart = new Chart(ctx, {
        type: "bar",
        data: {
            labels: ["Yes", "No", "Excused"],
            datasets: [{
                label: "# of Votes",
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    "yello",
                    "orange",
                    "green"
                ],
                borderColor: "#777",
                borderWidth: 1
            }]
        },
        options: {
            title: {
              display: true,
              text: "Final Vote",
              fontsize: 25
            },
            legend: {
              display: false,
              position: "top"
            }, 
            // layout: {
            //   padding: {
            //     left: 10,
            //     right: 10,
            //     bottom: 0,
            //     top: 0
            //   }
            // },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    });

    return (
      <div>

        <canvas id="myChart" width="400" height="400"></canvas>
        
      </div>
    )
  }
}
