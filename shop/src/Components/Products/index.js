import React, {Component} from "react";

import Header from '../../Components/Header/';

import shop from '../../images/shopMak.png';
import medio from '../../images/perfil2.png';
import icono from '../../images/iconoperson.jpg';
import fondop from '../../images/fondop.jpg';

import styled, {css}from 'styled-components'

const Contain = styled.div`
padding: 0px;
margin: 0;
background: url(${fondop});
width: 1480px;
height: 1150px;

* {
  box-sizing: border-box;
}

body {
  background-color: #f1f1f1;
  padding: 10px;
  margin: 2px;
  font-family: Arial;
}

.main {
  max-width: 1000px;
  margin: auto;
}


.row {
  margin: 5px, -10px;
}
 @meda screen max-width(800%) {
   .row {
     margin: 5px, -10px;
   }
   .content {
     background-color: white;
     transform: translate(3%, 35%);
      display: inline-block;
   }
   .column {
     float: right;
     width: 20%;
     display: none;
   }
   .show {
     display: inline-block;
   }
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
  transform: translate(3%, 35%);
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
         var task = {
           nombre:     json.Nombre_producto,
           marca:      json.Marca_producto,
           precio:     json.Precio_producto,
           modelo:     json.Modelo_producto,
           descripcion:json.Descripcion_producto,
           imagen: json.img,
         };

        producto.push(task);
               json.forEach(function(element, index) {
                 var obj1 = {
                   nombre:element.Nombre_producto,
                   marca:element.Marca_producto,
                   precio:     element.Precio_producto,
                   modelo:     element.Modelo_producto,
                   descripcion:element.Descripcion_producto,
                   imagen: element.img,
            }
               console.log("forEach---->", element, index);
               });

         this.setState({
          producto
         })
})
}
   render(){
     const productos = this.state.producto;
     return  this.state.producto.map((productos, i) => (
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

               <span>
               {this.props.nombre}

               </span>

             </div>
        </div>
        </div>
      </div>
    </div>
    </Contain>
  ));
      }
  }
export default Products;
