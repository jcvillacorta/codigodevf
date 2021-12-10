import React from 'react';
import {useForm} from "react-hook-form";
import {useState, useReducer} from "react";
import {yupResolver} from "@hookform/resolvers/yup";
import * as Yup from "yup";


const initialState = {resultado: ""}

function reducer(state, action){
  switch (action.type) {
    case "USUARIO_CORRECTO":
      return {resultado: "Logueado" };//`Hola, ${usuarios[i].fullname}`

    case "USUARIO_INCORRECTO":
      return {resultado: "Usuario y contraseña incorrectos"};
  
    default:
      return state;
  }
}

export default function Login(props) {
    const [state, dispatch] = useReducer(reducer, initialState)
   // const [result, setResult] = useState("")
   const [isLogin, setIsLogin] = useState(false)
    const {users, navigateTo, page_signup, page_cart} = props;
    
    const usuarios = users.map(element => element) // con find sale correcto el primer usuario
    //console.log(usuarios)

    const validationSchema = Yup.object().shape({
        username: Yup.string()
          .required('Usuario es obligatorio'),
        password: Yup.string()
          .required('Password es obligatorio'),
      });

      const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm({
        resolver: yupResolver(validationSchema)
      });

      const onSubmit = data => {
        //console.log(JSON.stringify(data, null, 2));
        //data.username === usuarios.username && data.password === usuarios.password ? setResult("Logueado") : setResult("Usuario y password incorrectos, intente nuevamente")
        for (let i=0; i < usuarios.length; i++){
          if (data.username === usuarios[i].username && data.password === usuarios[i].password ){
            //setResult(`Hola, ${usuarios[i].fullname}`);
            dispatch({type:"USUARIO_CORRECTO"});
            let account = JSON.stringify(data, null, 2);
            localStorage.setItem("cuenta_logueada", account);
            setIsLogin(true);
            break
          } else {
            //setResult("Usuario y password incorrectos, intente nuevamente");
            dispatch({type:"USUARIO_INCORRECTO"})
            setIsLogin(false);
          }
        }
        // usuarios.forEach(element => {
        //    data.username === element.username && data.password === element.password ? setResult("Logueado") : setResult("Usuario y password incorrectos, intente nuevamente")
        //  }); 
      };
      // navigateTo(page_cart) && 

    return (
    <div className="col">
    <h1>Login</h1>
    <div className="register-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Usuario</label>
          <input
            name="username"
            type="text"
            {...register('username')}
            className={`form-control ${errors.username ? 'is-invalid' : ''}`}
          />
          <div className="invalid-feedback">{errors.username?.message}</div>
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            name="password"
            type="password"
            {...register('password')}
            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
          />
          <div className="invalid-feedback">{errors.password?.message}</div>
        </div>

        <div className="form-group mt-3">
          <p>
            {state.resultado}
          </p>
        </div>

        <div className="form-group mt-3">
          <button type="submit" className="btn btn-primary me-2">
            Login
          </button>
        </div>
      </form>

      <div className="row mt-3">
            <p>¿No te has registrado aún? <a href="#/home" onClick={() => navigateTo(page_signup)}>¡Regístrate!</a></p>
        </div>
    </div>
        </div>
    )
}