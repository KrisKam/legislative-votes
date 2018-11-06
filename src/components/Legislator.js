import React, {Component} from "react";
import {Container, Row, Col} from "reactstrap";
import CreateCharts from "./CreateCharts";
import Dropdown from "./Dropdown";


class Legislator extends Component {

  state = {
    legislator: null,
    bills: [],
    subject: "",
    billNum: "",
    bilId: "",
    data: {},
    vote: ""
  }

  componentDidMount() {
    this.getLegislatorData()
    this.getBills()
  }
 
  getLegislatorData() {
    let id = this.props.match.params.post_id;
    return fetch(`https://legislative-tracker.herokuapp.com/legislators/${id}`)
    // return fetch(`http://localhost:5555/legislators/${id}`)
      .then(result => result.json())
      .then(result => {
        this.setState({
            legislator: result[0]
          })
      })
  }

  getBills() {
    // return fetch("http://localhost:5555/bills")
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
            return <Row key={bill.bill} id="Legislator-hover" className="text-left">
              <Col>
                {bill.bill}:  {bill.title} (Lost or Postponed Indefinitely
              </Col>
            </Row>
          } else {
            return <Row onClick={()=>this.handleClick(bill)} key={bill.bill} name={bill.bill} id="Legislator-hover" className="text-left">
              <Col>
                {bill.bill}:  {bill.title} (View Vote)
              </Col>
            </Row>
          }
      })
    }
  }

  handleClick = (bill) => {
      let billNum = bill.bill;
      let id = this.props.match.params.post_id;
      this.setState ({
        billNum: bill.bill,
        billId: bill.id
      })
      fetch(`https://legislative-tracker.herokuapp.com/votes/${billNum}`)
      // fetch(`http://localhost:5555/votes/${billNum}`)
        .then(result => result.json())
        .then(result => {
          let chartData = this.setChartData(result)
          this.setState({
            data: chartData
          })
        }
       )  
       fetch(`https://legislative-tracker.herokuapp.com/votes/${id}/${billNum}`)
      //  fetch(`http://localhost:5555/votes/${id}/${billNum}`)
        .then(result => result.json())
        .then(result => {
          this.setState({
            vote: result[0].vote
          })
        })
        console.log(this.state.vote)
  }

  setChartData(result) {
    let billNumber = result[0].bill;
    let votes = {};
    result.forEach(voteCount => {
      let place = "";
      place = place + voteCount.chamber; //place = Senate
      place = place + voteCount.party; //place = SenateRepublican
      place = place + voteCount.vote; //place = SenateRepublicanY
      votes[place] = voteCount.count; //SenateRepublicanY: 2
    })
    return this.setChartDataState(votes, billNumber);
  }

  setChartDataState(votes, billNumber) {
    return ({
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

  renderCreateCharts() {
    return (this.state.billNum !== "") ? (
    <CreateCharts data={this.state.data} billNum={this.state.billNum} vote={this.state.vote} legislator={this.state.legislator.full_name}/>
    ) : (
      <div></div>
    )
  }

  render() {
    const {legislator} = this.state;
   
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
        <div>
          {this.renderCreateCharts()}
        </div>
        <Dropdown selectSubject={this.selectSubject}/>
        <section className="px-5">
          {this.listBills()}
        </section>
        <div className="Legislator-div"></div>
      </Container>
    )
  }
}

export default Legislator;