import React from "react";

export default function Gallery(props) {



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


  return (
    <div className="card">
     <div className="box">
       <img className="box" src={props.images[0],[1],[2]}/>
       <span>{props.texto}</span>
     </div>
  </div>
  )
 }
>>>>>>> 54eb19bb28732ebd091b63a8ae0e1bcae09484b1
