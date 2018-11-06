import React, {Component} from "react";
import {Container, Row, Col, Card, CardBody, CardTitle, CardSubtitle, CardText, Button} from "reactstrap";
import CommentsInput from "./CommentsInput";


class Forum extends Component {

  state = {
    comments: [],
    selectedComment: {}
  }

  componentDidMount() {
    this.getComments()
  }

  getComments() {
    // return fetch("http://localhost:5555/comments")
    return fetch("https://legislative-tracker.herokuapp.com/comments")
    .then(result => result.json())
    .then(result => {
      this.setState({
        comments: result
      })
      // console.log("state: ", result)
    })
  }

  singleUpdate = (e) => {
    e.preventDefault();
    // console.log("target ", e.target.id)
    // console.log("array? ", this.state.comments)
    let comments = this.state.comments;
    const singleComment = comments.find(comment => {
      return comment.id === parseInt(e.target.id)
    }) 
    this.setState({
      selectedComment: singleComment
    })   
      console.log("select comm: ", singleComment)
      return singleComment
  }

  handleDelete = (e) => {
  e.preventDefault();
  // console.log("id ", e.target.id)
  let id = e.target.id;
  return fetch(`https://legislative-tracker.herokuapp.com/comments/${id}`, {
    method: "DELETE",
    mode: "cors",
    headers: { "content-type": "application/json" }
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

  render() {
    
    console.log("comments: ", this.state.comments)
    const {comments} = this.state;
    const createCard = comments.map(comment => {
        return (
          <Card key={comment.id}>
            <CardBody>
              <CardTitle>{comment.user_name}</CardTitle>
              <CardSubtitle>{comment.date}</CardSubtitle>
              <CardText>{comment.comment}</CardText>
              <Button size="sm" className="Form-button" onClick={this.singleUpdate} id={comment.id}>Update</Button>
              <Button size="sm" color="danger" className="mx-3" onClick={this.handleDelete} id={comment.id}>Delete</Button>
            </CardBody>
          </Card>
        )
      })

    return (
      <Container className="bg-white m-5">
        <h2 className="text-center pt-4">Comments Forum</h2>
        <Row>
          <Col md="7">
          <section className="my-4 mx-5">
            <h4 className="mb-4">Comments:</h4>
            {createCard}
          </section>
          </Col>
          <Col md="5">
            <CommentsInput selectedComment={this.state.selectedComment}/>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Forum;
