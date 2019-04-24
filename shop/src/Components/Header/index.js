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
        margin-left: 100px;
        margin-right: 20px;
        cursor: pointer;
        color: white;
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
          padding: 8px 8px 8px 32px;
          text-decoration: none;
          font-size: 25px;
          color: #818181;
          display: block;
          transition: 0.3s;
          }
           a:hover {
            color: #f1f1f1;
           }
     }
    .sidenav .closebtn {
      position: absolute;
      top: 0;
      right: 25px;
      font-size: 36px;
      margin-left: 50px;
    }
    .nav2 div{
       width:25px;
       height:5px;
       background-color:white;
       margin:5px;

     }
    @media screen and (max-width:768px){
          .logo{
            width: 45%;
            height: 45%;
            border-radius: 5px;
            transform: translate(65%, 80%);
          }
          .nav{
            display:none;
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
            width: 97.4%;
            font-weight: bold;
            left: 50%;
            margin-top: 1%;
            transform: translate(-50%, -40%);
            display:block;
            cursor:pointer;

          }

          .nav2 {

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
       <li className="li">About</li>

    </ul>

     <div id="mySidenav" class="sidenav">
       <a href="javascript:void(0)" class="closebtn" onClick={()=>closeNav()}>&times;</a>
       <a href="#">Productos</a>
       <a href="#">Favoritos</a>
       <a href="#">About</a>
     </div>

   <div onClick={()=>openNav()} className="nav2">
    <img className="logo" src={shop}/>
      <div className="line1"></div>
      <div className="line2"></div>
      <div className="line3"></div>

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
