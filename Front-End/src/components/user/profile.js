import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Col, Row } from "reactstrap";
import { Card, CardBody, CardTitle, ListGroup, CardSubtitle, ListGroupItem, Button } from "reactstrap";
import user1 from "../../assets/images/users/user4.jpg";
import imageI1 from "../../assets/images/insignias/insi1.jpeg"
import imageI2 from "../../assets/images/insignias/insi2.jpeg"
import imageI3 from "../../assets/images/insignias/insi3.jpeg"

const Profile = () => {
  const token = localStorage.getItem('token');
  const id = localStorage.getItem('id');
  const [user, setUser] = useState({});
  const [rewards, setRewards] = useState([]);

  const config = {
    headers: {
      'Authorization': 'Bearer ' + token,
      'Content-Type': 'application/json'
    }
  };

  const images = {
    imageI1,
    imageI2,
    imageI3
  };

  const getUser = async () => {
    try {
      const { data } = await axios.get(`http://localhost:5000/users/getProfile/${id}`, config);
      setUser(data);
    } catch (error) {
      console.error(error);
    }
  };

  const getRewards = async () => {
    try {
      const { data } = await axios.get(`http://localhost:5000/recompensas/listare/${id}`, config);
      console.log(data)
      setRewards(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUser();
    getRewards();
  }, []);

  return (
    <div>
      <img src={process.env.PUBLIC_URL + '/assets/images/users/user4.jpg'} alt="Descripción de la imagen" />
      <Row>
        <Col sm="6" lg="6" xl="7" xxl="8">
          <Card>
            <CardBody>
              <CardTitle tag="h5">{user.role}</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">You Account</CardSubtitle>
              <ListGroup flush className="mt-4">
                <ListGroupItem className="d-flex align-items-center p-3 border-0">
                  <Button className="rounded-circle me-3" size="sm" color="primary" disabled><i class="bi bi-bell-fill"></i></Button>
                  <span style={{ fontSize: '1.2rem', fontWeight: 'bold', marginRight: '1.5rem' }}>NOMBRE:</span> {user.name + " " + user.surname}
                </ListGroupItem>
                <ListGroupItem className="d-flex align-items-center p-3 border-0">
                  <Button className="rounded-circle me-3" size="sm" color="danger" disabled><i class="bi bi-envelope-at-fill"></i></Button>
                  <span style={{ fontSize: '1.2rem', fontWeight: 'bold', marginRight: '1.5rem' }}>EMAIL:</span> {user.email}
                </ListGroupItem>
                <ListGroupItem className="d-flex align-items-center p-3 border-0">
                  <Button className="rounded-circle me-3" size="sm" color="warning" disabled><i class="bi bi-envelope-at-fill"></i></Button>
                  <span style={{ fontSize: '1.2rem', fontWeight: 'bold', marginRight: '1.5rem' }}>CARNET:</span> {user.carnet}
                </ListGroupItem>
                <ListGroupItem className="d-flex align-items-center p-3 border-0">
                  <Button className="rounded-circle me-3" size="sm" color="success" disabled><i class="bi bi-person-rolodex"></i></Button>
                  <span style={{ fontSize: '1.2rem', fontWeight: 'bold', marginRight: '1.5rem' }}>ROLE:</span> {user.role}
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
        <Col sm="6" lg="6" xl="5" xxl="4">
          {rewards.map((recompensa, index) => (
            <Col sm="6" lg="6" xl="3" key={index}>
              <div>
                <img src={images[recompensa.descripcion]} alt={recompensa.descripcion} />
                <p>{recompensa.descripcion}</p>
              </div>
            </Col>
          ))}

        </Col>
      </Row>
    </div>
  );
};

export default Profile;