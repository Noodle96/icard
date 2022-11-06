import React from 'react'
import {Button, Form} from "semantic-ui-react"
import "./LoginForm.scss"

export  function LoginForm() {
  return (
    <form className='login-form-admin'>
      <Form.Input name="email" placeholder="Correo electronico" />
      <Form.Input name="password" placeholder="contraseña" type="password"/>
      <Button type="submit" content="Iniciar Sesión" primary fluid />
    </form>
  )
}
