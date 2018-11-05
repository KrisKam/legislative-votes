import React, {Component} from "react";
import {Container, Row, Col, Card, CardBody} from "reactstrap";
import Chart from "./Chart";


class CreateCharts extends Component {

    createCharts(data) {
      return data.chartDataSenate && data.chartDataHouse ? (
      <section>
        <h4 className="mb-4">{this.props.legislator} voted: {this.props.vote}</h4>
        <Row className="justify-content-md-center">
        <Col md="5">
          <Card>
            <CardBody>
            <Chart chartData={data.chartDataSenate} billNumber={this.props.billNum} chamber="Senate"/>
            </CardBody>
          </Card>
        </Col>
        <Col md="5">
          <Card>
            <CardBody>
            <Chart chartData={data.chartDataHouse} billNumber={this.props.billNum} chamber="House"/>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </section>
    ) : (
      <div className="center">Chart Data Loading</div>
    )
  }

  render() {
    return (
      <Container className="bg-white my-4 text-center p-4">
        {this.createCharts(this.props.data)}
      </Container>
    );
  }
}

export default CreateCharts;
