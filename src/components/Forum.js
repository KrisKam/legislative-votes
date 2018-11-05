import React, {Component} from "react";
import {Container, Row, Col} from "reactstrap";
import CommentsInput from "./CommentsInput";
import Comments from "./Comments";


class Forum extends Component {


  render() {
    
    return (
      <Container className="bg-white m-5">
        <h2 className="text-center pt-4">Comments Forum</h2>
        <Row>
          <Col md="7">
            <Comments />
          </Col>
          <Col md="5">
            <CommentsInput />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Forum;
