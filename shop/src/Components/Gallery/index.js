import React from "react";

export default function Gallery(props) {

console.log("Gallery props--->", props);

  return (
    <div className="card">
    {
      props.images.map(
        ( img )  => {
          return(
             <div className="box">
               <img className="box" src={img}/>
               <span>{props.texto}</span>
             </div>
          )
      }
      )
    }
    </div>

  )
}
