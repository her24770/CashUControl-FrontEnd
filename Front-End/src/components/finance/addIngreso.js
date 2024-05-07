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

const AddIngreso = () => {
    const token = localStorage.getItem('token');
    const id = localStorage.getItem('id');
    const navigate = useNavigate()
    const [ingreso, setIngreso] = useState({
        descripcion: '',
        monto: '',
        date:'',
        idUser:''
    });

    const addIngreso = async (e) => {
        e.preventDefault();
        try {
            ingreso.date= new Date().toISOString()
            ingreso.idUser=id
            ingreso.monto= parseInt(ingreso.monto)
            const { data } = await axios.post(`http://localhost:5000/ingresos/add`, ingreso);
            if (data.message === 'Add succesfully') {
                Swal.fire({
                    title: 'Agregado exitosamente',
                    icon: 'success',
                    timer: 2000
                })
                navigate("/home/historyFinances")
            }
            else {
                Swal.fire({
                    title: data.message,
                    icon: 'warning',
                    timer: 2000
                })
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleChangeIngreso = (e) => {
        setIngreso({
            ...ingreso,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <div>
            <Row>
                <Col sm="6" lg="6" xl="7" xxl="8" className="mx-auto text-center">
                    <Card>
                        <CardBody>
                            <CardTitle tag="h5">Agregar Ingreso</CardTitle>
                            <CardSubtitle className="mb-2 text-muted" tag="h6">Finanzas</CardSubtitle>
                            <Form>
                                <FormGroup>
                                    <Label for="examplePassword">DESCRIPCIÓN</Label>
                                    <Input
                                        id='name'
                                        onChange={handleChangeIngreso}
                                        name="descripcion"
                                        placeholder="Descripción"
                                        required
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="examplePassword">MONTO</Label>
                                    <Input
                                        type='number'
                                        id='monto'
                                        onChange={handleChangeIngreso}
                                        name="monto"
                                        placeholder="Monto en Q"
                                        required
                                    />
                                </FormGroup>
                                <Button onClick={(e) => addIngreso(e)}>Agregar</Button>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default AddIngreso;