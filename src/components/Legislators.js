import React, {Component} from "react";
import {Container, Table} from "reactstrap";
import {Link} from "react-router-dom";

class Legislators extends Component {

  state = {
    legislators: []
  }

  componentDidMount() {
    this.getLegislators();
  }

  getLegislators = () => {
    return fetch("http://localhost:5555/legislators")
      .then(result => result.json())
      .then(result => {
        this.setState(
          {
            legislators: result
          }
        )
        console.log("result: ", result)
      })
  }

  render() {

    const {legislators} = this.state;
    const createTableRow = legislators.map((legislator) => {
      return (
        <tr key={legislator.id}>
          <td>{legislator.title}</td>
          <td><Link to={`/legislators/${legislator.id}`}>{legislator.full_name}</Link></td>
          <td>{legislator.party}</td>
          <td>{legislator.district}</td>
        </tr>
      )
    })

    return (
      <Container className="bg-white my-4 text-center p-3">
        <h3 className="m-3">
          Legislators
        </h3>
        <Table bordered responsive>
          <thead className="thead-light">
            <tr>
              <th>Title</th>
              <th>Name</th>
              <th>Party</th>
              <th>District</th>
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

export default Legislators; 