import React from "react";
import Header from '../../Components/Header/';

import shop from '../../images/shop2.png';
import reloj from '../../images/watch.jpg';
import fondo from '../../images/fondo.jpg';
import iphone from '../../images/iphone.gif';

import styled, {css}from 'styled-components'

const Contain = styled.div`
  padding:0;
  margin: 0;
  background: url(${fondo}) no-repeat;
  background-size: 100%, 70%;
  box-sizing: border-box;
  @media (max-width: 800px)  {
    width:100%;
  }

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

@media (max-width: 800px)  {
  .login{
    margin:auto;
    width: 70%;
    padding: 3%;
    transform: translate(3%, 60%);
  }
}


.izquierda{
  transform:translate(3%, -180%);

}

.derecha{
  transform:translate(75%, -300%);
}

.derecha img{
  width: 250px;
  @media (max-width: 800px)  {
   width: 35%;
   height: 35%;
   transform:translate(-10%, -100%);
  }
}

.izquierda img{
  width: 250px;
}

`;
const Input = styled.input.attrs(({ size }) => ({
  margin: size || "1em",
  padding: size || "1em"
}))`
  color:palevioletred ;
  font-size: 20px;
  border: 1px solid orange;
  border-radius: 2px;
  color: black;
  width: 100%;
  max-width: 500px;
  box-sizing: border-box;
  @media (max-width: 800px)  {
   width: 80%;
  }
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

export default function Login(props) {
  return(
      <Contain>
        <Header />
  <br />
  <br />
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
