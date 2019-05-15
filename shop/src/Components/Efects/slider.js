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

.imgaleria{
  width:800px;
  height:400px;
}

#Container{
  width:800px;
  margin: 60px auto;
  overflow:hidden;
  transform: translate(-2%, -140%);
}

#Container ul {
  list-style: none;
  width:2800px;
  display: flex;
  animation: slide 15s infinite;
}


@keyframes slide {
  0%{margin-left: 0px;}
  20%{margin-left: 0px;}

  25%{margin-left: -800px;}
  45%{margin-left: -800px;}

  50%{margin-left: -1600px;}
  70%{margin-left: -1600px;}

  75%{margin-left: -2400px;}
  100%{margin-left: -2400px;}

  101%{margin-left: -3200px;}

}
}
`;

const Galeria = (props) => {
  return (
    <Contain>
      <div id="Container">
       <ul>
        <li><img className="imgaleria" src={img1} alt="1"/></li>
        <li><img className="imgaleria" src={img2} alt="2"/></li>
        <li><img className="imgaleria"src={img3} alt="3"/></li>
        <li><img className="imgaleria"src={img4} alt="4"/></li>
       </ul>
      </div>
    </Contain>

  )
}

export default function Profile(props) {

  return(
    <Contain>
      <Header />

      <img className="fondo" src={fondo}/>

    </Contain>
  )


}
