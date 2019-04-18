import React from "react";

import shop from '../../images/shopMak.png';
import medio from '../../images/perfil2.png';
import icono from '../../images/iconoperson.jpg';

import styled, {css}from 'styled-components'

const Contain = styled.div`
  .logo {
    width: 15%;
    height: 15%;
    border-radius: 5px;
    transform: translate(-55%, 8%);
  }

  nav{
    display:flex;
    justify-content:space-around;
    align-items:center;
    min-height:8vh;
    background-color:black;
  }

  .nav-links{
    display:flex;
    justify-content:space-around;
    width:35%;
  }

  .nav-links li{
    list-style:none;
  }

  .nav-links a{
    color:white;
    text-decoration:none;
    letter-spacing:3px;
    font-weight:bold;
    font-size:14px;
  }

  .burger{
    display:none;
  }

 .burger div{
   width:25px;
   height:5px;
   background-color:white;
   margin:5px;
 }


    @media screen and (max-width:1024px;){
      .nav-links{
        width:60%;
      }
    }
    @media screen and (max-width:768px){

      .logo{
        width: 30%;
        height: 55%;
        border-radius: 5px;
        transform: translate(-10%, 8%);
      }

      .nav-links {
        position: absolute;
        right:0px;
        height:92vh;
        top: 5.8vh;
        background-color:#9d4e11;
        display:flex;
        flex-direction: column;
        align-items:center;
        width:50%;
        transform:translateX(100%);
        transition:transform 0.5s ease-in;
      }
      .nav-links li{
        opacity:0;
      }
      .burger{
        display:block;
        cursor:pointer;
      }
      .nav-active{
        transform:translateX(0%);
      }

    }
  `;

  const Input = styled.input.attrs(({ size }) => ({
    margin: size || "5em",
    padding: size || "5px"
  }))`
    color:palevioletred ;
    font-size: 20px;
    border: 1px solid orange;
    border-radius: 2px;
    color: black;
    width: 100%;
    max-width: 500px;
    box-sizing: border-box;
  `;
  const Busqueda = styled.input.attrs(({ size }) => ({
    margin: size || "5em",
    padding: size || "5px"
  }))`
    color:palevioletred ;
    font-size: 20px;
    border: 2px solid white;
    border-radius: 5px;
    color: black;
    width: 20%;
    max-width: 500px;
    box-sizing: border-box;
    transform: translate(8%, -10%);

  `;
  const Button = styled.button`
    background:  #000 ;
    color: #fff;
    font:100% "sans-serif";
    border-radius: 1em;
    border: 1px solid black;
    padding: 0.25em 1em;
    transform: translate(15%);
    width: 50%;
    max-width: 500px;
    box-sizing: border-box;
  `;
  const Buscar = styled.button`
    background:  #000 ;
    color: #fff;
    font:100% "sans-serif";
    border-radius: 1em;
    border: 2px solid white;
    padding: 0.25em 1em;
    transform: translate(565%);
    width: 7%;
    max-width: 500px;
    box-sizing: border-box;
    transform: translate(20%, -10%);
  `;

const Menu = (props) => {
  return (

  <nav>
   <img className="logo" src={shop}/>
    <ul className="nav-links">
        <li className="li"><a href="#">Productos</a></li>
        <li className="li"><a href="#">Favoritos</a></li>
        <li className="li"><a href="#">About</a></li>

    </ul>

        <div className="burger">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
         </div>
  </nav>


 )

}



export default function Header(props) {
  return(
    <Contain>
      <Menu />
    </Contain>
  )


}
