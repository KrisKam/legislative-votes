import React, {Component} from "react";
import {Container, Row, Col, Table, Card, CardBody} from "reactstrap";
import {Link} from "react-router-dom";
import Chart from "./Chart";


class Bill extends Component {

  state = {
    bill: null,
    chartDataSenate: {},
    chartDataHouse: {},
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
    if (result[0] === undefined) { 
      console.log("false")
      return
    }
    let billNumber = result[0].bill;
    let votes = {};
    result.forEach(voteCount => {
      let place = "";
      place = place + voteCount.chamber; //place = Senate
      place = place + voteCount.party; //place = SenateRepublican
      place = place + voteCount.vote; //place = SenateRepublicanY
      votes[place] = voteCount.count; //SenateRepublicanY: 2
    })
    this.setChartDataState(votes, billNumber);
  }
  
  setChartDataState(votes, billNumber) {
    this.setState({
      billNumber: billNumber,
      chartDataSenate: {
        labels: ["Yes", "No", "Excused"],
        datasets: [
          {
            label: "Democrats",
            data: [votes.SenateDemocratY, votes.SenateDemocratN, votes.SenateDemocratE],
            backgroundColor: "#1394b3"
          },
          {
            label: "Republicans",
            data: [votes.SenateRepublicanY, votes.SenateRepublicanN, votes.SenateRepublicanE],
            backgroundColor: "#d32729"
          },
          {
            label: "Unaffiliated",
            data: [votes.SenateUnaffiliatedY, votes.SenateUnaffiliatedN, votes.SenateUnaffiliatedE],
            backgroundColor: "#2ad327"
          }
        ],
      },
      chartDataHouse: {
        labels: ["Yes", "No", "Excused"],
        datasets: [
          {
            label: "Democrats",
            data: [votes.HouseDemocratY, votes.HouseDemocratN, votes.HouseDemocratE],
            backgroundColor: "#1394b3"
          },
          {
            label: "Republicans",
            data: [votes.HouseRepublicanY, votes.HouseRepublicanN, votes.HouseRepublicanE],
            backgroundColor: "#d32729"
          },
          {
            label: "Unaffiliated",
            data: [votes.HouseUnaffiliatedY, votes.HouseUnaffiliatedN, votes.HouseUnaffiliatedE],
            backgroundColor: "#2ad327"
          }
        ],
      }
    })
  }

  render() {

    const {bill} = this.state; 
    const {chartDataSenate} = this.state;
    const {chartDataHouse} = this.state;
    const {billNumber} = this.state;

    const createBillPage = this.state.bill ? (
      <section className="Bill-section">
        <Link to={bill.bill_url}>
          <h3 className="mt-3 Bill-h2">{bill.bill}</h3>
        </Link>
        <h4>{bill.title}</h4> 
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
    
    const createCharts = this.state.chartDataSenate && this.state.chartDataHouse ? (
      <section>
        <h4 className="mb-4">Final Votes</h4>
        <Row className="justify-content-md-center">
        <Col md="5">
          <Card>
            <CardBody>
            <Chart chartData={chartDataSenate} billNumber={billNumber} chamber="Senate"/>
            </CardBody>
          </Card>
        </Col>
        <Col md="5">
          <Card>
            <CardBody>
            <Chart chartData={chartDataHouse} billNumber={billNumber} chamber="House"/>
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
