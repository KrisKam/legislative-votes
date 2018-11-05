import React, {Component} from "react";
import {Container, Table, Row, Col} from "reactstrap";
import {Link} from "react-router-dom";

class Party extends Component {

  state = {
    legislators: []
  }

  componentDidMount() {
    this.getLegislators();
  }

  getLegislators = () => {
    return fetch("https://legislative-tracker.herokuapp.com/legislators")
      .then(result => result.json())
      .then(result => {
        this.setState({
          legislators: result
        })
      })
  }

  render() {

    const {legislators} = this.state;
    const createTableRow = (legislator) => {
      return (
        <tr key={legislator.id}>
          <td><Link to={`/legislators/${legislator.id}`}>{legislator.full_name}</Link></td>
          <td>{legislator.district}</td>
        </tr>
      )
    }

    const selectSenRep = legislators
      .filter(legislator => legislator.party === "Republican" && legislator.title === "Senator")
      .map(legislator => createTableRow(legislator));

    const selectSenDem = legislators
    .filter(legislator => legislator.party === "Democrat" && legislator.title === "Senator")
    .map(legislator => createTableRow(legislator));

    const selectSenUn = legislators
    .filter(legislator => legislator.party === "Unaffiliated" && legislator.title === "Senator")
    .map(legislator => createTableRow(legislator));

    const selectHouseRep = legislators
    .filter(legislator => legislator.party === "Republican" && legislator.title === "Representative")
    .map(legislator => createTableRow(legislator));

    const selectHouseDem = legislators
    .filter(legislator => legislator.party === "Democrat" && legislator.title === "Representative")
    .map(legislator => createTableRow(legislator));

    const selectHouseUn = legislators
    .filter(legislator => legislator.party === "Unaffiliated" && legislator.title === "Representative")
    .map(legislator => createTableRow(legislator));

    return (
      <Container className="bg-white my-4 text-center p-3 Party-font">
        <h3 className="m-3 Legislators-h3">Legislators by Party</h3>
        <Row>
          <Col sm="4">
            <h5>Senate Republicans</h5>
            <Table bordered responsive>
              <thead className="thead-light">
                <tr>
                  <th>Name</th>
                  <th>District</th>
                </tr>
              </thead>
              <tbody>
                {selectSenRep}
              </tbody>
            </Table>
          </Col>
          <Col sm="4">
            <h5>Senate Democrats</h5>
            <Table bordered responsive>
              <thead className="thead-light">
                <tr>
                  <th>Name</th>
                  <th>District</th>
                </tr>
              </thead>
              <tbody>
                {selectSenDem}
              </tbody>
            </Table>
          </Col>
          <Col sm="4">
            <h5>Senate Unaffiliated</h5>
            <Table bordered responsive>
              <thead className="thead-light">
                <tr>
                  <th>Name</th>
                  <th>District</th>
                </tr>
              </thead>
              <tbody>
                {selectSenUn}
              </tbody>
            </Table>
          </Col>
        </Row>
        <Row>
          <Col sm="4">
            <h5>House Republicans</h5>
            <Table bordered responsive>
              <thead className="thead-light">
                <tr>
                  <th>Name</th>
                  <th>District</th>
                </tr>
              </thead>
              <tbody>
                {selectHouseRep}
              </tbody>
            </Table>
          </Col>
          <Col sm="4">
            <h5>House Democrats</h5>
            <Table bordered responsive>
              <thead className="thead-light">
                <tr>
                  <th>Name</th>
                  <th>District</th>
                </tr>
              </thead>
              <tbody>
                {selectHouseDem}
              </tbody>
            </Table>
          </Col>
          <Col sm="4">
            <h5>House Unaffiliated</h5>
            <Table bordered responsive>
              <thead className="thead-light">
                <tr>
                  <th>Name</th>
                  <th>District</th>
                </tr>
              </thead>
              <tbody>
                {selectHouseUn}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Party; 