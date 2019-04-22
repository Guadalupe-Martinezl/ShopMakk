import React from "react";
import Header from '../../Components/Header/';

import libros from '../../images/libros.jpeg';
import watch from '../../images/reloj.jpeg';
import makeup from '../../images/makeup.jpg';
import fondo from '../../images/fondop.jpg';
import ropa from '../../images/ropa.jpeg';


import styled, {css}from 'styled-components'

const Contain = styled.div`
padding: 10px;
margin: 0;
background: url(${fondo}) ;
width: 1350px;
height: 1000px;

.wrap{
  width: 1100px;
  margin: 50px auto;
  display: flex;
  justify-content: center;
  transform: translate(3%, 130%);
}
.tarjeta-wrap{
  margin: 10px;
  -webkit-perspective: 700;
  perspective: 700;
}
.tarjeta{
  width: 220px;
  height: 350px;
  background: #c3c31a;
  position: relative;
  transform-style: preserve-3d;
  transition: 2s ease;
}
.adelante, .atras {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
.atras{
  transform: rotateY(180deg);
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  text-align: center;
  color: #fff;
  font-family: "open sans";
}
.adelante{
  width: 100%;
}
.tarjeta-wrap: hover .tarjeta{
  transform: rotateY(180deg);
}
.card1{
  background: url(${watch}) repeat;
}
.card2{
  background: url(${libros}) repeat;
}
.card3{
  background: url(${ropa}) repeat;
}
.caja{

  justify-content: center;
}
`;
const Caja = styled.div`
  border: 2px solid white;
  width: 200px;
  background-color:  #0e0e0d;
  color: white;
  justify-content:center;
  text-align:center;
  transform: translate(300%, 700%)
`;


export default function Productos(props) {
  return(
    <Contain>
    <Header />

    <Caja className="caja">
      <h2> Categorias </h2>
    </Caja>


<div className="wrap">
  <div className="tarjeta-wrap">
    <div className="tarjeta">
      <div className="adelante card1"></div>
    <div className="atras">
    <button> Tecnologias</button>
    </div>

</div>
  </div>

  <div className="tarjeta-wrap">
    <div className="tarjeta">
      <div className="adelante card2"> </div>
    <div className="atras">
    <p> Libros</p>
    </div>
</div>
  </div>

  <div className="tarjeta-wrap">
    <div className="tarjeta">
      <div className="adelante card3"> </div>
    <div className="atras">
    <p> Ropa </p>
    </div>
</div>
  </div>
    </div>

    </Contain>

  )
}
