import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Card, CardBody, CardTitle, Button, Form, FormGroup, Label, Input } from "reactstrap";

const AddInsignias = () => {
    const [insignia, setInsignia] = useState({
        nombre: '',
        descripcion: '',
        puntos: ''
    });

    // Mapeo de nombres de insignias a puntos
const puntosPorInsignia = {
    'AhorradorﾠIncansable': 100,
    'Ángelﾠdeﾠla_Asistencia': 250,
    'CapitánﾠdeﾠControlﾠFinanciero': 200,
    'EspecialistaﾠenﾠInversiones': 300,
    'EstrellaﾠdelﾠAhorro': 250,
    'GenioﾠdelﾠGasto': 200,
    'GuardiánﾠdelﾠTesoro': 300,
    'GuruﾠdelﾠPresupuesto': 150,
    'HéroeﾠdelﾠHogar': 300,
    'MaestroﾠdeﾠlaﾠModeración': 200,
    'MaestroﾠdelﾠMonitoreo': 200,
    'MásterﾠdeﾠMetas': 400,
    'NinjaﾠdelﾠNegocio': 400,
    'ReyﾠdeﾠlaﾠReducciónﾠdeﾠGastos': 300,
};

    const opcionesDescripcion = [
        { value: 'AhorradorﾠIncansable', label: 'AhorradorﾠIncansable' },
        { value: 'Ángelﾠdeﾠla_Asistencia', label: 'ÁngelﾠdeﾠlaﾠAsistencia' },
        { value: 'CapitánﾠdeﾠControlﾠFinanciero', label: 'CapitánﾠdeﾠControlﾠFinanciero' },
        { value: 'EspecialistaﾠenﾠInversiones', label: 'EspecialistaﾠenﾠInversiones' },
        { value: 'EstrellaﾠdelﾠAhorro', label: 'EstrellaﾠdelﾠAhorro' },
        { value: 'GenioﾠdelﾠGasto', label: 'GenioﾠdelﾠGasto' },
        { value: 'GuardiánﾠdelﾠTesoro', label: 'GuardiánﾠdelﾠTesoro' },
        { value: 'GuruﾠdelﾠPresupuesto', label: 'GuruﾠdelﾠPresupuesto' },
        { value: 'HéroeﾠdelﾠHogar', label: 'HéroeﾠdelﾠHogar' },
        { value: 'MaestroﾠdeﾠlaﾠModeración', label: 'MaestroﾠdeﾠlaﾠModeración' },
        { value: 'MaestroﾠdelﾠMonitoreo', label: 'MaestroﾠdelﾠMonitoreo' },
        { value: 'MásterﾠdeﾠMetas', label: 'MásterﾠdeﾠMetas' },
        { value: 'NinjaﾠdelﾠNegocio', label: 'NinjaﾠdelﾠNegocio' },
        { value: 'ReyﾠdeﾠlaﾠReducciónﾠdeﾠGastos', label: 'ReyﾠdeﾠlaﾠReducciónﾠdeﾠGastos' }
    ];

    const addInsignia = async () => {
        try {
            // Datos requeridos para la base de datos
            const data = {
                id_usuario: localStorage.getItem('id'),
                descripcion: insignia.descripcion,
                puntos: puntosPorInsignia[insignia.descripcion], // Obtener puntos de la estructura de datos
                fecha_otorgamiento: new Date().toISOString()
            };

            // Envío de la solicitud POST al backend para agregar la insignia
            const response = await axios.post('http://localhost:5000/recompensas/agregar', data);

            // Si la solicitud es exitosa, mostramos un mensaje de éxito
            if (response.status === 200) {
                Swal.fire({
                    title: 'Insignia agregada exitosamente',
                    icon: 'success',
                    timer: 2000
                });
            }
        } catch (error) {
            console.error(error);
            // Si hay un error, mostramos un mensaje de error
            Swal.fire({
                title: 'Error al agregar la insignia',
                text: 'Por favor, inténtalo de nuevo más tarde',
                icon: 'error',
                timer: 2000
            });
        }
    };

    const handleChangeInsignia = (e) => {
        setInsignia({
            ...insignia,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div>
            <Card>
                <CardBody>
                    <CardTitle tag="h5">Agregar Insignia</CardTitle>
                    <Form>
                        <FormGroup>
                            <Label for="descripcion">Descripción</Label>
                            <Input
                                type="select"
                                id="descripcion"
                                onChange={handleChangeInsignia}
                                name="descripcion"
                                placeholder="Seleccione una opción"
                                required
                            >
                                <option value="">Seleccione una opción</option>
                                {opcionesDescripcion.map((opcion, index) => (
                                    <option key={index} value={opcion.value}>
                                        {opcion.label}
                                    </option>
                                ))}
                            </Input>
                        </FormGroup>
                        {/* Puntos se mostrarán automáticamente basados en la insignia seleccionada */}
                        <Button onClick={addInsignia}>Agregar Insignia</Button>
                    </Form>
                </CardBody>
            </Card>
        </div>
    );
};

export default AddInsignias;