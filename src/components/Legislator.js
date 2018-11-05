import React, {Component} from "react";
import {Container, Row, Col, Card, CardBody} from "reactstrap";
import {Link} from "react-router-dom";
// import CreateCharts from "./CreateCharts";
import Dropdown from "./Dropdown";


class Legislator extends Component {

  state = {
    legislator: null,
    bills: [],
    chartData: {},
    subject: "",
    billSelect: ""
  }

  componentDidMount() {
    this.getLegislatorData()
    this.getBills()
    this.getChartData();
  }

  getLegislatorData() {
    let id = this.props.match.params.post_id;
    return fetch(`https://legislative-tracker.herokuapp.com/legislators/${id}`)
      .then(result => result.json())
      .then(result => {
        this.setState({
            legislator: result[0]
          })
        // console.log("legislator: ", result[0])
      })
  }

  getBills() {
    return fetch("https://legislative-tracker.herokuapp.com/bills")
    .then(result => result.json())
    .then(result => {
      this.setState({
        bills: result
      })
    })
  }

  selectSubject = (subjects) => {
    this.setState({
      subject: subjects
    })
  }

  listBills() {
    if (this.state.subject === "") {
      return <div>Choose a subject then select a bill to view.</div>
    } else {
      return this.state.bills.filter(bill => {
        return bill.subject.includes(this.state.subject)
      }).map(bill => {
         
          if (!bill.last_action.includes("Governor")) {
            return <Row key={bill.bill}>
            {bill.bill}:  {bill.title} (Lost or Postponed Indefinitely)
          </Row>
          } else {
            return <Row onClick={()=>this.handleClick(bill.bill)} key={bill.bill} name={bill.bill}>
            {bill.bill}:  {bill.title} (View Vote)
          </Row>
          }
      })
    }
  }

  handleClick = (bill) => {
    this.setState ({
      billSelect: bill
    })
    console.log("dave is here", this.state.billSelect)
  }

  getChartData() {

  }

  render() {
    const {legislator} = this.state;
    const {chartData} = this.state;
   
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

    return (
      <Container className="bg-white mt-4 mb-2 text-center p-4 Legislator-font">
        {createLegislatorCard}
        <Dropdown selectSubject={this.selectSubject}/>
        <section>
          {this.listBills()}
        </section>
        {/* <CreateCharts /> */}
      </Container>
    )
  }
}

export default Legislator;