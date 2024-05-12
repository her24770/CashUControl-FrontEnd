import React from "react";
import { Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle, Button } from "reactstrap";

const Blog = ({ image, nombre, descripcion, puntos }) => {
  return (
    <Card>
      <CardImg alt="Card image cap" src={image} />
      <CardBody className="p-4">
        <CardTitle tag="h5">{nombre}</CardTitle>
        <CardSubtitle>{descripcion}</CardSubtitle>
        <CardText className="mt-3">{puntos}</CardText>
      </CardBody>
    </Card>
  );
};

export default Blog;