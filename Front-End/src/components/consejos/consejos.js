import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Consejos = () => {
    const [consejos, setConsejos] = useState([]);

    useEffect(() => {
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

                const response = await axios.get('http://localhost:5000/consejos/listAll',config);
                setConsejos(response.data);
            } catch (error) {
                console.error('Error al obtener los consejos:', error);
            }
        };

        obtenerConsejos();
    }, []);

    return (
        <>
            <h1>Consejos</h1>
            <div>
                {consejos.map((consejo, index) => (
                    <div key={index} className="card">
                        <div className="card-body">
                            <h5 className="card-title">{consejo.titulo}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{consejo.subtitulo}</h6>
                            <p className="card-text">{consejo.descripcion}</p>
                            {/* Agrega aquí la lógica para manejar los likes */}
                            <button className="btn btn-primary">Like</button>
                            <button className="btn btn-danger">Unlike</button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Consejos;
