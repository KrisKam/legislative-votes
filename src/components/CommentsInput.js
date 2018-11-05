import React, {Component} from "react";
import {Button, Form, FormGroup, Label, Input, FormText, Row, Col} from "reactstrap";


class Comments extends Component {


  render() {
    
    return (
      <section className="my-4 mx-5">
        <h4 className="mb-4">Add a comment:</h4>
        <Form>
          <FormGroup>
            <Label for="user_name">Username</Label>
            <Input type="email" name="email" id="exampleEmail" />
          </FormGroup>
          <FormGroup>
            <Label for="date">Date</Label>
            <Input type="date" name="date" id="date" />
          </FormGroup>
          <FormGroup>
            <Label for="comment">Text Area</Label>
            <Input type="textarea" name="comment" id="comment" />
          </FormGroup>
          <Button size="sm" className="Form-button">Submit Comment</Button>
        </Form>
      </section>
    )
  }
}

export default Comments;