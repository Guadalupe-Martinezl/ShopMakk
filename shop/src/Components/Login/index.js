import React from "react";


import shop from '../../images/shop2.png';
import reloj from '../../images/watch.jpg';
import fondo from '../../images/fondo.jpg';
import iphone from '../../images/iphone.gif';

import styled, {css}from 'styled-components'

const Contain = styled.div`
  padding:0;
  margin: 0;

  background: url(${fondo}) no-repeat;
  background-size: 100% 70%;
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
  width: 30%;
  background:  #d8d4d4 ;
  padding: 3%;
  transform: translate(3%, 20%);
  color: black;
  border: 2px solid black;
  text-align: center;
  box-sizing: border-box;
}
.izquierda{
  transform:translate(5%, -100%);
}

.derecha{
  transform:translate(70%, -190%);
}

.derecha img{
  width: 250px;
}

.izquierda img{
  width: 250px;
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



export default function Login(props) {
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
    <h1>Login</h1>
    <form>
      <div>
      <label> Usuario </label><br/>
        <Input
          name ="usuario"
          type="text"
          placeholder="Usuario"
          />
      </div>
      <div>
       <label> Contraseña</label><br/>
        <Input
          name="password"
          type="password"
          placeholder="Contraseña"
          />
          </div><br />
    <div>
      <Button
        name="ingresar"
        type="sumbmit"
        >
      Ingresar
      </Button>
        </div>
  </form>
</div>

<div className="izquierda">
  <img src={reloj} />
</div>

<div className="derecha">
  <img src={iphone} />
</div>
    </Contain>
  )

}
