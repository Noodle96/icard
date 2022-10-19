import React from 'react'
import "./AdminLayout.scss";

export  function AdminLayout(props) {
    const {children} = props;
  return (
    <div>
        <p>Estamos en admin layouts</p>
      {children}
    </div>
  );
}
