import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Col, Row } from "reactstrap";
import { Card, CardBody, CardTitle, ListGroup, CardSubtitle, ListGroupItem, Button } from "reactstrap";
import user1 from "../../assets/images/users/user4.jpg";
import AhorradorﾠIncansable from "../../assets/images/insignias/AhorradorIncansable.png"
import ÁngelﾠdeﾠlaﾠAsistencia from "../../assets/images/insignias/ÁngeldelaAsistencia.png"
import CapitánﾠdeﾠControlﾠFinanciero from "../../assets/images/insignias/CapitándelControFinanciero.png"
import EspecialistaﾠenﾠInversiones from "../../assets/images/insignias/EspecialistaenInversiones.png"
import EstrellaﾠdelﾠAhorro from "../../assets/images/insignias/EstrelladelAhorro.png"
import EliminaciónﾠdeﾠDeudas from "../../assets/images/insignias/Expertoen EliminacióndeDeudas.png"
import GenioﾠdelﾠGasto from "../../assets/images/insignias/GeniodelGasto.png"
import GuardiánﾠdelﾠTesoro from "../../assets/images/insignias/GuardiándeTesoro.png"
import MaestroﾠdeﾠlaﾠModeración from "../../assets/images/insignias/MaestrodelaModeración.png"
import MaestroﾠdelﾠMonitoreo from "../../assets/images/insignias/MaestrodelMonitoreo.png"
import MásterﾠdeﾠMetas from "../../assets/images/insignias/MásterdeMetas.png"
import NinjaﾠdelﾠNegocio from "../../assets/images/insignias/NinjadelNegocio.png"
import ReyﾠdeﾠlaﾠReducciónﾠdeﾠGastos from "../../assets/images/insignias/ReydelaReduccióndeGastos.png"
import GuruﾠdelﾠPresupuesto from "../../assets/images/insignias/GurudelPresupuesto.png"
import HéroeﾠdelﾠHogar from "../../assets/images/insignias/HéroedelHogar.png"


const Profile = () => {
  const token = localStorage.getItem('token');
  const id = localStorage.getItem('id');
  const [user, setUser] = useState({});
  const [rewards, setRewards] = useState([]);
  const [totalPoints, setTotalPoints] = useState(0); // Estado para almacenar los puntos totales del usuario

  const config = {
    headers: {
      'Authorization': 'Bearer ' + token,
      'Content-Type': 'application/json'
    }
  };

  const images = {
    AhorradorﾠIncansable,
    ÁngelﾠdeﾠlaﾠAsistencia,
    CapitánﾠdeﾠControlﾠFinanciero,
    EspecialistaﾠenﾠInversiones,
    EstrellaﾠdelﾠAhorro,
    EliminaciónﾠdeﾠDeudas,
    GenioﾠdelﾠGasto,
    GuardiánﾠdelﾠTesoro,
    MaestroﾠdeﾠlaﾠModeración,
    MaestroﾠdelﾠMonitoreo,
    MásterﾠdeﾠMetas,
    NinjaﾠdelﾠNegocio,
    ReyﾠdeﾠlaﾠReducciónﾠdeﾠGastos,
    GuruﾠdelﾠPresupuesto,
    HéroeﾠdelﾠHogar
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
      setRewards(data);
      // Calcula la suma total de puntos del usuario
      const total = data.reduce((acc, curr) => acc + curr.puntos, 0);
      setTotalPoints(total);
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
        <Col sm="12"> {/* Utilizando la totalidad del ancho de la columna */}
  <div className="d-flex flex-wrap">
    {rewards.map((recompensa, index) => (
      <div className="mr-3 mb-3" style={{ flex: '0 0 auto', marginRight: '10px', marginBottom: '10px' }} key={index}>
        <div className="card" style={{ width: '18rem' }}>
          <img src={images[recompensa.descripcion]} alt={recompensa.descripcion} className="card-img-top rounded-circle" width="100%" />
          <div className="card-body">
            <p className="card-text">
              {recompensa.descripcion}<br />
              <div>Puntos adquiridos: {recompensa.puntos}</div><br />
              {new Date(recompensa.fecha_otorgamiento).toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    ))}
  </div>
</Col>
      </Row>
      <div style={{ position: 'fixed', bottom: '10px', right: '10px', backgroundColor: 'white', padding: '10px', borderRadius: '5px', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.3)' }}>
      <span style={{ fontSize: '1.2rem', fontWeight: 'bold', marginRight: '1.5rem' }}>Puntos Totales:</span> {totalPoints}
    </div>
    </div>
  );
};

export default Profile;