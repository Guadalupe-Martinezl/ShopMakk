import React from "react";

export default function Gallery(props) {

<<<<<<< HEAD
=======
<<<<<<< HEAD
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
=======

>>>>>>> e29a3e1b03470ab445f10715d34544ba6bd7a1bd
  return (
    <div className="card">
    {
      props.images.map(
        ( img ,i, span  )  => {
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
>>>>>>> 54eb19bb28732ebd091b63a8ae0e1bcae09484b1
