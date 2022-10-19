import React from 'react'
import "./ClientLayout.scss";

export  function ClientLayout(props) {
    const {children} = props;
  return (
    <div>
      <p>Estamos en Client ClientLayout</p>
      {children}
    </div>
  );
}
