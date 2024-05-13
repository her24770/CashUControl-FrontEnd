import { Row, Col, Table, Card, CardTitle, CardBody, CardSubtitle,Button } from "reactstrap";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Users = () => {
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        try {
            const { data } = await axios.get(`http://localhost:5000/users/getAll`);
            setUsers(data)
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <Row>
            <Col>
                <Card>
                    <CardBody>
                        <CardTitle tag="h5">Usuarios</CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                            Lista de usuarios en aplicación
                        </CardSubtitle>

                        <Table className="no-wrap mt-3 align-middle" responsive borderless>
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Email</th>
                                    <th>Carnet</th>
                                    <th>Activo</th>
                                    <th>Rol</th>
                                    <th>Opciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((tdata, index) => (
                                    <tr key={index} className="border-top">
                                        <td>
                                            <div className="d-flex align-items-center p-2">
                                                <div className="ms-3">
                                                    <h6 className="mb-0">{tdata.name} </h6>
                                                    <span className="text-muted">{tdata.surname}</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{tdata.email}</td>
                                        <td>{tdata.carnet}</td>
                                        <td>Q {tdata.activo}.00</td>
                                        <td>
                                            {tdata.role === "USER" ? (
                                                <span>{tdata.role}<span className="p-2 bg-warning rounded-circle d-inline-block ms-3"></span></span>
                                            ) : tdata.role === "ADMIN" ? (
                                                <span>{tdata.role}<span className="p-2 bg-success rounded-circle d-inline-block ms-3"></span></span>
                                            ) : (
                                                <span>{tdata.role} <span className="p-2 bg-danger rounded-circle d-inline-block ms-3"></span></span>
                                            )}
                                        </td>
                                        <td>

                                        {/* <Button tag={Link} to="/home/addInsignias" className="btn" color="primary" size="lg">
                                            Mis Insignias
                                         </Button> */}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    );
};

export default Users;
