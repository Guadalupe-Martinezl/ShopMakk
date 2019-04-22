import React from "react";
import Header from '../../Components/Header/';

import watch from '../../images/watch.jpg';
import makeup from '../../images/makeup.jpg';
import fondo from '../../images/fondop.jpg';

import styled, {css}from 'styled-components'

const Contain = styled.div`
padding: 0;
margin: 0;
background: url(${fondo});
width: 100%;
height: 2000%;


.wrap{
  width: 1100px;
  margin: 50px auto;
  display: flex;
  justify-content: center;
}
.tarjeta-wrap{
  margin: 10px;
}
.tarjeta{
  width: 300px;
  height: 350px;
  background: #F29720;
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
}
.tarjeta-wrap: hover .tarjeta{
  transform: rotateY(180deg);

}

`;

export default function Productos(props) {
  return(
    <Contain>


<div className="wrap">
  <div className="tarjeta-wrap">
    <div className="tarjeta">
      <div className="adelante"><h1>Encabezado </h1> </div>
    <div className="atras">
    <p> Tecnologias</p>
    </div>
</div>
  </div>

  <div className="tarjeta-wrap">
    <div className="tarjeta">
      <div className="adelante"><h1>Encabezado </h1> </div>
    <div className="atras">
    <p> Tecnologias</p>
    </div>
</div>
  </div>

  <div className="tarjeta-wrap">
    <div className="tarjeta">
      <div className="adelante"><h1>Encabezado </h1> </div>
    <div className="atras">
    <p> Tecnologias</p>
    </div>
</div>
  </div>
    </div>

    </Contain>

  )
}
