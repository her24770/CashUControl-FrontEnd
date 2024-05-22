import React from "react";
import { Card, CardImg, CardBody, CardText } from "reactstrap";

const Blog = (props) => {
  return (
    <Card>
      <CardImg alt="Card image cap" src={props.image} />
      <CardBody className="p-4">
        <CardText>{props.text}</CardText>
      </CardBody>
    </Card>
  );
};

export default Blog;