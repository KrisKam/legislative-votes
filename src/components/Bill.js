import React, {Component} from "react";
import {Container} from "reactstrap";


class Bill extends Component {

  state = {
    bills: []
  }

  componentDidMount() {
    this.getBillInfo();
  }

  // getBillInfo = () => {
  //   return fetch(`http://localhost:5555/bills/${id}`)
  //     .then(result => result.json())
  //     .then(result => {
  //       this.setState(
  //         {
  //           bills: result
  //         }
  //       )
  //       console.log("result: ", result)
  //     })
  // }

  render() {
    return (
      <Container>
        something
      </Container>
    )
  }
}

export default Bill;
