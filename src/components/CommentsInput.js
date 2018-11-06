import React, {Component} from "react";
import {Button, Form, FormGroup, Label, Input, FormText, Row, Col} from "reactstrap";


class Comments extends Component {

  state= {
    user_name: "",
    date: "",
    comment: ""
  }

  handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const body = JSON.stringify(this.state);
    return fetch(`http://localhost:5555/comments`, {
      method: "POST",
      mode: "cors",
      headers: { "content-type": "application/json" },
      body: body
    })
    .then(response => console.log(response))
    .then(
      this.setState({
        user_name: "",
        date: "",
        comment: ""
      })
    )
    // .then(setTimeout(function(){window.location.reload() }, 2000))
  }

  render() {
    
    return (
      <section className="my-4 mx-5">
        <h4 className="mb-4">Add a comment:</h4>
        <Form>
          <FormGroup>
            <Label for="user_name">Username</Label>
            <Input type="text" name="user_name" id="user_name" onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label for="date">Date</Label>
            <Input type="date" name="date" id="date" onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label for="comment">Text Area</Label>
            <Input type="textarea" name="comment" id="comment" onChange={this.handleChange} />
          </FormGroup>
          <Button size="sm" className="Form-button" onClick={this.handleSubmit}>Submit Comment</Button>
          <Button size="sm" className="Form-button" onClick={this.handleUpdate}>Send Update</Button>
        </Form>
      </section>
    )
  }
}

export default Comments;