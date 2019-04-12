import React from "react";

import shop from '../../images/shop2.png';
import usuario from '../../images/user.png';
import fondo from '../../images/fondo.jpg';
import ahorro from '../../images/ahorro.jpg';

import styled, {css}from 'styled-components'

const Contain = styled.div`
  padding:0;
  margin: 0;
  background: url(${fondo}) no-repeat bottom;
  background-size: 100%, 110%;
  box-sizing: border-box;

.menu img {
  width: 15%;
  height: 15%;
  border-radius: 5px;
}
.login h1{
  font-family: monospace;
  font-style: oblique;
  font-size: 30px;
}
.login{
  margin:auto;
  width: 50%;
  padding: 0;
  transform: translate(3%, 100%);
  color: black;
  text-align: center;
  box-sizing: border-box;
}
.login img{
  width: 15%;
  height: 15%;
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
  border: 1px solid black;
  border-radius: 2px;
  color: black;
  width: 20%;
  max-width: 500px;
  box-sizing: border-box;
  transform: translate(100%, -100%);

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
  border: 1px solid black;
  padding: 0.25em 1em;
  transform: translate(565%);
  width: 7%;
  max-width: 500px;
  box-sizing: border-box;
  transform: translate(290%, -100%);
`;
const Footer = styled.footer`
font: 20px "monospace";
transform: translate(30%, 100%);

.img1 img{
  width:20%;
  height:20%;
}

`;

export default function Registro(props) {
  return(
    <Contain>
      <div className="menu">
        <img  src={shop}/>
      <Busqueda
        type="text"
        placeholder="Busqueda"
        />
      <Buscar
        name="busqueda"
        type="submit">
        Buscar
      </Buscar>
        </div>

      <div className="login">
      <img src={usuario} />
        <h1>Crear Cuenta</h1>
          <form>
            <div>
              <label> Nombre del Usuario </label><br/>
                <Input
                  name ="usuario"
                  type="text"
                  placeholder="Usuario"
                  />
            </div>
            <div>
              <label> Correo </label><br/>
                <Input
                  name ="usuario"
                  type="email"
                  placeholder="Correo"
                  />
            </div>

            <div>
              <label> Contraseña </label><br/>
                <Input
                  name="password"
                  type="password"
                  placeholder="Contraseña"
                  />
              </div><br/>

           <div>
            <Button
              name="ingresar"
              type="sumbmit">
                Listo
            </Button>
          </div>
          </form>
      </div>
      <Footer>
        <div className="experiencia">
          <h2>TU EXPERIENCIA EN SHOPMAK </h2>
        </div>

        <div className="img1">
          <img src={ahorro} />
        </div>
    </Footer>
  </Contain>
  )

}
