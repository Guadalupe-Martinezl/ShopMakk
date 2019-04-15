import React from "react";

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

  .logo {
    width: 15%;
    height: 15%;
    border-radius: 5px;
    transform: translate(-55%, 8%);
  }

  .icono{
    width: 3%;
    height: 3%;
    border-radius: 5px;
  }

  .nav{
  position: absolute;
  display: flex;
  flex-direction: row;
  font-size: 20px;
  color: #fff;
  justify-content: center;
  align-items: center;
  z-index: 3;
  list-style: none;
  background: #000;
  padding: 20px;
  width: 97.4%;
  font-weight: bold;
  left: 50%;
  margin-top: 1%;
  transform: translate(-50%, -40%);

  }
  .li{
    margin-left: 100px;
    margin-right: 20px;
    cursor: pointer;
    color: white;
    }

   @media screen and (max-width: 600px){
    .nav{
      width:82.4%;
    }
    .li{
      margin-left: 30px;
      margin-right: 30px;
      font-size: 10px;
    }
    .medio{
      width:58%;
    }
    .logo{
      width:25%;
      transform: translate(-20%, -5%);
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

const Input = styled.input.attrs(({ size }) => ({
  margin: size || "5em",
  padding: size || "5px"
}))`
  color:palevioletred ;
  font-size: 20px;
  border: 1px solid orange;
  border-radius: 2px;
  color: black;
  width: 100%;
  max-width: 500px;
  box-sizing: border-box;
`;
const Busqueda = styled.input.attrs(({ size }) => ({
  margin: size || "5em",
  padding: size || "5px"
}))`
  color:palevioletred ;
  font-size: 20px;
  border: 2px solid white;
  border-radius: 5px;
  color: black;
  width: 20%;
  max-width: 500px;
  box-sizing: border-box;
  transform: translate(8%, -10%);

`;
const Button = styled.button`
  background:  #000 ;
  color: #fff;
  font:100% "sans-serif";
  border-radius: 1em;
  border: 1px solid black;
  padding: 0.25em 1em;
  transform: translate(15%);
  width: 50%;
  max-width: 500px;
  box-sizing: border-box;
`;
const Buscar = styled.button`
  background:  #000 ;
  color: #fff;
  font:100% "sans-serif";
  border-radius: 1em;
  border: 2px solid white;
  padding: 0.25em 1em;
  transform: translate(565%);
  width: 7%;
  max-width: 500px;
  box-sizing: border-box;
  transform: translate(20%, -10%);
`;

const Compras = styled.button`
  background:  #000 ;
  color: #fff;
  font:100% "sans-serif";
  border-radius: 1em;
  border: 3px solid white;
  padding: 1em 1em;
  transform: translate(565%);
  width: 10%;
  box-sizing: border-box;
  transform: translate(-200%, -850%);
`;

const Datos = styled.button`
  background:  #000 ;
  color: #fff;
  font:105% "sans-serif";
  border-radius: 1em;
  border: 3px solid white;
  padding: 1em 1em;
  transform: translate(565%);
  width: 10%;
  box-sizing: border-box;
  transform: translate(-180%, -850%);
`;

const Menu = (props) => {

  return (
    <ul className="nav">
      <img className="logo" src={shop}/>
      <Busqueda
        className="busqueda"
        type="text"
        placeholder="Busqueda"
        />
        <Buscar
          className="Buscar"
          name="busqueda"
          type="submit">
          Buscar
        </Buscar>
        <li className="li">Productos</li>
        <li className="li">Favoritos</li>
        <li className="li">About</li>
        <img className="icono" src={icono}/>
     </ul>
  )
}
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
      <Menu />

      <img className="fondo" src={fondo}/>
      <img className="medio" src={medio}/>

      <Menu2/>
      <Menu3/>
    </Contain>
  )


}
