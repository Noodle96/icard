import React from 'react'
import {LoginAdmin} from "../../pages/Admin"
import "./AdminLayout.scss";

export  function AdminLayout(props) {
    const {children} = props;
    const auth = null;

    if(!auth) return <LoginAdmin/>


  return (
    <div>
        <p>Estamos en admin layouts</p>
      {children}
    </div>
  );
}
