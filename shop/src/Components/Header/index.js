import React from "react";

import shop from '../../images/shopMak.png';
import fondo from '../../images/fondo.jpg';
import icono from '../../images/iconoperson.jpg';

import styled, {css}from 'styled-components'

const Contain = styled.div`
  .logo {
    width: 10%;
    height: 10%;
    border-radius: 5px;
    transform: translate(-70%, -10%);
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
  width: 100%;
  font-weight: bold;
  left: 50%;
  margin-top: 1%;
  transform: translate(-50%, -40%);
  }
  .li{
    margin-left: 50px;
    margin-right: 5px;
    cursor: pointer;
    color: white;
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
    font:90% "sans-serif";
    border-radius: 1em;
    border: 2px solid white;
    padding: 0.25em 1em;
    transform: translate(565%);
    width: 8%;
    max-width: 500px;
    box-sizing: border-box;
    transform: translate(20%, -10%);
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
        <li className="li">Registrate</li>
        <li className="li">Login</li>

        <img className="icono" src={icono}/>
     </ul>
  )
}


export default function Header(props) {
  return(
    <Contain>
      <Menu />
    </Contain>
  )


}
