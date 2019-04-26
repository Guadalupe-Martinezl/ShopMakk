import React from "react";

import Header from '../../Components/Header/';

import shop from '../../images/shopMak.png';
import medio from '../../images/perfil2.png';
import icono from '../../images/iconoperson.jpg';
import fondop from '../../images/fondop.jpg';

import styled, {css}from 'styled-components'

const Contain = styled.div`
padding: 10px;
margin: 0;
background: url(${fondop}) ;
width: 1480px;
height: 1150px;
  `;


  export default function Profile(props) {

    return(
      <Contain>
       <Header />

      </Contain>
    )


  }
