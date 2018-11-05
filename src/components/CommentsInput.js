import React, {Component} from "react";
import {Button, Form, FormGroup, Label, Input, FormText, Row, Col} from "reactstrap";


class Comments extends Component {


  render() {
    
    return (
      <section className="my-4 mx-5">
        <h3>Add a comment:</h3>
        <Form>
          <Row form>
            <Col md={8}>
              <FormGroup>
                <Label for="user_name">Username</Label>
                <Input type="email" name="email" id="exampleEmail" />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="date">Date</Label>
                <Input type="date" name="date" id="date" />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label for="comment">Text Area</Label>
            <Input type="textarea" name="comment" id="comment" />
          </FormGroup>
          <Button>Submit Comment</Button>
        </Form>
      </section>
    )
  }
}

export default Comments;