import React from "react";
import { buscarHeroe } from "../../API";
import {
  StyledContainer,
  StyledSearch,
  StyledButton,
  StyledInput,
  StyledDiv,
  StyledCard,
} from "./styles";
import { useState } from "react";

export function Busqueda() {
  const [busqueda, setBusqueda] = useState("");
  const [resultados, setResultados] = useState();

  //guardamos el valor de la busqueda en el estado
  const onChange = (e) => {
    setBusqueda(e.target.value);
  };
  //buscamos el heroe con el fetch desde la api
  const onClick = async () => {
    const datos = await buscarHeroe(busqueda);
    console.log(datos);
    if (!datos.hasOwnProperty("error")) {
      if (datos.hasOwnProperty("results")) {
        setResultados(...[datos.results]);
      } else {
        setResultados([datos]);
      }
    }
    //console.log(datos)
  };

  return (
    <StyledContainer>
      <StyledSearch>
        <StyledInput placeholder="Nombre del heroe" onChange={onChange} />
        <StyledButton onClick={onClick}>Buscar Heroe</StyledButton>
      </StyledSearch>
      <StyledDiv>
        {resultados !== undefined ? 
          
            resultados.map((heroe) => {
              return (
                <StyledCard key={heroe.id}>
                  <h2>{heroe.name}</h2>
                  <p>{heroe.biography["full-name"]}</p>
                  <div className="card-body">
                    <img
                      src={heroe.image.url}
                      alt={`imagen de ${heroe.name}`}
                    />
                  </div>
                  <StyledButton>Agregar</StyledButton>
                </StyledCard>
              );
            })
            : 
          <p>no se encontro resultado</p>
        }
      </StyledDiv>
    </StyledContainer>
  );
}
