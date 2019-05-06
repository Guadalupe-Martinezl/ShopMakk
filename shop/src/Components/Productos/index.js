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
background-size: cover;
@media (max-width: 800px)  {
 width: 200%;
}

.wrap{
  width: 1100px;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  line-height: 1px;
  justify-content: space-around;
  transform: translate(12%, 10%);
}
@media (max-width: 800px)  {
 .wrap {
   width: 1100px;
   margin: 0;
   display: flex;
   flex-wrap: wrap;
   transform: translate(12%, -20%);

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

  <div className="tarjeta-wrap">
    <div className="tarjeta">
      <div className="adelante card3"> </div>
    <div className="atras">
    <Texto> Ropa </Texto>
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

  <div className="tarjeta-wrap">
    <div className="tarjeta">
      <div className="adelante card3"> </div>
    <div className="atras">
    <Texto> Ropa </Texto>
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

  <div className="tarjeta-wrap">
    <div className="tarjeta">
      <div className="adelante card3"> </div>
    <div className="atras">
    <Texto> Ropa </Texto>
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
