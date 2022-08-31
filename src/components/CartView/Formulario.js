import React from "react";

function FormularioDatos(props) {
  return (
    <form className="datos-formulario">
      <input
        className="datos-input"
        type="text"
        placeholder="Escribe tu nombre completo"
        name="texto"
      />
      <input
        className="datos-input"
        type="text"
        placeholder="Escribe tu email"
        name="texto"
      />
      <input
        className="datos-input"
        type="text"
        placeholder="Selecciona tu forma de pago"
        name="texto"
      />
      <button className="compra-boton">Realizar compra</button>
    </form>
  );
}

export default FormularioDatos;