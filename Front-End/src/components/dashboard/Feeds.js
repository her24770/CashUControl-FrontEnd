import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  ListGroup,
  CardSubtitle,
  ListGroupItem,
  Button,
} from "reactstrap";

const FeedData = [
  {
    title: "HOME",
    icon: "bi bi-bell " ,
    color: "primary",
 
  },
  {
    title: "REZLIZA TUS FINANZAS",
    icon: "bi bi-person",
    color: "info",

  },
  {
    title: "OBTEN RECOMPENSAS",
    icon: "bi bi-hdd",
    color: "danger",

  },
  {
    title: "PONTE METAS",
    icon: "bi bi-bag-check",
    color: "success",
  },
  {
    title: "TE DAREMOS CONSEJOS",
    icon: "bi bi-bell",
    color: "dark",
  },
  {
    title: "CUENTA TUS PUNTOS DE LAS INSIGNIAS",
    icon: "bi bi-hdd",
    color: "warning",

  },
];

const Feeds = () => {
  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">Las Opciones que Puedes Encontrar.</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          
        </CardSubtitle>
        <ListGroup flush className="mt-4">
          {FeedData.map((feed, index) => (
            <ListGroupItem
              key={index}
              action
              href="/"
              tag="a"
              className="d-flex align-items-center p-3 border-0"
            >
              <Button
                className="rounded-circle me-3"
                size="sm"
                color={feed.color}
              >
                <i className={feed.icon}></i>
              </Button>
              {feed.title}
              <small className="ms-auto text-muted text-small">
                {feed.date}
              </small>
            </ListGroupItem>
          ))}
        </ListGroup>
      </CardBody>
    </Card>
  );
};

export default Feeds;
