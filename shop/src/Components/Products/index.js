
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
background: url(${fondop});
width: 1480px;
height: 1300px;
* {
  box-sizing: border-box;
}
body {
  background-color: #f1f1f1;
  padding: 20px;
  font-family: Arial;
}
/* Center website */
.main {
  max-width: 1000px;
  margin: auto;
}

.row {
  margin: 5px -10px;
}

.row,
.row > .column {
  padding: 5px;
}
/* Create three equal columns that floats next to each other */
.column {
  float: left;
  width: 30%;
  display: none;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}

.content {
  background-color: white;
  padding: 5px;
}

.show {
  display: block;
}

.btn {
  border: none;
  outline: none;
  padding: 12px 16px;
  background-color: white;
  cursor: pointer;
}

.btn:hover {
  background-color: #ddd;
}

.btn.active {
  background-color: #666;
   color: white;
}
  `;
 function Portafolio(props) {
   console.log("imagen medio--->", medio);
  return (
    <Contain>

        <div id="myBtnContainer">
          <button className="btn active" onClick="filterSelection('all')"> Show all</button>
          <button className="btn" onClick="filterSelection('nature')"> Nature</button>
          <button className="btn" onClick="filterSelection('cars')"> Cars</button>
          <button className="btn" onClick="filterSelection('people')"> People</button>
        </div>


    <div className="row">
      <div className="column nature">
        <div className="content">
          <img src={medio} alt="Mountains" style={{width:"100%"}}/>
          <h4>Mountains</h4>
          <p>Lorem ipsum dolor..</p>
        </div>
      </div>
      <div className="column nature">
        <div className="content">
          <img src={medio} alt="Lights"  style={{width:"100%"}}/>
          <h4>Lights</h4>
          <p>Lorem ipsum dolor..</p>
        </div>
      </div>
      <div className="column nature">
        <div className="content">
          <img src={medio} alt="Nature"  style={{width:"100%"}}/>
          <h4>Forest</h4>
          <p>Lorem ipsum dolor..</p>
        </div>
      </div>

      <div className="column cars">
        <div className="content">
          <img src={medio} alt="Car" style={{width:"100%"}}/>
          <h4>Retro</h4>
          <p>Lorem ipsum dolor..</p>
        </div>
      </div>
      <div className="column cars">
        <div className="content">
          <img src={medio} alt="Car" style={{width:"100%"}}/>
          <h4>Fast</h4>
          <p>Lorem ipsum dolor..</p>
        </div>
      </div>
      <div className="column cars">
        <div className="content">
          <img src={medio} alt="Car" style={{width:"100%"}}/>
          <h4>Classic</h4>
          <p>Lorem ipsum dolor..</p>
        </div>
      </div>

      <div className="column people">
        <div className="content">
          <img src={medio} alt="People" style={{width:"100%"}}/>
          <h4>Girl</h4>
          <p>Lorem ipsum dolor..</p>
        </div>
      </div>
      <div className="column people">
        <div className="content">
          <img src={medio} alt="People" style={{width:"100%"}}/>
          <h4>Man</h4>
          <p>Lorem ipsum dolor..</p>
        </div>
      </div>
      <div className="column people">
        <div className="content">
          <img src={medio} alt="People" style={{width:"100%"}}/>
          <h4>Woman</h4>
          <p>Lorem ipsum dolor..</p>
        </div>
      </div>
    </div>
    </Contain>
        )
      }


  export default function Profile(props) {

    return(
      <Contain>
       <Header />
       <Portafolio />

      </Contain>
    )


}
