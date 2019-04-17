import React from "react";
import Header from '../../Components/Header/';


import fondo from '../../images/fondo.jpg';

import styled, {css}from 'styled-components'

const Contain = styled.div`
  padding:0;
  margin: 0;

  background: url(${fondo}) bottom ;
  background-size: 400% 400%;
  box-sizing: border-box;
`;

export default function Productos(props) {
  return(

    <Contain>
    <Header />

          <h1>Hola</h1>
      
    </Contain>
  )
}
