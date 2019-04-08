import React from "react";

export default function Gallery(props) {



  return (
    <div className="card">
    {
      props.images.map(
        ( img,i,span )  => {
          return(
             <div className="box">
               <img className="box" src={img}/>
               <span>{props.span[i]}</span>
             </div>
          )
      }
      )
    }
    </div>

  )
}
