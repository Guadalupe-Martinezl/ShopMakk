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
 width: 100%;
}

.wrap{
  width: 1100px;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  transform: translate(12%, -20%);
}
@media screen and (max-width:800px){
    .wrap{
      width: 15%;
      margin: 15%;
      display: flex;
      justify-content: center;
      transform: translate(150%, -20%);
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
@media screen and (max-width:800px) {
  .imagen1{
    width: -1%;
    transform:translate(1%, 5%);
  }

}
`;
const Caja = styled.div`
  border: 2px solid white;
  width: 200px;
  background-color:  #0e0e0d;
  color: white;
  justify-content:center;
  text-align:center;
  transform: translate(300%, -100%);
  @media (max-width: 800px) {
    width: 50%;
    transform: translate(10%, -50%);
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
