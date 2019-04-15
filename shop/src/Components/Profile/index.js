import React from "react";

import shop from '../../images/shopMak.png';
import fondo from '../../images/fondo.jpg';

import styled, {css}from 'styled-components'


const Contain = styled.div`
.fondo{
  width: 100%;
    height: 15%;

}
  .logo {
    width: 15%;
    height: 15%;
    border-radius: 5px;
    transform: translate(-45%, 8%);
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
  padding: 30px;
  width: 96%;
  font-weight: bold;
  left: 50%;
  margin-top: 2%;
  transform: translate(-50%, -40%);

  }
  .li{
    margin-left: 70px;
    margin-right: 70px;
    cursor: pointer;
    color: white;
    }
   @media screen and (max-width: 300px){

    font-size: 10px
   }
   @media screen and (max-width: 600px){

    .li
      margin-left: 30px
      margin-right: 30px
      font-size: 10px
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

const Menu = (props) => {

  return (
    <ul className="nav">
    <img className="logo" src={shop}/>
    <Busqueda
      type="text"
      placeholder="Busqueda"
      />
      <Buscar
        name="busqueda"
        type="submit">
        Buscar
      </Buscar>
      <li className="li">Productos</li>
      <li className="li">Favoritos</li>
      <li className="li">About</li>

    </ul>
  )
}

export default function Profile(props) {

  return(
    <Contain>


      <Menu />

  <img className="fondo" src={fondo}/>


    </Contain>
  )


}
