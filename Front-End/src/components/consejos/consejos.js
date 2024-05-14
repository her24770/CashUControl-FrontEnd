import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Consejos = () => {
    const [consejos, setConsejos] = useState([]);
    const [userId, setUserId] = useState(""); // Suponiendo que este es el id_usuario del usuario autenticado
    const [likedConsejos, setLikedConsejos] = useState([]); // Lista de IDs de consejos que el usuario ha dado like

    useEffect(() => {
        obtenerConsejos();
        const userId = localStorage.getItem('id'); // Obtener el id_usuario del usuario autenticado
        if (userId) {
            setUserId(userId);
        }
    }, []);

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

    const handleLike = async (id) => {
        try {
            await axios.post(`http://localhost:5000/consejos/like/${id}`);
            obtenerConsejos(); // Recargar los consejos después de dar like
            // Agregar el ID del consejo a la lista de consejos que el usuario ha dado like
            setLikedConsejos(prevLikedConsejos => [...prevLikedConsejos, id]);
        } catch (error) {
            console.error('Error al dar like:', error);
        }
    };

    const handleUnlike = async (id) => {
        try {
            await axios.post(`http://localhost:5000/consejos/unlike/${id}`);
            obtenerConsejos(); // Recargar los consejos después de dar dislike
            // Eliminar el ID del consejo de la lista de consejos que el usuario ha dado like
            setLikedConsejos(prevLikedConsejos => prevLikedConsejos.filter(consejoId => consejoId !== id));
        } catch (error) {
            console.error('Error al quitar like:', error.response.data);
        }
    };

    const eliminarConsejo = async (id) => {
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

            await axios.delete(`http://localhost:5000/consejos/delete/${id}`, config);
            obtenerConsejos(); // Recargar los consejos después de eliminar un consejo
            // Si el consejo eliminado estaba en la lista de consejos que el usuario ha dado like, eliminarlo de la lista
            setLikedConsejos(prevLikedConsejos => prevLikedConsejos.filter(consejoId => consejoId !== id));
        } catch (error) {
            console.error('Error al eliminar el consejo:', error);
        }
    };

    const formatDate = (dateString) => {
        try {
            const date = new Date(dateString);
            if (isNaN(date.getTime())) {
                return 'Fecha inválida';
            }
            return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
        } catch (error) {
            console.error('Error al parsear la fecha:', error);
            return 'Error de formato de fecha';
        }
    };

    // Función para determinar si un consejo tiene like del usuario actual
    const tieneLike = (id) => likedConsejos.includes(id);

    return (
        <>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <h1>Consejos</h1>
                <button type="button" className="btn btn-primary">Deja un comentario</button>
            </div>

            <div>
                {consejos.map((consejo, index) => (
                    <div key={index} className="card">
                        <div className="card-body">
                            <h5 className="card-title">Categoria: {consejo.categoria}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{formatDate(consejo.fecha)}</h6>
                            <p className="card-text">Descripcion: {consejo.descripcion}</p>

                            <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                                <div className="btn-group me-2" role="group" aria-label="First group">
                                    <p>{consejo.likes}</p>
                                </div>
                                <div className="btn-group me-2" role="group" aria-label="Second group">
                                    <button className="btn btn-primary" onClick={() => handleLike(consejo._id.$oid)} disabled={tieneLike(consejo._id.$oid)}>
                                        <i className="bi bi-hand-thumbs-up-fill"></i>
                                    </button>
                                </div>
                                <div className="btn-group me-2" role="group" aria-label="Third group">
                                    <button className="btn btn-danger" onClick={() => handleUnlike(consejo._id.$oid)}>
                                        <i className="bi bi-hand-thumbs-down-fill"></i>
                                    </button>
                                </div>
                                {consejo.id_usuario.$oid === userId && (
                                    <div className="btn-group me-2" role="group" aria-label="Fourth group">
                                        <button className="btn btn-danger" onClick={() => eliminarConsejo(consejo._id.$oid)}>
                                            <i className="bi bi-trash"></i>
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Consejos;
