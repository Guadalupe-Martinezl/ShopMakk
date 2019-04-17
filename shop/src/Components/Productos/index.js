import React from "react";
import Header from '../../Components/Header/';

import makeup from '../../images/makeup.jpg';
import fondo from '../../images/fondo.jpg';

import styled, {css}from 'styled-components'

const Contain = styled.div`
padding:0;
margin: 0;
width:100px;
height:1100px;
background: url(${fondo}) no-repeat;
box-sizing: border-box;

.container {
  justify-content: center;
  transform:translate(190%, 200%);
  display: flex;
}
.card{
  width:200%;
  height:50%;
  border-radius: 8px;
  border-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
}

`;

export default function Productos(props) {
  return(
    <Contain>
     <Header/>

     <div className="container">
        <img className="card" src={makeup} />
        <img className="card" src={makeup} />
        <img className="card" src={makeup} />
     </div>


    </Contain>

  )
}
