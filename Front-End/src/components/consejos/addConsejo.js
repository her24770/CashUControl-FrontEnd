import React, { useState, useEffect } from 'react';

function AddConsejo() {
  const [formData, setFormData] = useState({
    id_usuario: localStorage.getItem('id'),
    categoria: "",
    descripcion: "",
    fecha: ""
  });

  useEffect(() => {
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().slice(0, 10); // Formato YYYY-MM-DD
    setFormData(prevFormData => ({ ...prevFormData, fecha: formattedDate }));
  }, []); // Se ejecuta solo una vez al montar el componente
  
  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:5000/consejos/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
  
      if (response.ok) {
        // Si la petición es exitosa, redirige a la página de consejos
        window.location.href = 'http://localhost:3000/#/home/consejos';
      } else {
        // Maneja errores si la petición no es exitosa
        console.error('Error al enviar la petición');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="categoria" className="form-label">Categoría</label>
          <input type="text" className="form-control" id="categoria" name="categoria" value={formData.categoria} onChange={handleChange} />
          <div className="form-text">Ingrese la categoría que va a pertenecer</div>
        </div>
        <div className="mb-3">
          <label htmlFor="descripcion" className="form-label">Descripción</label>
          <input type="text" className="form-control" id="descripcion" name="descripcion" value={formData.descripcion} onChange={handleChange} />
          <div className="form-text">Ingrese la descripción</div>
        </div>
        <div className="mb-3">
          <label htmlFor="fecha" className="form-label">Fecha</label>
          <input type="text" className="form-control" id="fecha" name="fecha" value={formData.fecha} disabled readOnly />
          <div className="form-text">Fecha actual</div>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default AddConsejo;
