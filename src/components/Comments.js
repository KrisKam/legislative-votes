import React, {Component} from "react";
import {Card, CardBody, CardTitle, CardSubtitle, CardText, Button} from "reactstrap";


class Comments extends Component {

  state = {
    name: "",
    date: "",
    comment: ""
  }


// onClick = (e) => {
//   this.setState({
//     name: this.props.name,
//     date: this.props.date,
//     comment: this.props.comment
//   })

// }

// handleChange = (e) => {
//   const target = e.target;
//   const value = target.value;
//   const name = target.name;
//   this.setState({
//     [name]: value   
//   })
// }


// handleDelete = (e) => {
//   e.preventDefault();
//   return fetch(`https://j-j-data.herokuapp.com/${this.props.productDetails.id}`, {
//     method: "DELETE",
//     mode: "cors",
//     headers: { "content-type": "application/json" }
//   })
//   .then(response => console.log(response))
//   .then(
//     this.setState({
//       name: "",
//       quantity: "",
//       categoryID: "",
//       image_URL: "",
//       price: "",
//       description: "",
//     })
//   )
//   .then(setTimeout(function(){window.location.reload() }, 2000))
// }

// handleUpdate = (e) => {
//   e.preventDefault();
//   const body = JSON.stringify(this.state);
//   return fetch(`https://j-j-data.herokuapp.com/${this.props.productDetails.id}`, {
//     method: "PUT",
//     mode: "cors",
//     headers: { "content-type": "application/json" },
//     body: body
//   })
//   .then(response => console.log(response))
//   .then(
//     this.setState({
//       name: "",
//       quantity: "",
//       categoryID: "",
//       image_URL: "",
//       price: "",
//       description: "",
//     })
//   )
//   .then(setTimeout(function(){window.location.reload() }, 2000))
// }

  signalUpdate = (e) => {
    e.preventDefault();
    console.log("target ", e.target.id)
  }
 

  render() {
    console.log("comments: ", this.props.comments)
    const comments = this.props.comments;
    const createCard = comments.map(comment => {
        return (
          <Card key={comment.id}>
            <CardBody>
              <CardTitle>{comment.user_name}</CardTitle>
              <CardSubtitle>{comment.date}</CardSubtitle>
              <CardText>{comment.comment}</CardText>
              <Button size="sm" className="Form-button" onClick={this.signalUpdate} id={comment.id}>Update</Button>
              <Button size="sm" color="danger" className="mx-3" onClick={this.handleDelete}>Delete</Button>
            </CardBody>
          </Card>
        )
      })

      return (
        <section className="my-4 mx-5">
          <h4 className="mb-4">Comments:</h4>
          {createCard}
        </section>
      )
    }
}

export default Comments;