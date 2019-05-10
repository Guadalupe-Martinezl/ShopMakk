import React from "react";

import Header from '../../Components/Header/';

import shop from '../../images/shopMak.png';
import fondo from '../../images/fondo.jpg';
import medio from '../../images/perfil2.png';
import icono from '../../images/iconoperson.jpg';
import img1 from '../../images/img1.jpg';
import img2 from '../../images/im2.jpg';
import img3 from '../../images/img3.jpg';
import img4 from '../../images/img4.jpg';
import video from '../../images/video.mp4';

import styled, {css}from 'styled-components'


const Contain = styled.div`
  *{
    padding:0px;
    margin:0px;
  }

  .fondo{
    width: 100%;
    height: 15%;
  }

  .icono{
    width: 3%;
    height: 3%;
    border-radius: 5px;
  }
  .container-portada{
      width: 100%;
      height: 500px;
      position: relative;
      background-image:url(${img2});
      background-size: 200%;
      animation: movimiento 20s infinite linear alternate;
      transform:translate(-0%,-105%);
  }

  @keyframes movimiento{
      from{
          background-position: bottom left;
      }to{
          background-position: top right;
      }
  }


  .capa-gradient{
      width: 100%;
      height: 100%;
      position: absolute;
      background: -webkit-linear-gradient(left, black, orange);
      opacity: 0.6;
  }

  .container-details{
      width: 100%;
      max-width: 1200px;
      position: relative;
      margin: auto;
  }


  .details{
      width: 100%;
      max-width: 500px;
      position: relative;
      top: 20px;
      color: white;
      transform:translate(85%,95%);
      font:oblique bold 500% cursive;
  }

  .details h1{
      font-size: 80px;
      font-weight: 100;
      margin-left: 10px;

  }

  .details p{
      margin-top: 10px;
      font-size: 20px;
      font-weight: 100;
      margin-left: 10px;
  }

  .details button{
      padding: 10px 20px;
      font-size: 16px;
      background: none;
      border-style: none;
      border: 1px solid white;
      color: white;
      margin-top: 20px;
      transition: background 300ms;
      cursor: pointer;
      margin-left: 10px;
  }

  .details button:hover{
      background: white;
      color: black;
  }


   @media screen and (max-width: 600px){

     .ia-container{
       width:90%;
       transform: translate(0%, -30%);
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
        width:50%;
        transform: translate(50%, 90%);
      }
      .icono{
        width:7%;
     }
     .compras{
       width:35%;
       transform: translate(30%, -350%);
       font:100% "sans-serif";
     }
     .datos{
       width:35%;
       transform: translate(50%, -350%);
       font:100% "sans-serif";
     }

  }
  `;

const Compras = styled.button`
  background:  #000 ;
  color: #fff;
  font:96% "sans-serif";
  border-radius: 1em;
  border: 2px solid white;
  padding: 1em 1em;
  transform: translate(565%);
  width: 10%;
  box-sizing: border-box;
  transform: translate(500%, -1030%);
`;

const Datos = styled.button`
  background:  #000 ;
  color: #fff;
  font:100% "sans-serif";
  border-radius: 1em;
  border: 2px solid white;
  padding: 1em 1em;
  transform: translate(565%);
  width: 10%;
  box-sizing: border-box;
  transform: translate(280%, -986%);
`;
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

  const Video = (props) => {
    return (
  <div class="container-portada">
        <div class="capa-gradient"></div>
        <div class="container-details">
            <div class="details">
                <h1>Mi Perfil</h1>

            </div>
        </div>
    </div>
)
}
export default function Profile(props) {

  return(
    <Contain>
<Header />

      <img className="fondo" src={fondo}/>

   <Video/>

      <Menu2/>
      <Menu3/>

    </Contain>
  )


}
