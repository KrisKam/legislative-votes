import React, {Component} from "react";
import {Container, Row, Col, Table} from "reactstrap";
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
    //fetch call here, temp data for now
    this.setState({
      chartData: {
        labels: ["Yes", "No", "Excused"],
        datasets: [{
          label: "# of Votes",
          data: [53, 10, 2],
          backgroundColor: ["yellow", "orange", "green"]
        }],
      }
    })
  }

  render() {

    const {bill} = this.state; 
    const billPage = this.state.bill ? (
      <section className="Bill-section">
        <h2 className="mt-3">{bill.bill}</h2>
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
              <td colspan="3">{bill.description}</td>
            </tr>
            <tr>
              <th>Last Action:</th>
              <td colspan="3">{bill.last_action}</td>
            </tr>
          </tbody>
        </Table>
        </Col>
        <Col sm="1"></Col>
        </Row>
        <h4>Final Vote</h4>
        <Chart chartData={this.state.chartData} billNumber="SB18-1002" chamber="House"/>
      </section>
    ) : (
      <div className="center">Post Loading</div>
    )


    return (
      <Container className="bg-white my-4 text-center p-4">
        {billPage}
      </Container>
    )
  }
}

export default Bill;
