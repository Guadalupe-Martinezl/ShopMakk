import React from "react";
import Header from '../../Components/Header/';

import shop from '../../images/shop2.png';
import usuario from '../../images/user.png';
import fondo from '../../images/fondo.jpg';
import ahorro from '../../images/ahorro.jpg';
import compras from '../../images/compras.jpg';


import styled, {css}from 'styled-components'

const Contain = styled.div`
  padding:0;
  margin: 0;
  background: url(${fondo}) no-repeat;
  background-size: 100%, 70%;
  box-sizing: border-box;

.menu img {
  width: 15%;
  height: 15%;
  border-radius: 5px;
  transform: translate(3%, 320%);

}
.login h1{
  font-family: monospace;
  font-style: oblique;
  font-size: 30px;
}
.login{
  margin:auto;
  width: 40%;
  padding: 0;
  transform: translate(3%, 25%);
  color: black;
  text-align: center;
  box-sizing: border-box;
}
.login img{
  width: 20%;
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
  transform: translate(100%, 490%);

`;
const Button = styled.button`
  background:  #000 ;
  color: #fff;
  font:100% "sans-serif";
  border-radius: 1em;
  border: 1px solid black;
  padding: 0.25em 1em;
  transform: translate(10%);
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
  width: 7%;
  max-width: 500px;
  box-sizing: border-box;
  transform: translate(290%, 460%);
`;
const Footer = styled.footer`
font: 20px "monospace";
transform: translate(30%, 75%);
text-align: justify;
img{
  width: 120px;
  height: 120px;
}
.imagen1{
  display:inline-block;
  width: 280px;
  text-align:center;
}
.imagen2{
  display: inline-block;
  width: 280px;
  text-align:center;
}
`;


class App extends Component {
  constructor() {
    super();
    this.state = {
      usuario:'',
      correo: '',
      contraseña: ''
    }
}

handleAddTodo(todo) {
    this.setState({

    })
  }

  handleInputChangeUpdate(e) {
    const {value, name} = e.target;
    // console.log(value, name);
    this.setState({
      [name]: value
    });
}

componentDidMount(){
        fetch("http://192.168.2.106:8000/usuario/")
        .then((response) => { return response.json()})
        .then((json) => {
          console.log(json)
          let {usuarios} = this.state

          json.forEach(function(element, index) {
            var registro = {
              usuario:'',
              correo: '',
              contraseña: ''
            };
            usuarios.push(registro);

               console.log(element, index );
               });
          this.setState({
            usuarios
          })

        })
    }

export default function Registro(props) {
  return(
    <Contain>
    <Header />

      <div className="login">
      <img src={usuario} />
        <h1>Crear Cuenta</h1>
          <form>
            <div>
              <label> Nombre del Usuario </label><br/>
                <Input
                  name ="usuario"
                  type="text"
                  value={this.state.usuario}
                  placeholder="Usuario"
                  />
            </div>
            <div>
              <label> Correo </label><br/>
                <Input
                  name ="usuario"
                  type="email"
                  value={this.state.correo}
                  placeholder="Correo"
                  />
            </div>

            <div>
              <label> Contraseña </label><br/>
                <Input
                  name="password"
                  type="password"
                  value={this.state.contrseña}
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
        <div>
          <h2>TU EXPERIENCIA EN SHOPMAK </h2>
          <p> lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
        </div>

        <div className="imagen1">
        <p> lorem ipsum</p>
            <img src={compras} />
        </div>


        <div className="imagen2">
          <p> lorem ipsum</p>
            <img src={ahorro} />
            </div>
    </Footer>
  </Contain>
  )

}
