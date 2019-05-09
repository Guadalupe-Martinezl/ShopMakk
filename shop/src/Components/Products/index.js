import React, {Component} from "react";

import Header from '../../Components/Header/';

import shop from '../../images/shopMak.png';
import medio from '../../images/perfil2.png';
import icono from '../../images/iconoperson.jpg';
import fondop from '../../images/fondop.jpg';

import styled, {css}from 'styled-components'

const Contain = styled.div`
padding: 2px;
margin: 0;
background: url(${fondop}) ;
width: 1480px;
height: 1150px;

* {
  box-sizing: border-box;
}

body {
  background-color: #f1f1f1;
  padding: 20px;
  font-family: Arial;
}

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
  transform: translate(2%,50%);
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
  transform: translate(10%,250%);
}

.btn:hover {
  background-color: #ddd;
}

.btn.active {
  background-color: #666;
   color: white;

}
  `;
 class Products extends Component {
   constructor(){
     super();
     this.state={
       producto:[],
       nombre: '',
       marca:'',
       precio: '',
       modelo: '',
       descripcion:'',
       imagen:''
     }
     this.handleProducts = this.handleProducts.bind(this);
   }
   handleProducts() {
     this.setState({

     });
   }

   componentDidMount(){
       fetch('http://192.168.2.106:8000/producto/')
       .then((response) => { return response.json()})
       .then((json) => {
         console.log("Json---->", json);
         let {producto} = this.state

         json.forEach(function(element, index) {
           var task = {
             nombre:element.Nombre_producto,
             marca:element.Marca_producto,
             precio:element.Precio_producto,
             modelo:element.Modelo_producto,
             descripcion: element.Descripcion_producto
};

          producto.push(task);

                 console.log(element, index );
                 });
            this.setState({
              producto

            })
            console.log("producto-->",producto.nombre );

          })

    }

   render(){
    return (
      <Contain>
      <Header />

          <div className="row">
            <div className="column nature">
              <div className="content">
                <img src={medio} alt="Mountains" style={{width:"100%"}}/>

              </div>
            </div>

            <div className="column nature">
              <div className="content">
                <img src={medio} alt="Lights"  style={{width:"100%"}}/>
              </div>
            </div>

            <div className="column nature">
              <div className="content">
                <img src={medio} alt="Nature"  style={{width:"100%"}}/>
              </div>
            </div>

            <div className="column cars">
              <div className="content">
                <img src={medio} alt="Car" style={{width:"100%"}}/>
              </div>
            </div>

            <div className="column cars">
              <div className="content">
                <img src={medio} alt="Car" style={{width:"100%"}}/>
              </div>
            </div>

            <div className="column cars">
              <div className="content">
                <img src={medio} alt="Car" style={{width:"100%"}}/>
              </div>
            </div>

            <div className="column people">
              <div className="content">
                <img src={medio} alt="People" style={{width:"100%"}}/>
              </div>
            </div>

            <div className="column people">
              <div className="content">
                <img src={medio} alt="People" style={{width:"100%"}}/>
              </div>
            </div>

            <div className="column people">
              <div className="content">
                <img src={medio} alt="People" style={{width:"100%"}}/>
              </div>
            </div>
          </div>

        </Contain>
              )
            }
  }
export default Products;
