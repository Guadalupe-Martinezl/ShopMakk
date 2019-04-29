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

  .imgaleria{
    width:800px;
    height:400px;
  }
  #Container{
    width:800px;
    margin: 60px auto;
    overflow:hidden;
    transform: translate(-2%, -140%);
  }
  #Container ul {
    list-style: none;
    width:2800px;
    display: flex;
    animation: slide 15s infinite;
  }
  @keyframes slide {
    0%{margin-left: 0px;}
    20%{margin-left: 0px;}
    25%{margin-left: -800px;}
    45%{margin-left: -800px;}
    50%{margin-left: -1600px;}
    70%{margin-left: -1600px;}
    75%{margin-left: -2400px;}
    100%{margin-left: -2400px;}
    101%{margin-left: -3200px;}
  }
  .ia-container {
	width: 800px;
	margin: 20px auto;
	overflow: hidden;
	box-shadow: 1px 1px 4px rgba(0,0,0,0.08);
	border: 7px solid rgba(255,255,255,0.6);
    transform: translate(-2%, -120%);
}
.ia-container figure {
  position: absolute;
	top: 0;
	left: 50px; /* width of visible piece */
	width: 700px;
  box-shadow: 0 0 0 1px rgba(255,255,255,0.6);
  transition: all 0.3s ease-in-out;
}
.ia-container > figure {
  position: relative;
	left: 0 !important;
}
.ia-container img {
	display: block;
	width: 120%;
}
.ia-container input {
	position: absolute;
	top: 0;
	left: 0;
	width: 50px; /* just cover visible part */
	height: 100%;
	cursor: pointer;
	border: 0;
	padding: 0;
  opacity: 0;
	z-index: 100;
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
}
.ia-container input:checked{
	width: 5px;
	left: auto;
	right: 10px;
}
.ia-container input:checked ~ figure {
    left: 335px;
    transition: slide 0.1s infinite;
}
.ia-container figcaption {
	width: 100%;
	height: 100%;
	background: rgba(87, 73, 81, 0.1);
	position: absolute;
	top: 0px;
  transition: all 0.2s linear;
}
.ia-container figcaption span {
	position: absolute;
	top: 40%;
	margin-top: -30px;
	right: 20px;
	left: 20px;
	overflow: hidden;
	text-align: left;
	background: #FBCFAB;
	line-height: 20px;
	font-size: 30px;
  opacity: 0;
	text-transform: uppercase;
	letter-spacing: 4px;
	font-weight: 800;
	padding: 20px;
	color: #fff;
	text-shadow: 5px 1px 1px rgba(0,0,0,0.1);
}
.ia-container input:checked + figcaption,
.ia-container input:checked:hover + figcaption{
	background: rgba(87, 73, 81, 0);
}
.ia-container input:checked + figcaption span {
    transition: all 0.4s ease-in-out 0.5s;
	opacity: 1;
	top: 50%;
}
.ia-container #ia-selector-last:checked + figcaption span {
	transition-delay: 0.3s;
}
.ia-container input:hover + figcaption {
	background: rgba(87, 73, 81, 0.03);
}
.ia-container input:checked ~ figure input{
    z-index: 1;
}
   @media screen and (max-width: 600px){

    .fondo{
      width:100%;
      height:500%;
    }
    .icono{
        width:7%;
     }
     .compras{
       width:15%;
       transform: translate(-180%, -530%);
       font:60% "sans-serif";
     }
     .datos{
       width:15%;
       transform: translate(-160%, -530%);
       font:60% "sans-serif";
     }
     .ia-container{
       width:80%;
       height:30%;
       transform: translate(3%, -30%);
     }
     .compras{
       width:30%;
       transform: translate(205%, -390%);
     }
     .datos{
       width:30%;
       transform: translate(-55%, -380%);
     }
     .text1{
       font-size:234%;
     }
     .text2{
       font-size:250%;
     }
  }
`;



const Compras = styled.button`
  background:  #000 ;
  color: #fff;
  font:105% "sans-serif";
  border-radius: 1em;
  border: 2px solid white;
  padding: 1em 1em;
  transform: translate(565%);
  width: 10%;
  box-sizing: border-box;
  transform: translate(500%, -980%);
`;

const Datos = styled.button`
  background:  #000 ;
  color: #fff;
  font:105% "sans-serif";
  border-radius: 1em;
  border: 2px solid white;
  padding: 1em 1em;
  transform: translate(565%);
  width: 10%;
  box-sizing: border-box;
  transform: translate(280%, -980%);
`;


const Menu2 = (props) => {
  return (
      <Compras
        className="compras"
        name="busqueda"
        type="submit">
        <a className="text1">Mis Compras</a>
      </Compras>

  )
}
const Menu3 = (props) => {
  return (
      <Datos
      className="datos"
        name="busqueda"
        type="submit">
        <a className="text2">Mis Datos</a>
      </Datos>

  )
}

const Galeria = (props) => {
  return (
    <Contain>
      <div id="Container">
       <ul>
        <li><img className="imgaleria" src={img1} alt="1"/></li>
        <li><img className="imgaleria" src={img2} alt="2"/></li>
        <li><img className="imgaleria"src={img3} alt="3"/></li>
        <li><img className="imgaleria"src={img4} alt="4"/></li>
       </ul>
      </div>
    </Contain>

  )
}
const Galeria2 = (props) => {
  return (
<div class="ia-container">

	<figure>
		<img src={img1} alt="image01" />
		<input type="radio" name="radio-set" checked="checked" />
		<figcaption><span>True Colors</span></figcaption>

		<figure>
			<img src={img2}alt="image02" />
			<input type="radio" name="radio-set" />
			<figcaption><span>Tecnologias</span></figcaption>

      <figure>
    		<img src={img3} alt="image03" />
    		<input type="radio" name="radio-set" checked="checked" />
    		<figcaption><span>Maquillaje</span></figcaption>

        <figure>
      		<img src={img3} alt="image03" />
      		<input type="radio" name="radio-set" checked="checked" />
      		<figcaption><span>Electronica</span></figcaption>

          <figure>
        		<img src={img1} alt="image03" />
        		<input type="radio" name="radio-set" checked="checked" />
        		<figcaption><span>True Colors</span></figcaption>
      </figure>
      </figure>
        </figure>
      </figure>
        </figure>

    </div>
    )
  }

export default function Profile(props) {

  return(
    <Contain>
   <Header/>

      <img className="fondo" src={fondo}/>

   <Galeria2/>

   <Menu2/>
   <Menu3/>

    </Contain>
  )


}
