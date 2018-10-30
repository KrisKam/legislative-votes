import React, {Component} from "react";
import {Container, Table} from "reactstrap";
import {Link} from "react-router-dom";

class Bills extends Component {

  state = {
    bills: []
  }

  componentDidMount() {
    this.getBillPageInfo();
  }

  getBillPageInfo = () => {
    return fetch("http://localhost:5555/bills")
      .then(result => result.json())
      .then(result => {
        this.setState({
          bills: result
        })
      })
  }

  render() {

    const {bills} = this.state;
    const createTableRow = bills.map((bill) => {
      return (
        <tr key={bill.id}>
          <td><Link to={`/bills/${bill.id}`}>{bill.bill}</Link></td>
          <td>{bill.title}</td>
          <td>{bill.subject}</td>
          <td>{bill.last_action}</td>
        </tr>
      )
    })

    return (
      <Container className="bg-white my-4 text-center p-3">
        <h3 className="m-3 Bills-h3">
          2018 Introduced Bills
        </h3>
        <Table bordered responsive>
        <thead className="thead-light">
          <tr>
            <th>Bill #</th>
            <th>Title</th>
            <th>Subject(s)</th>
            <th>Last Action</th>
          </tr>
        </thead>
        <tbody>
          {createTableRow}
        </tbody>
      </Table>
      </Container>
    )
  }
}

export default Bills; 