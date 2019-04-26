import React from "react";

import Header from '../../Components/Header/';

import shop from '../../images/shopMak.png';
import fondo from '../../images/fondo.jpg';
import medio from '../../images/perfil2.png';
import icono from '../../images/iconoperson.jpg';

import styled, {css}from 'styled-components'


const Contain = styled.div`
  .fondo{
    width: 100%;
    height: 15%;
  }
  .medio{
    width:60%;
    height:50%;
    transform: translate(35%, -100%);
  }

  .icono{
    width: 3%;
    height: 3%;
    border-radius: 5px;
  }

   @media screen and (max-width: 768px){

    .medio{
      width:58%;
      transform: translate(40%, -70%);
    }
    
    .icono{
      width:7%;
   }
   .compras{
     width:15%;
     transform: translate(-180%, -530%);
     font:60% "sans-serif";
   }
   .datos{
     width:15%;
     transform: translate(-160%, -530%);
     font:60% "sans-serif";
   }
}
`;

const Compras = styled.button`
  background:  #000 ;
  color: #fff;
  font:105% "sans-serif";
  border-radius: 1em;
  border: 2px solid white;
  padding: 1em 1em;
  transform: translate(565%);
  width: 10%;
  box-sizing: border-box;
  transform: translate(-230%, -850%);
`;

const Datos = styled.button`
  background:  #000 ;
  color: #fff;
  font:105% "sans-serif";
  border-radius: 1em;
  border: 2px solid white;
  padding: 1em 1em;
  transform: translate(565%);
  width: 10%;
  box-sizing: border-box;
  transform: translate(-180%, -850%);
`;

const Menu2 = (props) => {
  return (
      <Compras
        className="compras"
        name="busqueda"
        type="submit">
        Mis Compras
      </Compras>

  )
}
const Menu3 = (props) => {
  return (
      <Datos
      className="datos"
        name="busqueda"
        type="submit">
        Mis Datos
      </Datos>

  )
}


export default function Profile(props) {

  return(
    <Contain>
      <Header />

      <img className="fondo" src={fondo}/>
      <img className="medio" src={medio}/>

      <Menu2/>
      <Menu3/>
    </Contain>
  )


}
