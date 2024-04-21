//validar botones en blanco
import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';
import {
    Card,
    CardBody,
    CardTitle,
    ListGroup,
    CardSubtitle,
    ListGroupItem,
    Button,
    Row,
    Col,
    Form,
    FormGroup,
    Label,
    Input,
    FormText
} from "reactstrap";

const Starter = () => {
    const token = localStorage.getItem('token');
    const id = localStorage.getItem('id');
    const navigate = useNavigate()
    const [user, setUser] = useState({});
    const [formPassword, setFormPassword] = useState({
        password: '',
        newPassword: ''
    })

    const updatePassword = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.put(`http://localhost:5000/users/updatePassword/${id}`, formPassword);
            const newPassword1 = document.getElementById('newPassword1').value
            const newPassword2 = document.getElementById('newPassword2').value
            if (newPassword1 === newPassword2) {
                console.log(data.message)
                if (data.message === 'Update successfully') {
                    Swal.fire({
                        title: 'Actualizada correctamente',
                        icon: 'success',
                        timer: 2000
                    })
                    localStorage.setItem('token', "")
                    localStorage.setItem('role', "")
                    localStorage.setItem('id', "")
                    navigate("/")
                }
                else {
                    Swal.fire({
                        title: data.message,
                        icon: 'warning',
                        timer: 2000
                    })
                }
            }
            else {
                Swal.fire({
                    title: "Confirmacion de contraseña no coincide",
                    icon: 'warning',
                    timer: 2000
                })
            }

        } catch (error) {
            console.log(error)
        }
    }

    const updateUser = async (e) => {
        e.preventDefault();
        try {
            console.log(user)
            if(user.name===""||user.surname===""||user.carnet===""){
                Swal.fire({
                    title: "No puede dejar espacio vacios",
                    icon: 'warning',
                    timer: 2000
                })
            }
            else{
                const { data } = await axios.put(`http://localhost:5000/users/update/${id}`, user);
                console.log(data)
                if (data.message === 'Update successfully') {
                    Swal.fire({
                        title: 'Actualizada correctamente',
                        icon: 'success',
                        timer: 2000
                    })
                    navigate("/home/profile")
                }
                else {
                    Swal.fire({
                        title: data.message,
                        icon: 'warning',
                        timer: 2000
                    })
                }
            }
        } catch (error) {
            console.log(error)
        }
    }


    const handleChangePassword = (e) => {
        setFormPassword({
            ...formPassword,
            [e.target.name]: e.target.value,
        })
    }

    const handleChangeUser = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        })
    }

    const getUser = async () => {
        try {
            const { data } = await axios.get(`http://localhost:5000/users/getProfile/${id}`);
            setUser(data)
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getUser();
    }, []);

    return (
        <div>
            <Row>
                <Col sm="6" lg="6" xl="7" xxl="8">
                    <Card>
                        <CardBody>
                            <CardTitle tag="h5">Actualizacion de informacion</CardTitle>
                            <CardSubtitle className="mb-2 text-muted" tag="h6">{user.role}</CardSubtitle>
                            <Form>
                                <FormGroup>
                                    <Label for="examplePassword">NOMBRE</Label>
                                    <Input
                                        id='name'
                                        onChange={handleChangeUser}
                                        name="name"
                                        placeholder="Nombre"
                                        defaultValue={user.name}
                                        required
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="examplePassword">APELLIDO</Label>
                                    <Input
                                        id='surname'
                                        onChange={handleChangeUser}
                                        name="surname"
                                        placeholder="Nombre"
                                        defaultValue={user.surname}
                                        required
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="examplePassword">NO. CARNET</Label>
                                    <Input
                                        id='carnet'
                                        onChange={handleChangeUser}
                                        name="carnet"
                                        placeholder="No. carnet"
                                        defaultValue={user.carnet}

                                        type='number'
                                        required
                                    />
                                </FormGroup>
                                
                                
                                <Button onClick={(e) => updateUser(e)}>Actualizar</Button>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
                <Col sm="6" lg="6" xl="5" xxl="4">
                    <Card>
                        <CardBody>
                            <CardTitle tag="h5">Actualizacion de contraseña</CardTitle>
                            <CardSubtitle className="mb-2 text-muted" tag="h6">{user.role}</CardSubtitle>
                            <Form>
                                <FormGroup>
                                    <Label for="examplePassword">CONTRASEÑA</Label>
                                    <Input
                                        onChange={handleChangePassword}
                                        name="password"
                                        placeholder="Contraseña"
                                        type="password"
                                        required
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleEmail">NUEVA CONTRASEÑA</Label>
                                    <Input
                                        onChange={handleChangePassword}
                                        id='newPassword1'
                                        name="newPassword"
                                        placeholder="Nueva contraseña"
                                        type="password"
                                        required
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleEmail">CONFIRMACION CONTRASEÑA</Label>
                                    <Input
                                        id='newPassword2'
                                        placeholder="Nueva contraseña"
                                        type="password"
                                        required
                                    />
                                </FormGroup>
                                <Button onClick={(e) => updatePassword(e)}>Actualizar</Button>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default Starter;
