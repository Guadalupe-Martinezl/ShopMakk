import shop from '../../images/shop2.png';
import reloj from '../../images/reloj.jpeg';
import fondo from '../../images/fondo.jpg';

import styled, {css}from 'styled-components'

const Contain = styled.div`
  padding:0;
  margin: 0;

  background: url(${fondo}) no-repeat bottom;
  background-size: 100% 110%;
  box-sizing: border-box;


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
  border: 1px solid black;
  border-radius: 2px;
  color: black;
  width: 20%;
  max-width: 500px;
  box-sizing: border-box;
  transform: translate(100%, -100%);

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
  border: 1px solid black;
  padding: 0.25em 1em;
  transform: translate(565%);
  width: 7%;
  max-width: 500px;
  box-sizing: border-box;
  transform: translate(290%, -100%);
`;

export default function Profile(props) {
  return(
    <Contain>
      <div className="menu">
        <img  src={shop}/>
      <Busqueda
        type="text"
        placeholder="Busqueda"
        />
      <Buscar
        name="busqueda"
        type="submit">
        Buscar
      </Buscar>
        </div>

      )

    }
