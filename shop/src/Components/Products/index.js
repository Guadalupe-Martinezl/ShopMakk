import React from "react";

import Header from '../../Components/Header/';

import shop from '../../images/shopMak.png';
import fondo from '../../images/fondo.jpg';
import medio from '../../images/perfil2.png';
import icono from '../../images/iconoperson.jpg';

import styled, {css}from 'styled-components'

const Contain = styled.div`
  .fondo{
    width: 100%;
    height: 15%;
  }

  .medio{
    width:60%;
    height:50%;
    transform: translate(35%, -100%);
  }
  `;


  export default function Profile(props) {

    return(
      <Contain>
         <Header />
      </Contain>
    )


  }
