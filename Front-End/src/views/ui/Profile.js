import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { Col, Row } from "reactstrap";
import {
    Card,
    CardBody,
    CardTitle,
    ListGroup,
    CardSubtitle,
    ListGroupItem,
    Button,
  } from "reactstrap";
import user1 from "../../assets/images/users/user4.jpg"

const Starter = () => {
    const token = localStorage.getItem('token');
    const id = localStorage.getItem('id');
    const [user, setUser] = useState({});

    const getUser = async () => {
        try {
          const {data} = await axios.get(`http://localhost:5000/users/getProfile/${id}`);
          console.log(data);
          setUser(data)
        } catch (error) {
          console.error(error);
        }
      };
    
      useEffect(() => {
        getUser(); // Llamar a fetchData dentro de useEffect
      }, []);

    return (
        <div>
            <Row>
                <Col sm="6" lg="6" xl="7" xxl="8">
                    <Card>
                        <CardBody>
                            <CardTitle tag="h5">{user.role}</CardTitle>
                            <CardSubtitle className="mb-2 text-muted" tag="h6">You Account</CardSubtitle>
                            <ListGroup flush className="mt-4">
                                <ListGroupItem className="d-flex align-items-center p-3 border-0">
                                    <Button className="rounded-circle me-3"size="sm"color="primary"disabled ><i class="bi bi-bell-fill"></i></Button>
                                    <span style={{ fontSize: '1.2rem', fontWeight: 'bold',marginRight: '1.5rem' }}>NOMBRE:</span> {user.name+" "+user.surname}
                                </ListGroupItem>
                                <ListGroupItem className="d-flex align-items-center p-3 border-0">
                                    <Button className="rounded-circle me-3"size="sm"color="danger"disabled ><i class="bi bi-envelope-at-fill"></i></Button>
                                    <span style={{ fontSize: '1.2rem', fontWeight: 'bold',marginRight: '1.5rem' }}>EMAIL:</span> {user.email}
                                </ListGroupItem>
                                <ListGroupItem className="d-flex align-items-center p-3 border-0">
                                    <Button className="rounded-circle me-3"size="sm"color="warning"disabled ><i class="bi bi-envelope-at-fill"></i></Button>
                                    <span style={{ fontSize: '1.2rem', fontWeight: 'bold',marginRight: '1.5rem' }}>CARNET:</span> {user.carnet}
                                </ListGroupItem>
                                <ListGroupItem className="d-flex align-items-center p-3 border-0">
                                    <Button className="rounded-circle me-3"size="sm"color="success"disabled ><i class="bi bi-person-rolodex"></i></Button>
                                    <span style={{ fontSize: '1.2rem', fontWeight: 'bold',marginRight: '1.5rem' }}>ROLE:</span> {user.role}
                                </ListGroupItem>
                            </ListGroup>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="6" lg="6" xl="5" xxl="4">
                <Card>
                        <CardBody>
                            <CardTitle tag="h5">{user.role}</CardTitle>
                            <CardSubtitle className="mb-2 text-muted" tag="h6">Your Image</CardSubtitle>
                            <img src={user1} alt="profile" className="rounded-circle" width="100%" ></img>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Starter;
