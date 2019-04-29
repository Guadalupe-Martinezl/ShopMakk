import React from "react";
import Header from '../../Components/Header/';

import libros from '../../images/libros.jpeg';
import watch from '../../images/reloj.jpeg';
import makeup from '../../images/makeup.jpg';
import fondo from '../../images/fondop.jpg';
import ropa from '../../images/ropa.jpeg';
import galeria1 from '../../images/galeria1.jpeg';
import galeria2 from '../../images/galeria2.jpg';
import galeria3 from '../../images/galeria3.jpg';
import galeria4 from '../../images/galeria4.jpg';

import styled, {css}from 'styled-components'
const Contain = styled.div`
padding: 10px;
margin: 0;
background: url(${fondo}) no-repeat;
width: 100%;
height: 100%;
  @media (max-width: 800px) {
    width: 100%;
  }
.wrap{
  width: 1100px;
  margin: 50px auto;
  display: flex;
  justify-content: center;
  transform: translate(3%, 5%);
}
  @media screen and (max-width:800px){
    .wrap{
      width: 15%;
      margin: 15%;
      display: flex;
      justify-content: center;
      transform: translate(150%, -145%);
    }
    .tarjeta-wrap{
      margin: 15%;
    }
    .tarjeta{
      width: 15%;
      height: 15%;
    }
    .adelante, .atras {
      width: 15%;
      height: 15%;
    }
    .adelante{
      width: 50%;
    }
}
.tarjeta-wrap{
  margin: 10px;
  -webkit-perspective: 700;
  perspective: 700;
}
.tarjeta{
  width: 220px;
  height: 350px;
  background:  #9d9d73 ;
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

@media screen and (max-width:800px){
  .container{
    width: 5%;
    margin:auto;
    transform:translate(10%);
  }
  textarea {
    opacity: 0;
    width: 20%;
    top: 10%;
    position: relative;
    transform: scaleY(30);
    cursor: e-resize;
  }

  .imagen1{
    width: 15%;
    height: 10%;
    margin: 5%;
    transform: translate(-50%, 30%);

  }
  .imagen2 {
    width: 15%;
    height: 50%;
    top: 0;
    left: 0;
    resize: horizontal;
    overflow: hidden;
  }
}
.container{
  width: 1100px;
  height: 1090px;
  margin:auto;
}
textarea {
  opacity: 0;
  width: 20px;
  height: 10px;
  position: relative;
  top: 50%;
  transform: scaleY(30);
  cursor: e-resize;
  max-width: 100%;
}

.imagen1{
  width: 700px;
  height: 400px;
  background: url(${galeria1});
  margin: 100px auto;
  position: relative;
}
.imagen2 {
  background: url(${galeria4});
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  max-width: 100%;

  resize: horizontal;
  overflow: hidden;
}
`;
const Caja = styled.div`
  border: 2px solid white;
  width: 200px;
  background-color:  #0e0e0d;
  color: white;
  justify-content:center;
  text-align:center;
  transform: translate(300%, 10%);
  @media (max-width: 800px) {
    width: 50%;
    transform: translate(10%, -680%);
  }
`;
const Texto = styled.p`
  font-family:"arial";
  font-size: 25px;
  color: #000;
  text-align: center;
`;

export default function Productos(props) {
  return(
    <Contain>
    <Header />
    <div className="container">
      <div className="imagen1">
        <div className="imagen2">
          <textarea disabled></textarea>
        </div>
      </div>
      </div>

    <Caja className="caja">
      <h2> Categorias </h2>
    </Caja>
<div className="wrap">
  <div className="tarjeta-wrap">
    <div className="tarjeta">
      <div className="adelante card1"></div>
    <div className="atras">
    <Texto> Tecnologias</Texto>
    </div>

</div>
  </div>

  <div className="tarjeta-wrap">
    <div className="tarjeta">
      <div className="adelante card2"> </div>
    <div className="atras">
    <Texto> Libros</Texto>
    </div>
</div>
  </div>

  <div className="tarjeta-wrap">
    <div className="tarjeta">
      <div className="adelante card3"> </div>
    <div className="atras">
    <Texto> Ropa </Texto>
    </div>
</div>
  </div>
    </div>

    </Contain>

  )
}
