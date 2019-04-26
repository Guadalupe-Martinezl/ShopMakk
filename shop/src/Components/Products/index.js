import React from "react";

import Header from '../../Components/Header/';

import shop from '../../images/shopMak.png';
import fondo from '../../images/fondo.jpg';
import medio from '../../images/perfil2.png';
import icono from '../../images/iconoperson.jpg';
import fondop from '../../images/fondop.jpg';

import styled, {css}from 'styled-components'

const Contain = styled.div`

  `;


  export default function Profile(props) {

    return(
      <Contain>
       <Header />
      </Contain>
    )


  }
