import React from "react";

import Header from '../../Components/Header/';

import shop from '../../images/shopMak.png';
import fondo from '../../images/fondo.jpg';
import medio from '../../images/perfil2.png';
import icono from '../../images/iconoperson.jpg';
import img1 from '../../images/img1.jpg';
import img2 from '../../images/im2.jpg';
import img3 from '../../images/img3.jpg';
import img4 from '../../images/img4.jpg';
import video from '../../images/video.mp4';

import styled, {css}from 'styled-components'


const Contain = styled.div`

*{
  padding:0px;
  margin:0px;
}

.fondo{
  width: 100%;
  height: 15%;
}


.logo {
  width: 15%;
  height: 15%;
  border-radius: 5px;
  transform: translate(-55%, 8%);
}

.icono{
  width: 3%;
  height: 3%;
  border-radius: 5px;
}

.ia-container {
width: 800px;
margin: 20px auto;
overflow: hidden;
box-shadow: 1px 1px 4px rgba(0,0,0,0.08);
border: 7px solid rgba(255,255,255,0.6);
  transform: translate(-2%, -110%);
}

.ia-container figure {
position: absolute;
top: 0;
left: 50px;
width: 700px;
box-shadow: 0 0 0 1px rgba(255,255,255,0.6);
transition: all 0.3s ease-in-out;
}
.ia-container > figure {
position: relative;
left: 0 !important;
}

.ia-container img {
display: block;
width: 120%;
}

.ia-container input {
position: absolute;
top: 0;
left: 0;
width: 50px; 
height: 100%;
cursor: pointer;
border: 0;
padding: 0;
opacity: 0;
z-index: 100;
-webkit-appearance: none;
-moz-appearance: none;
appearance: none;
}

.ia-container input:checked{
width: 5px;
left: auto;
right: 10px;
}
.ia-container input:checked ~ figure {
  left: 335px;
  transition: slide 0.1s infinite;

}

.ia-container figcaption {
width: 100%;
height: 100%;
background: rgba(87, 73, 81, 0.1);
position: absolute;
top: 0px;
transition: all 0.2s linear;
}

.ia-container figcaption span {
position: absolute;
top: 40%;
margin-top: -30px;
right: 20px;
left: 20px;
overflow: hidden;
text-align: left;
background: #FBCFAB;
line-height: 20px;
font-size: 30px;
opacity: 0;
text-transform: uppercase;
letter-spacing: 4px;
font-weight: 800;
padding: 20px;
color: #fff;
text-shadow: 5px 1px 1px rgba(0,0,0,0.1);
}

.ia-container input:checked + figcaption,
.ia-container input:checked:hover + figcaption{
background: rgba(87, 73, 81, 0);
}
.ia-container input:checked + figcaption span {
  transition: all 0.4s ease-in-out 0.5s;
opacity: 1;
top: 50%;
}
.ia-container #ia-selector-last:checked + figcaption span {
transition-delay: 0.3s;
}
.ia-container input:hover + figcaption {
background: rgba(87, 73, 81, 0.03);
}
.ia-container input:checked ~ figure input{
  z-index: 1;
}
}
`;

const Galeria2 = (props) => {
  return (
<div class="ia-container">

	<figure>
		<img src={img1} alt="image01" />
		<input type="radio" name="radio-set" checked="checked" />
		<figcaption><span>True Colors</span></figcaption>

		<figure>
			<img src={img2}alt="image02" />
			<input type="radio" name="radio-set" />
			<figcaption><span>Tecnologias</span></figcaption>

      <figure>
    		<img src={img3} alt="image03" />
    		<input type="radio" name="radio-set" checked="checked" />
    		<figcaption><span>Maquillaje</span></figcaption>

        <figure>
      		<img src={img3} alt="image03" />
      		<input type="radio" name="radio-set" checked="checked" />
      		<figcaption><span>Electronica</span></figcaption>

          <figure>
        		<img src={img1} alt="image03" />
        		<input type="radio" name="radio-set" checked="checked" />
        		<figcaption><span>True Colors</span></figcaption>
      </figure>
      </figure>
        </figure>
      </figure>
        </figure>

    </div>
    )
  }

  export default function Persianas(props) {

    return(
      <Contain>
        <Header />

        <img className="fondo" src={fondo}/>

      </Contain>
    )


  }
