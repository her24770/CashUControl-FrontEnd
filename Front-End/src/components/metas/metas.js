import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import moment from 'moment';
import { Card, CardBody, CardTitle, Button, Form, FormGroup, Label, Input, Table } from "reactstrap";

const Metas = () => {
    const [metas, setMetas] = useState([]);
    const [meta, setMeta] = useState({
        tipo: '',
        monto: '',
        dateObjetivo:''
    });
    const [isEditing, setIsEditing] = useState(false);
    const [editingMetaId, setEditingMetaId] = useState(null);

    //cambio de formato de fecha
  const formatFecha = (fecha) => {
    const momentFecha = moment(fecha);
    const dia = momentFecha.format('D');
    const nombreMes = momentFecha.format('MMMM');
    const año = momentFecha.format('YYYY');
    return `${dia} ${nombreMes} del ${año}`;
};

    const fetchMetas = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/metas/listIdUser/${localStorage.getItem('id')}`);
            setMetas(response.data);
        } catch (error) {
            console.error(error);
            Swal.fire({
                title: 'Error al cargar las metas',
                text: 'Por favor, inténtalo de nuevo más tarde',
                icon: 'error',
                timer: 2000
            });
        }
    };

    useEffect(() => {
        fetchMetas();
    }, []);

    const handleChange = (e) => {
        console.log(meta.dateObjetivo)
        setMeta({
            ...meta,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(meta.dateObjetivo)
            const data = {
                idUser: localStorage.getItem('id'),
                tipo: meta.tipo,
                monto: meta.monto,
                dateObjetivo: meta.dateObjetivo
            };

            if (isEditing) {
                await axios.put(`http://localhost:5000/metas/edit/${editingMetaId}`, data);
                Swal.fire({
                    title: 'Meta actualizada exitosamente',
                    icon: 'success',
                    timer: 2000
                });
            } else {
                await axios.post('http://localhost:5000/metas/add', data);
                Swal.fire({
                    title: 'Meta agregada exitosamente',
                    icon: 'success',
                    timer: 2000
                });
            }

            setMeta({ tipo: '', monto: '', dateObjetivo:'' });
            setIsEditing(false);
            setEditingMetaId(null);
            fetchMetas();
        } catch (error) {
            console.error(error);
            Swal.fire({
                title: 'Formato de fecha debe ser año-mes-día',
                text: 'Ejemplo: 2024-10-25',
                icon: 'error',
                timer: 2000
            });
        }
    };

    const handleEdit = (meta) => {
        setMeta({ tipo: meta.tipo, monto: meta.monto });
        setIsEditing(true);
        setEditingMetaId(meta._id['$oid']);
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/metas/eliminar/${id}`);
            fetchMetas();
            Swal.fire({
                title: 'Meta eliminada exitosamente',
                icon: 'success',
                timer: 2000
            });
        } catch (error) {
            console.error(error);
            Swal.fire({
                title: 'Error al eliminar la meta',
                text: 'Por favor, inténtalo de nuevo más tarde',
                icon: 'error',
                timer: 2000
            });
        }
    };

    return (
        <div>
            <Card>
                <CardBody>
                    <CardTitle tag="h5">{isEditing ? 'Editar Meta' : 'Agregar Meta'}</CardTitle>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label for="tipo">Tipo</Label>
                            <Input
                                type="text"
                                id="tipo"
                                name="tipo"
                                value={meta.tipo}
                                onChange={handleChange}
                                required
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="monto">Monto</Label>
                            <Input
                                type="number"
                                id="monto"
                                name="monto"
                                value={meta.monto}
                                onChange={handleChange}
                                required
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="dateObjetivo">Fecha Objetivo</Label>
                            <Input
                                type="text"
                                id="dateObjetivo"
                                name="dateObjetivo"
                                value={meta.dateObjetivo}
                                onChange={handleChange}
                                required
                            />
                        </FormGroup>
                        <Button type="submit">{isEditing ? 'Actualizar Meta' : 'Agregar Meta'}</Button>
                    </Form>
                </CardBody>
            </Card>
            <Table>
                <thead>
                    <tr>
                        <th>Tipo</th>
                        <th>Monto</th>
                        <th>Fecha Objetivo</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {metas.map(meta => (
                        <tr key={meta._id['$oid']}>
                            <td>{meta.tipo}</td>
                            <td>Q {meta.monto}.00</td>
                            <td>{formatFecha(new Date(meta.dateObjetivo.$date))}</td>
                            <td>
                                <Button color="warning" onClick={() => handleEdit(meta)}>Editar</Button>
                                <Button color="danger" onClick={() => handleDelete(meta._id['$oid'])}>Eliminar</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default Metas;