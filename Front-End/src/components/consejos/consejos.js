import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Consejos = () => {
    const [consejos, setConsejos] = useState([]);

    const obtenerConsejos = async () => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                console.error('No se encontró el token de autorización.');
                return;
            }

            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            };

            const response = await axios.get('http://localhost:5000/consejos/listAll', config);
            setConsejos(response.data);
        } catch (error) {
            console.error('Error al obtener los consejos:', error);
        }
    };

    useEffect(() => {
        obtenerConsejos();
    }, []);

    const handleLike = async (id) => {
        try {
            console.log(id);
            await axios.post(`http://localhost:5000/consejos/like/${id}`);
            // Actualizar los consejos después de realizar la acción
            obtenerConsejos();
        } catch (error) {
            console.error('Error al dar like:', error);
        }
    };

    const handleUnlike = async (id) => {
        try {
            console.log(id);
            await axios.post(`http://localhost:5000/consejos/unlike/${id}`);
            // Actualizar los consejos después de realizar la acción
            obtenerConsejos();
        } catch (error) {
            console.error('Error al quitar like:', error.response.data);
        }
    };

    const formatDate = (dateString) => {
        try {
            // Intenta parsear la cadena de fecha
            const date = new Date(dateString);
            if (isNaN(date.getTime())) {
                // La cadena de fecha no es válida, devuelve un mensaje de error
                console.log(date);
                return 'Fecha inválida';
            }
            // La cadena de fecha es válida, formatea y devuelve la fecha
            return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
        } catch (error) {
            // Si hay un error al parsear la fecha, devuelve un mensaje de error
            console.error('Error al parsear la fecha:', error);
            return 'Error de formato de fecha';
        }
    }

    return (
        <>
            <h1>Consejos</h1>
            <div>
                {consejos.map((consejo, index) => (
                    <div key={index} className="card">
                        <div className="card-body">
                            <h5 className="card-title">Categoria: {consejo.categoria}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{formatDate(consejo.fecha)}</h6>
                            <p className="card-text">Descripcion: {consejo.descripcion}</p>
                            {/* Agrega aquí la lógica para manejar los likes */}

                            <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                                <div className="btn-group me-2" role="group" aria-label="First group">
                                    <p>{consejo.likes}</p>
                                </div>
                                <div className="btn-group me-2" role="group" aria-label="Second group">
                                    <button className="btn btn-primary" onClick={() => handleLike(consejo._id)}> 
                                        <i className="bi bi-hand-thumbs-up-fill"></i>    
                                    </button>
                                </div>
                                <div className="btn-group" role="group" aria-label="Third group">
                                    <button className="btn btn-danger" onClick={() => handleUnlike(consejo._id)}>
                                        <i className="bi bi-hand-thumbs-down-fill"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Consejos;
