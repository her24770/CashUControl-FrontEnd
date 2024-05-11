import { Row, Col, Table, Card, CardTitle, CardSubtitle, CardBody, Button } from "reactstrap";
import { Link } from 'react-router-dom';
import SalesChart from "../dashboard/SalesChart";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import 'moment/locale/es';
moment.locale('es');



const Tables = () => {
    const id = localStorage.getItem('id');
    const [ingresos, setIngresos] = useState([]);
    const [egresos, setEgresos] = useState([]);

    //funcion listar ingresos
    const getIngresos = async () => {
        try {
            const { data } = await axios.get(`http://localhost:5000/ingresos/listIdUser/${id}`);
            setIngresos(data)
        } catch (error) {
            console.error(error);
        }
    };
    //funcion listar egrsos
    const getEgresos = async () => {
        try {
            const { data } = await axios.get(`http://localhost:5000/egresos/searchByUser/${id}`);
            setEgresos(data)
        } catch (error) {
            console.error(error);
        }
    };
    //cambio de formato de fecha
    const formatFecha = (fecha) => {
        const momentFecha = moment(fecha);
        const dia = momentFecha.format('D');
        const nombreMes = momentFecha.format('MMMM');
        const año = momentFecha.format('YYYY');
        return `${dia} ${nombreMes} del ${año}`;
    };
    //cambio de formato de HOra
    const formatHora = (fecha) => {
        const momentFecha = moment(fecha);
        const horas = momentFecha.format('HH');
        const segundos = momentFecha.format('ss');
        return `${horas} : ${segundos} horas`;
    };

    useEffect(() => {
        getIngresos();
        getEgresos();
    }, []);

    return (
        <Row>
            <Col lg="12">
                <SalesChart />
            </Col>
            <Col lg="6">
                <Card>
                    <CardBody>
                        <Button tag={Link} to="/home/addIngreso" className="btn" color="primary" size="lg">
                            <i class="bi bi-plus-circle-fill me-3"></i>
                            Nuevo Ingreso
                        </Button>
                        <hr></hr>
                        <CardTitle tag="h5">Ingresos</CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                            Historial
                        </CardSubtitle>

                        <Table className="no-wrap mt-3 align-middle" responsive borderless>
                            <thead>
                                <tr>
                                    <th>Descripción</th>
                                    <th>Monto</th>
                                    <th>Fecha</th>
                                </tr>
                            </thead>
                            <tbody>
                                {ingresos.slice().reverse().map((tdata, index) => {
                                    const date = new Date(tdata.date.$date);
                                    const formattedDate = formatFecha(date);
                                    const formattedHora = formatHora(date)

                                    return (
                                        <tr key={index} className="border-top">
                                            <td>{tdata.descripcion}</td>
                                            <td>Q {tdata.monto}.00</td>
                                            <td>
                                                <div className="d-flex align-items-center p-2">
                                                    <div className="ms-3">
                                                        <h6 className="mb-0">{formattedDate}</h6>
                                                        <span className="text-muted">{formattedHora}</span>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </Table>
                    </CardBody>
                </Card>
            </Col>
            <Col lg="6">
                <Card>
                <CardBody>
                        <Button tag={Link} to="/home/addEgreso" className="btn" color="primary" size="lg">
                            <i class="bi bi-plus-circle-fill me-3"></i>
                            Nuevo Egreso
                        </Button>
                        <hr></hr>
                        <CardTitle tag="h5">Egreso</CardTitle>
                        <CardSubtitle className="mb-2 text-muted" tag="h6">
                            Historial
                        </CardSubtitle>

                        <Table className="no-wrap mt-3 align-middle" responsive borderless>
                            <thead>
                                <tr>
                                    <th>Descripción</th>
                                    <th>Monto</th>
                                    <th>Fecha</th>
                                </tr>
                            </thead>
                            <tbody>
                                {egresos.slice().reverse().map((tdata, index) => {
                                    const date = new Date(tdata.date.$date);
                                    const formattedDate = formatFecha(date);
                                    const formattedHora = formatHora(date)

                                    return (
                                        <tr key={index} className="border-top">
                                            <td>{tdata.descripcion}</td>
                                            <td>Q {tdata.monto}.00</td>
                                            <td>
                                                <div className="d-flex align-items-center p-2">
                                                    <div className="ms-3">
                                                        <h6 className="mb-0">{formattedDate}</h6>
                                                        <span className="text-muted">{formattedHora}</span>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </Table>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    );
};

export default Tables;
