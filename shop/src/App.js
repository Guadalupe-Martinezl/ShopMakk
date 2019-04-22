import React, { Component } from 'react';
import Gallery from './Components/Gallery/';
import FormLogin from './Components/Login/';
import Registro from './Components/Registro/';
import Header from './Components/Header/';
import Productos from './Components/Productos/';

import styled,{css} from 'styled-components'

import fondo from './images/fondo.jpg';
import logo from './images/shopMak.png';
import iphone from './images/iphone.gif';
import watch from './images/watch.jpg';
import makeup from './images/makeup.jpg';

//import './App.css';
const Contain = styled.div`
  padding: 0;
  margin: 0;
  background: url(${fondo}) no-repeat ;
  background-size:  2000px 40%;

  .logo{
    width: 15%;
    height: 15%;

  }

  .card{
      display: flex;
      width: 50%;
      height: 200vh;
      padding: 4% 2%;
      box-sizing: border-box;
        transform: translate(45%, 5%);
  }

  .box{
      width: 20%;
      height: 350px;
      padding: 10px;
      margin: 10px;
      display:inline-block;
      flex: 1;
      overflow: hidden;
      box-shadow: 0 20px 30px rgba(0, 0, 0, 0.20);
      line-height: 0;
      transition: all 600ms;

  }
  .box > img{
      width: 120%;
      height: calc(100% - 10vh);
      object-fit: cover;
      transition: all 300ms;
  }
  .box > span{
      font-size: 25px;
      font-family: sans-serif;
      display: block;
      text-align: center;
      height: 10vh;
      line-height: 2.6;
  }
  .box:hover{
      flex: 50%;
  }

  .box:hover > img{
      width: 100%;
      height: 100%;
  }
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
  constructor(){
    super();
    this.state = {
      currentlocation:'',


    }
}

  render() {
    var URLactual = window.location;
    console.log(URLactual.pathname);
      console.log(URLactual);
    switch (URLactual.pathname) {
      case "/Admin":
        return (
          <Contain>
        <div className="App">
         <Header/>
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
             type="submit"
             >
             Iniciar Sesion
             </Sesion>

             <Login
              name="busqueda"
              type="submit">
              Crear Cuenta
              </Login>


              <div className="App-Header" >
             <Gallery
               images={["http://lorempixel.com/400/200/technics/","http://lorempixel.com/400/200/technics/",
               "http://lorempixel.com/400/200/technics/"]}
               span={["Tecnologias","Comida","Maquillaje"]}
              />
   </div>
  </div>
  </Contain>

      );
        break;

      case "/Login":
        return (<FormLogin/>);
        break;

      case "/Registro":
        return (<Registro />);
        break;

      case "/Productos":
        return (<Productos />);
        break;

      default:
      return(<h1> Pagina no encontrada</h1>)

    }

   }
  }




export default App;
