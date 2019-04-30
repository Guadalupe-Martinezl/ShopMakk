import React, { Component } from 'react';


import Gallery from './Components/Gallery/';
import ProfilesU from './Components/Profile/';
import FormLogin from './Components/Login/';
import Header from './Components/Header/';
import Products from './Components/Products/';


import styled,{css} from 'styled-components'

import fondo from './images/fondo.jpg';
import logo from './images/shopMak.png';
import iphone from './images/iphone.gif';
import watch from './images/watch.jpg';
import makeup from './images/makeup.jpg';


import './App.css';

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
      currentlocation:''

    }
  }


 filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("column");
    if (c == "all") c = "";

    for (i = 0; i < x.length; i++) {
      this.w3RemoveClass(x[i], "show");
      if (x[i].className.indexOf(c) > -1) this.w3AddClass(x[i], "show");
    }
  }


 w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) == -1) {
        element.className += " " + arr2[i];
      }
    }
  }

 w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);
      }
    }
    element.className = arr1.join(" ");
  }

  componentDidMount(){
    var btnContainer = document.getElementById("myBtnContainer");
    var btns = document.getElementsByClassName("btn");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click",function(){
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
      });
    }
    this.filterSelection("all")
  }

  render() {
    var URLactual = window.location;
    console.log(URLactual.pathname);
    switch (URLactual.pathname) {
      case "/Admin":
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

              <div className="Footer">
                <h1>CONOCENOS</h1>
                <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                </p>
                <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                </p>
               </div>




   </div>
  </div>

);

    break;
  case "/Login":
    return (<FormLogin/>);
    break;

   case "/Perfil":
        return (<ProfilesU/>);
        break;

   case "/Products":
        return (<Products/>);
        break;
default:
return(<h1> Pagina no encontrada</h1>)

  }
 }
}








export default App;
