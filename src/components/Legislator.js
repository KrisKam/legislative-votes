import React, {Component} from "react";
import {Container, Row, Col, Card, CardBody} from "reactstrap";
// import {Link} from "react-router-dom";
import Chart from "./Chart";


class Legislator extends Component {

  state = {
    legislator: null,
    chartData: {}
  }

  componentDidMount() {
    this.getLegislatorData()
    this.getChartData();
  }

  getLegislatorData() {
    let id = this.props.match.params.post_id;
    return fetch(`http://localhost:5555/legislators/${id}`)
      .then(result => result.json())
      .then(result => {
        this.setState(
          {
            legislator: result[0]
          }
        )
        console.log("legislator: ", result[0])
      })
  }
  getChartData() {


    // // temp data for now
    // this.setState({
    //   chartData: {
    //     labels: ["Yes", "No", "Excused"],
    //     datasets: [
    //       {
    //         label: "Democrats",
    //         data: [10, 10, 2],
    //         backgroundColor: "#1394b3"
    //       },
    //       {
    //         label: "Republicans",
    //         data: [10, 10, 2],
    //         backgroundColor: "#d32729"
    //       },
    //       {
    //         label: "Unaffiliated",
    //         data: [0, 1, 0],
    //         backgroundColor: "#2ad327"
    //       }
    //     ],
    //   }
    // })
  }

  render() {
    const {legislator} = this.state;
    const {chartData} = this.state;
    console.log(legislator);
    const createLegislatorCard = this.state.legislator ? (
      <section>
        <h2 className="m-3"><span className="Legislator-h2-font">{legislator.title}</span> {legislator.full_name}</h2>
        <Row className="my-4">
          <Col sm="3">
            <img src={legislator.headshot} alt={legislator.full_name + "Headshot"} className="Legislator-img"/>
          </Col>
          <Col sm="8" className="text-left bg-light">
            <Row className="py-2">
              <Col><span className="Legislator-col-font">Chamber:  </span> {legislator.chamber}</Col>
            </Row>
            <Row className="py-2">
              <Col><span className="Legislator-col-font">Occupation:  </span> {legislator.occupation}</Col>
            </Row>
            <Row className="py-2">
              <Col><span className="Legislator-col-font">Party:  </span>{legislator.party}</Col>
              <Col><span className="Legislator-col-font">District:  </span>{legislator.district}</Col>
            </Row>
            <Row className="py-2">
              <Col><span className="Legislator-col-font">Email:  </span>{legislator.email}</Col>
              <Col><span className="Legislator-col-font">Phone:  </span>{legislator.phone}</Col>
            </Row>
          </Col>
        </Row>
      </section>
    ) : (
      <div className="center"> Post Loading</div>
    )

    const createCharts = this.state.chartData ? (
      <section>
        <h4 className="mb-4">Votes</h4>
        <Row className="justify-content-md-center">
        <Col md="5">
          <Card>
            <CardBody>
            <Chart chartData={chartData} billNumber="SB18-1002" chamber="Senate"/>
            </CardBody>
          </Card>
        </Col>
        <Col md="5">
          <Card>
            <CardBody>
            <Chart chartData={chartData} billNumber="SB18-1002" chamber="House"/>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </section>
    ) : (
      <div className="center">Chart Data Loading</div>
    )

    return (
      <Container className="bg-white my-4 text-center p-4 Legislator-font">
        {createLegislatorCard}
        {createCharts}
      </Container>
    )
  }
}

export default Legislator;