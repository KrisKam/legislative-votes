import React, {Component} from "react";
import {Button, Form, FormGroup, Label, Input} from "reactstrap";


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
    console.log("state: ", this.state.user_name)
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const body = JSON.stringify(this.state);
    // return fetch(`http://localhost:5555/comments`, {
      return fetch(`https://legislative-tracker.herokuapp.com/comments`, {
      method: "POST",
      mode: "cors",
      headers: { "content-type": "application/json" },
      body: body
    })
    .then(response => console.log(response))
    .then(() =>
      this.setState({
        user_name: "",
        date: "",
        comment: ""
      })
    )
    .then(function(){window.location.reload() })
  }

  handleUpdate = (e) => {
  e.preventDefault();
  const body = JSON.stringify(this.state);
  return fetch(`https://legislative-tracker.herokuapp.com/comments/${this.props.selectedComment.id}`, {
    method: "PUT",
    mode: "cors",
    headers: { "content-type": "application/json" },
    body: body
  })
  .then(response => console.log(response))
  .then(() =>
    this.setState({
      user_name: "",
      date: "",
      comment: "",
    })
  )
  .then(function(){ window.location.reload() })
}

  render() {

    return (
      <section className="my-4 mx-5">
        <h4 className="mb-4">Add a comment:</h4>
        <Form>
          <FormGroup>
            <Label for="user_name">Username</Label>
            <Input type="text" name="user_name" id="user_name" onChange={this.handleChange} defaultValue={this.props.selectedComment.user_name}/>
          </FormGroup>
          <FormGroup>
            <Label for="date">Date</Label>
            <Input type="text" name="date" id="date" onChange={this.handleChange} defaultValue={this.props.selectedComment.date}/>
          </FormGroup>
          <FormGroup>
            <Label for="comment">Comment</Label>
            <Input type="textarea" name="comment" id="comment" onChange={this.handleChange} defaultValue={this.props.selectedComment.comment}/>
          </FormGroup>
          <Button size="sm" className="Form-button-green mx-3" onClick={this.handleSubmit}>Submit Comment</Button>
          <Button size="sm" className="Form-button" onClick={this.handleUpdate}>Send Update</Button>
        </Form>
      </section>
    )
  }
}

export default Comments;