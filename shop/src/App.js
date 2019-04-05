import React, { Component } from 'react';
import fondo from './images/fondo.jpg';
import logo from './images/shopMak.png';
import iphone from './images/iphone.gif';
import watch from './images/watch.jpg';
import makeup from './images/makeup.jpg'
import './App.css';
import styled,{css} from 'styled-components'


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
const Buscar = styled.button`
background:  #000 ;
color: #fff;
font:100% "sans-serif";
border-radius: 1em;
border: 1px solid black;
padding: 0.25em 1em;
transform: translate(290%, -100%);
width: 7%;
max-width: 500px;
box-sizing: border-box;
`;
const Sesion = styled.button`
background:  #000 ;
color: #fff;
font:100% "sans-serif";
border-radius: 1em;
border: 1px solid black;
padding: 0.25em 1em;
transform: translate(250%, -100%);
width: 12%;
max-width: 500px;
box-sizing: border-box;
`;

const Login = styled.button`
background:  #000 ;
color: #fff;
font:100% "sans-serif";
border-radius: 1em;
border: 1px solid black;
padding: 0.25em 1em;
transform: translate(255%, -100%);
width: 12%;
max-width: 500px;
box-sizing: border-box;
`;

class App extends Component {
  render() {
    return (

      <div className="App">

        <img class="logo" src={logo}/>
        <Busqueda
          type="text"
          placeholder="Busqueda" />

         <Buscar
          name="busqueda"
          type="submit">
          Buscar
         </Buscar>

          <Sesion
           name="busqueda"
           type="submit">
           Iniciar Sesion
           </Sesion>

           <Login
            name="busqueda"
            type="submit">
            Crear Cuenta
            </Login>

       <div className="card">
        <div class="box">
          <img class="box" src={iphone}/>
          <span>Telefonos</span>
        </div>

        <div class="box">
        <img class="box" src={watch}/>
        <span>Tecnologia</span>
        </div>


        <div class="box">
        <img class="box" src={makeup}/>
        <span>Maquillaje</span>
        </div>
        </div>

      </div>

    );
  }
}

export default App;
