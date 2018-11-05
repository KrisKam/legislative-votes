import React, {Component} from "react";
import {Card, CardBody, CardTitle, CardSubtitle, CardText, Button} from "reactstrap";


class Comments extends Component {


  render() {
    
    return (
      <section className="my-4 mx-5">
        <h4 className="mb-4">Comments:</h4>
        <Card>
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button size="sm" className="Form-button">Update</Button>
          <Button size="sm" color="danger" className="mx-3">Delete</Button>
        </CardBody>
      </Card>
      </section>
    )
  }
}

export default Comments;