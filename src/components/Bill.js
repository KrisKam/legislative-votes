import React, {Component} from "react";
import {Container, Row, Col, Table, Card, CardBody} from "reactstrap";
import {Link} from "react-router-dom";
import Chart from "./Chart";


class Bill extends Component {

  state = {
    bill: null,
    chartData: {},
    billNumber: null,
  }

  componentDidMount() {
    this.getBillData();
    this.getChartData();
  }

  getBillData() {
    let billId = this.props.match.params.bill;
    // return fetch(`http://localhost:5555/bills/${billId}`)
    return fetch(`https://legislative-tracker.herokuapp.com/bills/${billId}`)
      .then(result => result.json())
      .then(result => {
        this.setState(
          {
            bill: result[0]
          }
        )
        // console.log("bill: ", result[0])
      })
  }

  getChartData() {
    let billId = this.props.match.params.bill;
    return fetch(`https://legislative-tracker.herokuapp.com/votes/${billId}`)
      .then(result => result.json())
      .then(result => this.setChartData(result))
  }

  setChartData(result) {
    console.log("billpage setCD: ", result)
    let billNumber = result[0].bill;
    let demY = 0;
    let demN = 0;
    let demE = 0;
    let repY = 0;
    let repN = 0;
    let repE = 0;
    let unY = 0;
    let unN = 0;
    let unE = 0;
    result.forEach(voteCount => {
      console.log("billNumber ", billNumber);
      if (voteCount.chamber === "Senate" && voteCount.party === "Democrat" && voteCount.vote === "Y") {
        demY = voteCount.count;
      } else if (voteCount.chamber === "Senate" && voteCount.party === "Democrat" && voteCount.vote === "N") {
        demN = voteCount.count;
      } else if (voteCount.chamber === "Senate" && voteCount.party === "Democrat" && voteCount.vote === "E") {
        demE = voteCount.count;
      } else if (voteCount.chamber === "Senate" && voteCount.party === "Republican" && voteCount.vote === "Y") {
        repY = voteCount.count;
      } else if (voteCount.chamber === "Senate" && voteCount.party === "Republican" && voteCount.vote === "N") {
        repN = voteCount.count;
      } else if (voteCount.chamber === "Senate" && voteCount.party === "Republican" && voteCount.vote === "E") {
        repE = voteCount.count;
      } else if (voteCount.chamber === "Senate" && voteCount.party === "Unaffiliated" && voteCount.vote === "Y") {
        unY = voteCount.count;
      } else if (voteCount.chamber === "Senate" && voteCount.party === "Unaffiliated" && voteCount.vote === "N") {
        unN = voteCount.count;
      } else if (voteCount.chamber === "Senate" && voteCount.party === "Unaffiliated" && voteCount.vote === "E") {
        unE = voteCount.count;
      } else if (voteCount.chamber === "House" && voteCount.party === "Democrat" && voteCount.vote === "Y") {
        demY = voteCount.count;
      } else if (voteCount.chamber === "House" && voteCount.party === "Democrat" && voteCount.vote === "N") {
        demN = voteCount.count;
      } else if (voteCount.chamber === "House" && voteCount.party === "Democrat" && voteCount.vote === "E") {
        demE = voteCount.count;
      } else if (voteCount.chamber === "House" && voteCount.party === "Republican" && voteCount.vote === "Y") {
        repY = voteCount.count;
      } else if (voteCount.chamber === "House" && voteCount.party === "Republican" && voteCount.vote === "N") {
        repN = voteCount.count;
      } else if (voteCount.chamber === "House" && voteCount.party === "Republican" && voteCount.vote === "E") {
        repE = voteCount.count;
      } else if (voteCount.chamber === "House" && voteCount.party === "Unaffiliated" && voteCount.vote === "Y") {
        unY = voteCount.count;
      } else if (voteCount.chamber === "House" && voteCount.party === "Unaffiliated" && voteCount.vote === "N") {
        unN = voteCount.count;
      } else {
        unE = voteCount.count;
      }
    })
    this.setChartDataState(demY, demN, demE, repY, repN, repE, unY, unN, unE, billNumber)
  }

  setChartDataState(demY, demN, demE, repY, repN, repE, unY, unN, unE, billNumber) {
    this.setState({
      billNumber: billNumber,
      chartData: {
        labels: ["Yes", "No", "Excused"],
        datasets: [
          {
            label: "Democrats",
            data: [demY, demN, demE],
            backgroundColor: "#1394b3"
          },
          {
            label: "Republicans",
            data: [repY, repN, repE],
            backgroundColor: "#d32729"
          },
          {
            label: "Unaffiliated",
            data: [unY, unN, unE],
            backgroundColor: "#2ad327"
          }
        ],
      }
    })
    console.log("chart! ", this.state.chartData)
  }

  render() {

    const {bill} = this.state; 
    const {chartData} = this.state;
    const {billNumber} = this.state;
    console.log("chartData render :", chartData)

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
            <Chart chartData={chartData} billNumber={billNumber} chamber="Senate"/>
            </CardBody>
          </Card>
        </Col>
        <Col md="5">
          <Card>
            <CardBody>
            <Chart chartData={chartData} billNumber={billNumber} chamber="House"/>
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
