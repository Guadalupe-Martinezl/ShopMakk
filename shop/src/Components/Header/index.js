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
     }
     .nav{
      position: absolute;
      display: flex;
      flex-direction: row;
      font-size: 20px;
      color: #fff;
      justify-content: center;
      align-items: center;
      z-index: 3;
      list-style: none;
      background: #000;
      padding: 20px;
      width: 97.4%;
      font-weight: bold;
      left: 50%;
      margin-top: 1%;
      transform: translate(-50%, -40%);
      }
      .li{
        margin-left: 80px;
        margin-right: -20px;
        cursor: pointer;
        color: white;
        transform: translate(70%, 40%);
        }
        .nav2{
          display:none;
        }
        .sidenav {
          height: 100%;
          width: 0;
          position: fixed;
          z-index: 1;
          top: 0;
          left: 0;
          background-color: #111;
          overflow-x: hidden;
          padding-top: 60px;
          transition: 0.5s;

           a {
            height:44px;
            padding: 0 20px;
            position:relative;
            z-index:3;
            cursor:pointer;
            line-height:46px;
            text-decoration: none;
            color: white;
            display: block;
            font: oblique bold 150% cursive;
            }
            .back-menu{
              position:absolute;
              top:0;
              left:0;
              height:47px;
              width:100%;
              background: linear-gradient(90deg,red 2%, orange 80%);
              border-radius:60px;
              transition:0.3s;
            }
             a:hover :nth-of-type(1):hover ~ .back-menu{
                 transform:translateY(0);
               }
                a:hover:nth-of-type(2):hover ~ .back-menu{
                 transform:translateY(calc(100% *1));
               }
                a:hover:nth-of-type(3):hover ~ .back-menu{
                 transform:translateY(calc(100% *2));
               }
               a:hover:nth-of-type(4):hover ~ .back-menu{
                transform:translateY(calc(100% *3));
              }
              a:hover:nth-of-type(5):hover ~ .back-menu{
               transform:translateY(calc(100% *4));
             }
              color: #f1f1f1;
             }
       }
      .sidenav .closebtn {
        position: absolute;
        top: 0;
          .logo{
            width: 40%;
            height:40%;
            border-radius: 5px;
          }
          .nav{
            display:none;
          }
          .nav2 div{
             width:25px;
             height:5px;
             background-color:white;
             margin:5px;
           }
          .nav2{
            position: absolute;
            display: flex;
            flex-direction: row;
            font-size: 10px;
            color: #fff;
            justify-content: center;
            align-items: center;
            z-index: 0;
            list-style: none;
            background: #000;
            padding: 30px;
            width: 89.2%;
            font-weight: bold;
            left: 50%;
            margin-top: 1%;
            transform: translate(-50%, -40%);
            display:block;
            cursor:pointer;
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
    transform: translate(40%, 25%);
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
    font:95% "sans-serif";
    border-radius: 1em;
    border: 2px solid white;
    padding: 0.25em;
    transform: translate(565%);
    width: 7%;
    max-width: 500px;
    box-sizing: border-box;
    transform: translate(115%, 25%);
  `;

  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }


 const Menu = (props) => {
   return (
     <Contain>
     <ul className="nav">
     <img className="logo" src={shop}/>
     <Busqueda
       className="busqueda"
       type="text"
       placeholder="Busqueda"
       />
       <Buscar
         className="Buscar"
         name="busqueda"
         type="submit">
         Buscar
       </Buscar>
       <li className="li">Productos</li>
       <li className="li">Favoritos</li>
       <li className="li">Registrarse</li>
       <li className="li">Login</li>


    </ul>

     <div id="mySidenav" class="sidenav">
       <a href="javascript:void(0)" class="closebtn" onClick={()=>closeNav()}>&times;</a>

       <a  href="#">Productos</a>
       <a  href="#">Favoritos</a>
       <a  href="#">Registrarse</a>
       <a  href="#">Login</a>
           <div className="back-menu"></div>
     </div>


   <div onClick={()=>openNav()} className="nav2">
      <img className="logo" src={shop}/>
      <div className="line1"></div>
      <div className="line2"></div>
      <div className="line3"></div>
      <div className="line4"></div>

  </div>
   </Contain>
  )
 }

export default function Header(props) {
  return(
    <Contain>
      <Menu />
    </Contain>
  )
}
