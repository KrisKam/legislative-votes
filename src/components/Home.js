import React from "react";
import capitol from "../images/capitol_grey.png";
import {Container, Row, Col, Card, CardTitle, CardText, Button} from "reactstrap";
import {Link} from "react-router-dom";


const Home = () => {

 return (
  <Container className="py-4">
    <Row className="text-center Home-h1 mt-3">
      <Col>
        <h1>Legislative Vote Tracker</h1>
      </Col>
    </Row>
    <Row className="my-5">
      <Col xs="6" sm="4">
        <Card body className="text-center mt-3" id="Home-card">
          <CardTitle>Legislators</CardTitle>
          <CardText>The General Assembly consists of 100 members - 35 Senators and 65 Representatives. Senators serve four-year terms, while Representatives serve two-year terms. </CardText>
          <Link to="/legislators">
            <Button className="Home-button">All Legislators</Button>
          </Link>
        </Card>
      </Col>
      <Col>
        <div className="text-center align-middle" >
         <img  sm="4" src={capitol} alt="Capitol Icon" className="mt-3" />
        </div>
      </Col>
      <Col xs="6" sm="4">
        <Card body className="text-center mt-3" id="Home-card">
          <CardTitle>Bills</CardTitle>
          <CardText>Passage of a bill requires a majority: 33 votes in the House and 18 in the Senate. See summaries of all bills introduced in the 2018 and votes for bills passed by both chambers.</CardText>
          <Link to="/bills">
            <Button className="Home-button">All Bills</Button>
          </Link>
        </Card>
      </Col>
    </Row>
    <section className="Home-statistics text-center p-4 my-3">
      <Row>
        <Col>
        <h5>2018 Statistical Summary</h5>
        </Col>
      </Row>
      <Row>
        <Col>
          House Bills Introduced: 441  |  House Bills Passed: 267  |  Senate Bills Introduced: 280  |  Senate Bills Passed: 165  |  Bills signed by Governor: 421  |  Bills becoming law without Governor’s signature: 2  |  Bills vetoed by Governor: 9
        </Col>
      </Row>
    </section>
  </Container>
 )
}


export default Home; 