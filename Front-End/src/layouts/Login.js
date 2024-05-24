import './styleLogin.css';
import React, { useState } from 'react'
import {useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';
import axios from 'axios'

const LoginView = () => {

    const navigate = useNavigate()

    const [form, setForm] = useState({
        email: '',
        password: ''
      })

    const handleChange = (e)=>{
        setForm({
          ...form,
          [e.target.name]: e.target.value,
        })
      }
    //funcion para loguearse
    const login = async (e) => {
        e.preventDefault();  
        try {
            const {data} = await axios.post('http://localhost:5000/users/login', form);
            console.log(data)
            if(data.token){
                localStorage.setItem('token',data.token)
                localStorage.setItem('role', data.user.role)
                localStorage.setItem('id',data.user._id.$oid)
                console.log(localStorage.getItem('role'))
                navigate('/home')
                window.location.reload()
            }
            else{
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

    const register = async (e) => {
      e.preventDefault();  
      try {
          const {data} = await axios.post('http ://localhost:5000/users/register', form);
          if(data.message == 'Add succesfully'){
            window.location.reload()
              Swal.fire({
                title: "Se agrego exitosamente",
                icon: 'success',
                timer: 2000
              })
          }
          else{
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
    
    
    

    return (
       <div className="main">  	
		<input type="checkbox" id="chk" aria-hidden="true"/>

			<div className="signup">
				<form>
					<label for="chk" aria-hidden="true">Login</label>
					<input onChange={handleChange} type="email" name="email" placeholder="Email" required=""/>
					<input onChange={handleChange} type="password" name="password" placeholder="Contraseña" required=""/>
					<button onClick={(e)=> login(e)}>Login</button>
				</form>
			</div>

			<div className="login">
				<form>
					<label for="chk" aria-hidden="true">Sign up</label>
					<input onChange={handleChange} type="email" name="email" placeholder="Email UVG" required=""/>
          <input onChange={handleChange} name="name" placeholder="Nombre" required=""/>
          <input onChange={handleChange} name="surname" placeholder="Apellido" required=""/>
          <input onChange={handleChange} type="number" name="carnet" placeholder="No. Carnet" required=""/>
					<input onChange={handleChange} type="password" name="password" placeholder="Contraseña" required=""/>
					<button onClick={(e)=> register(e)}>Sign up</button>
				</form>
			</div>
	</div>
  );
}

export default LoginView;
