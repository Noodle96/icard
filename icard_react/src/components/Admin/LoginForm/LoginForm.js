import React from 'react'
import {Button, Form} from "semantic-ui-react"
import {useFormik} from "formik"
import * as Yup from "yup"
import "./LoginForm.scss"

export  function LoginForm() {
  const formik= useFormik({
    initialValues: initialValues(),
    validateOnChange:false,
    validationSchema: Yup.object(validationSchema()),
    onSubmit: (formValue)=>{
        console.log("Login Correcto");
        console.log(formValue);
    },
  });
  return (
    <form className='login-form-admin' onSubmit={formik.handleSubmit}>
      <Form.Input 
        name="email"
        placeholder="Correo electronico" 
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.errors.email}
        />
      <Form.Input 
        name="password" 
        placeholder="contraseña" 
        type="password" 
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.errors.password}
        />
      <Button type="submit" content="Iniciar Sesión" primary fluid />
    </form>
  )
}

function initialValues(){
  return {
    email:"",
    password:"",
  };
}

function validationSchema(){
  return{
    email: Yup.string().email("Formato invalido").required("Requerido"),
    password: Yup.string().required("Requerido"),
  };
}
