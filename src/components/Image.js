import React from "react";
import './Image.css';



const Image =()=>{
    return(
        <img className="img" src={require('././sofia.jpg')} alt="A portrait of Sofia"/>
    )
}

export default Image;