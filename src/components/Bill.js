import React, {Component} from "react";
import {Container, Row, Col, Table, Card, CardBody} from "reactstrap";
import {Link} from "react-router-dom";
import Chart from "./Chart";


class Bill extends Component {

  state = {
    bill: null,
    chartData: {}
  }

  componentDidMount() {
    this.getBillData();
    this.getChartData();
  }

  getBillData() {
    let id = this.props.match.params.post_id;
    return fetch(`http://localhost:5555/bills/${id}`)
      .then(result => result.json())
      .then(result => {
        this.setState(
          {
            bill: result[0]
          }
        )
        console.log("bill: ", result[0])
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

    const {bill} = this.state; 
    const {chartData} = this.state;

    const createBillPage = this.state.bill ? (
      <section className="Bill-section">
        <Link to={bill.bill_url}>
          <h2 className="mt-3 Bill-h2">{bill.bill}</h2>
        </Link>
        <h3>{bill.title}</h3> 
        <Row>
        <Col sm="1"></Col>
        <Col sm="10">
        <Table className="table table-bordered text-left my-4 responsive">
          <tbody>
            <tr>
              <th>Sponsors:</th>
              <td>{bill.sponsors}</td>
              <th>Subjects:</th>
              <td>{bill.subject}</td>
            </tr>
            <tr>
              <th>Summary:</th>
              <td colSpan="3">{bill.description}</td>
            </tr>
            <tr>
              <th>Last Action:</th>
              <td colSpan="3">{bill.last_action}</td>
            </tr>
          </tbody>
        </Table>
        </Col>
        <Col sm="1"></Col>
        </Row>
        {/* <Row className="justify-content-md-center">
          <Col md="5">
            <Card>
              <CardBody>
               <Chart chartData={this.state.chartData} billNumber="SB18-1002" chamber="Senate"/>
              </CardBody>
            </Card>
          </Col>
          <Col md="5">
            <Card>
              <CardBody>
               <Chart chartData={this.state.chartData} billNumber="SB18-1002" chamber="House"/>
              </CardBody>
            </Card>
          </Col>
        </Row> */}
      </section>
    ) : (
      <div className="center">Post Loading</div>
    )

    const createCharts = this.state.chartData ? (
      <section>
        <h4 className="mb-4">Final Votes</h4>
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
      <Container className="bg-white my-4 text-center p-4">
        {createBillPage}
        {createCharts}
      </Container>
    )
  }
}

export default Bill;
