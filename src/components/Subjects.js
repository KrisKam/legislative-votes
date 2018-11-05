import React, {Component} from "react";
import {Container, Row, Col, Collapse, CardBody, Card, CardHeader} from "reactstrap";
import {Link} from "react-router-dom";

class Subjects extends Component {

  toggle = this.toggle.bind(this)
  state = {
    bills: [],
    collapse: ""
  }

  toggle(subject) {
    if (this.state.collapse === subject) {
      this.setState ({
        collapse: ""
      })
    } else {
      this.setState({
        collapse: subject
      })
    }
  }

  componentDidMount() {
    this.getBillPageInfo();
  }

  getBillPageInfo = () => {
    return fetch("https://legislative-tracker.herokuapp.com/bills")
      .then(result => result.json())
      .then(result => {
        this.setState({
          bills: result
        })
      })
      
  }
 
  render() {

    const {bills} = this.state;
    const createRow = (bill) => {
      return ( 
        <Row key={bill.id}>
          <Link to={`/bills/${bill.bill}`}>{bill.bill}</Link>:  {bill.title}
        </Row>
      )
    }
    const selectBills= (subject) => {
      const rows = bills.filter(bill => bill.subject.includes(subject))
        .map(bill => createRow(bill))
      return rows;
    } 

    return (
      <Container className="bg-white my-4 text-center p-3">
        <h3 className="m-3 Bills-h3">
          Subjects
        </h3>
        <Row className="m-4">
        <Col sm="2"></Col>
        <Col sm="8">
          <Card>
            <CardHeader onClick={() => this.toggle("Agriculture")}>Agriculture</CardHeader>
            <Collapse isOpen={this.state.collapse === "Agriculture"}>
              <CardBody>
              {selectBills("Agriculture")}
              </CardBody>
            </Collapse>
          </Card>
          <Card>
            <CardHeader onClick={() => this.toggle("Business")}>Business &amp; Economic Development</CardHeader>
            <Collapse isOpen={this.state.collapse === "Business"}>
              <CardBody>
              {selectBills("Business")}
              </CardBody>
            </Collapse>
          </Card>
          <Card>
            <CardHeader onClick={() => this.toggle("Capital")}>Capital Construction</CardHeader>
            <Collapse isOpen={this.state.collapse === "Capital"}>
              <CardBody>
              {selectBills("Capital")}
              </CardBody>
            </Collapse>
          </Card>
          <Card>
            <CardHeader onClick={() => this.toggle("Children")}>Children &amp; Domestic Matters</CardHeader>
            <Collapse isOpen={this.state.collapse === "Children"}>
              <CardBody>
              {selectBills("Children")}
              </CardBody>
            </Collapse>
          </Card>
          <Card>
            <CardHeader onClick={() => this.toggle("Civil")}>Civil Law</CardHeader>
            <Collapse isOpen={this.state.collapse === "Civil"}>
              <CardBody>
              {selectBills("Civil")}
              </CardBody>
            </Collapse>
          </Card>
          <Card>
            <CardHeader onClick={() => this.toggle("Courts")}>Courts &amp; Judicial</CardHeader>
            <Collapse isOpen={this.state.collapse === "Courts"}>
              <CardBody>
              {selectBills("Courts")}
              </CardBody>
            </Collapse>
          </Card>
          <Card>
            <CardHeader onClick={() => this.toggle("Crimes")}>Crimes, Corrections, &amp; Enforcement</CardHeader>
            <Collapse isOpen={this.state.collapse === "Crimes"}>
              <CardBody>
              {selectBills("Crimes")}
              </CardBody>
            </Collapse>
          </Card>
          <Card>
            <CardHeader onClick={() => this.toggle("K-12")}>Education &amp; School Finance (Pre &amp; K-12)</CardHeader>
            <Collapse isOpen={this.state.collapse === "K-12"}>
              <CardBody>
              {selectBills("K-12")}
              </CardBody>
            </Collapse>
          </Card>
          <Card>
            <CardHeader onClick={() => this.toggle("Elections")}>Elections &amp; Redistricting</CardHeader>
            <Collapse isOpen={this.state.collapse === "Elections"}>
              <CardBody>
              {selectBills("Elections")}
              </CardBody>
            </Collapse>
          </Card>
          <Card>
            <CardHeader onClick={() => this.toggle("Energy")}>Energy</CardHeader>
            <Collapse isOpen={this.state.collapse === "Energy"}>
              <CardBody>
              {selectBills("Energy")}
              </CardBody>
            </Collapse>
          </Card>
          <Card>
            <CardHeader onClick={() => this.toggle("Financial")}>Financial Services &amp; Commerce</CardHeader>
            <Collapse isOpen={this.state.collapse === "Financial"}>
              <CardBody>
              {selectBills("Financial")}
              </CardBody>
            </Collapse>
          </Card>
          <Card>
            <CardHeader onClick={() => this.toggle("Fiscal")}>Fiscal Policy &amp; Taxes</CardHeader>
            <Collapse isOpen={this.state.collapse === "Fiscal"}>
              <CardBody>
              {selectBills("Fiscal")}
              </CardBody>
            </Collapse>
          </Card>
          <Card>
            <CardHeader onClick={() => this.toggle("Gaming")}>Gaming, Lottery, &amp; Racing</CardHeader>
            <Collapse isOpen={this.state.collapse === "Gaming"}>
              <CardBody>
              {selectBills("Gaming")}
              </CardBody>
            </Collapse>
          </Card>
          <Card>
            <CardHeader onClick={() => this.toggle("Health Care")}>Health Care &amp; Health Insurance</CardHeader>
            <Collapse isOpen={this.state.collapse === "Health Care"}>
              <CardBody>
              {selectBills("Health Care")}
              </CardBody>
            </Collapse>
          </Card>
          <Card>
            <CardHeader onClick={() => this.toggle("Higher")}>Higher Education</CardHeader>
            <Collapse isOpen={this.state.collapse === "Higher"}>
              <CardBody>
              {selectBills("Higher")}
              </CardBody>
            </Collapse>
          </Card>
          <Card>
            <CardHeader onClick={() => this.toggle("Housing")}>Housing</CardHeader>
            <Collapse isOpen={this.state.collapse === "Housing"}>
              <CardBody>
              {selectBills("Housing")}
              </CardBody>
            </Collapse>
          </Card>
          <Card>
            <CardHeader onClick={() => this.toggle("Human")}>Human Services</CardHeader>
            <Collapse isOpen={this.state.collapse === "Human"}>
              <CardBody>
              {selectBills("Human")}
              </CardBody>
            </Collapse>
          </Card>
          <Card>
            <CardHeader onClick={() => this.toggle("Immigration")}>Immigration</CardHeader>
            <Collapse isOpen={this.state.collapse === "Immigration"}>
              <CardBody>
              {selectBills("Immigration")}
              </CardBody>
            </Collapse>
          </Card>
          <Card>
            <CardHeader onClick={() => this.toggle("Insurance")}>Insurance</CardHeader>
            <Collapse isOpen={this.state.collapse === "Insurance"}>
              <CardBody>
              {selectBills("Insurance")}
              </CardBody>
            </Collapse>
          </Card>
          <Card>
            <CardHeader onClick={() => this.toggle("Labor")}>Labor &amp; Employment</CardHeader>
            <Collapse isOpen={this.state.collapse === "Labor"}>
              <CardBody>
              {selectBills("Labor")}
              </CardBody>
            </Collapse>
          </Card>
          <Card>
            <CardHeader onClick={() => this.toggle("Liquor")}>Liquor, Tobacco, &amp; Marijuana</CardHeader>
            <Collapse isOpen={this.state.collapse === "Liquor"}>
              <CardBody>
              {selectBills("Liquor")}
              </CardBody>
            </Collapse>
          </Card>
          <Card>
            <CardHeader onClick={() => this.toggle("Local")}>Local Government</CardHeader>
            <Collapse isOpen={this.state.collapse === "Local"}>
              <CardBody>
              {selectBills("Local")}
              </CardBody>
            </Collapse>
          </Card>
          <Card>
            <CardHeader onClick={() => this.toggle("Military")}>Military &amp; Veterans</CardHeader>
            <Collapse isOpen={this.state.collapse === "Military"}>
              <CardBody>
              {selectBills("Military")}
              </CardBody>
            </Collapse>
          </Card>
          <Card>
            <CardHeader onClick={() => this.toggle("Natural")}>Natural Resources &amp; Environment</CardHeader>
            <Collapse isOpen={this.state.collapse === "Natural"}>
              <CardBody>
              {selectBills("Natural")}
              </CardBody>
            </Collapse>
          </Card>
          <Card>
            <CardHeader onClick={() => this.toggle("Public")}>Public Health</CardHeader>
            <Collapse isOpen={this.state.collapse === "Public"}>
              <CardBody>
              {selectBills("Public")}
              </CardBody>
            </Collapse>
          </Card>
          <Card>
            <CardHeader onClick={() => this.toggle("State Government")}>State Government</CardHeader>
            <Collapse isOpen={this.state.collapse === "State Government"}>
              <CardBody>
              {selectBills("State Government")}
              </CardBody>
            </Collapse>
          </Card>
          <Card>
            <CardHeader onClick={() => this.toggle("State Revenue")}>State Revenue &amp; Budget</CardHeader>
            <Collapse isOpen={this.state.collapse === "State Revenue"}>
              <CardBody>
              {selectBills("State Revenue")}
              </CardBody>
            </Collapse>
          </Card>
          <Card>
            <CardHeader onClick={() => this.toggle("Telecommunications")}>Telecommunications &amp; Information Technology</CardHeader>
            <Collapse isOpen={this.state.collapse === "Telecommunications"}>
              <CardBody>
              {selectBills("Telecommunications")}
              </CardBody>
            </Collapse>
          </Card>
          <Card>
            <CardHeader onClick={() => this.toggle("Transportation")}>Transportation &amp; Motor Vehicles</CardHeader>
            <Collapse isOpen={this.state.collapse === "Transportation"}>
              <CardBody>
              {selectBills("Transportation")}
              </CardBody>
            </Collapse>
          </Card>
          </Col>
          <Col sm="2"></Col>
        </Row>
      </Container>
    )
  }
}

export default Subjects; 