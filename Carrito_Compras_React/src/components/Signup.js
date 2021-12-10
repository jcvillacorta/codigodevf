import React from 'react';
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as Yup from "yup";

export default function SignUp() {

    const validationSchema = Yup.object().shape({
        fullname: Yup.string().required('Llena con tus nombres completos'),
        username: Yup.string()
          .required('Usuario es obligatorio')
          .min(6, 'El Usuario debe tener al menos 6 caracteres')
          .max(20, 'El Usuario no debe exceder los 20'),
        email: Yup.string()
          .required('Email es obligatorio')
          .email('Este correo es inválido'),
        password: Yup.string()
          .required('Password es obligatorio')
          .min(6, 'Password debe tener al menos 6 caracteres')
          .max(40, 'Password no debe exceder los 40 caracteres'),
        confirmPassword: Yup.string()
          .required('Debes confirmar tu password')
          .oneOf([Yup.ref('password'), null], 'Tu confirmación no es igual')
      });

      const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
      } = useForm({
        resolver: yupResolver(validationSchema)
      });

      const onSubmit = data => {
        console.log(JSON.stringify(data, null, 2));
      };

    return (
    <div className="col">
    <h1>Regístrate</h1>
    <p>Todos los campos son requeridos.</p>
    <div className="register-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Nombres Completos</label>
          <input
            name="fullname"
            type="text"
            {...register('fullname')}
            className={`form-control ${errors.fullname ? 'is-invalid' : ''}`}
          />
          <div className="invalid-feedback">{errors.fullname?.message}</div>
        </div>

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
          <label>Email</label>
          <input
            name="email"
            type="text"
            {...register('email')}
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
          />
          <div className="invalid-feedback">{errors.email?.message}</div>
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
        
        <div className="form-group">
          <label>Confirmar Password</label>
          <input
            name="confirmPassword"
            type="password"
            {...register('confirmPassword')}
            className={`form-control ${
              errors.confirmPassword ? 'is-invalid' : ''
            }`}
          />
          <div className="invalid-feedback">
            {errors.confirmPassword?.message}
          </div>
        </div>

        <div className="form-group mt-3">
          <button type="submit" className="btn btn-primary me-2">
            Registrar
          </button>
          <button
            type="button"
            onClick={() => reset()}
            className="btn btn-danger float-right"
          >
            Borrar
          </button>
        </div>
      </form>
    </div>
        </div>
    )
}