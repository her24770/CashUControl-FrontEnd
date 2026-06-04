import React from "react";
import { Card, CardImg, CardBody, CardText } from "reactstrap";

const Blog = (props) => {
  return (
    <Card className="h-100">
      <CardImg
        alt="Card image cap"
        src={props.image}
        style={{ height: "180px", objectFit: "cover" }}
      />
      <CardBody className="p-4">
        <CardText>{props.text}</CardText>
      </CardBody>
    </Card>
  );
};

export default Blog;