
import React from "react";
import { Link } from "react-router-dom";

function MenuItem({ image, name, price,id }) {
  return (
    
    <div className="menuItem">
      {/* <div style={{ backgroundImage: `url(${image})` }}> </div> */}
      <h1> {name} </h1>
      <p> {price} </p>
    </div>

  );
}

export default MenuItem;