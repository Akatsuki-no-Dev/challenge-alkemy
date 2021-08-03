import React from "react";
import { buscarHeroe } from "../../API";
import { StyledButton, StyledInput } from "./styles";
import { useState } from "react";

export function Busqueda() {
  const [busqueda, setBusqueda] = useState("");
  
  //guardamos el valor de la busqueda en el estado
  const onChange = (e) => {
    setBusqueda(e.target.value);
  };
  //buscamos el heroe con el fetch desde la api
  const onClick = async () => {
    const datos = await buscarHeroe(busqueda);
    console.log(datos);
  };
  
  return (
    <>
      <StyledInput placeholder="Nombre del heroe" onChange={onChange} />
      <StyledButton onClick={onClick}>Buscar Heroe</StyledButton>
    </>
  );
}
