import React from 'react'

export function ClientLayout(props) {
    const { children } = props;
  return (
    <div>
        <h2>Esta cargando el client layout</h2>
        { children }
    </div>
  );
}
