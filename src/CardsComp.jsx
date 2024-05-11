import React from "react";
import "./App.css";

function CardsComp(props) {
  return (
    <>
      <div className="card">
        <img src={props.Tree} />
        <div className="cont">
          <h3>{props.name}</h3>
          <h2>{props.price}</h2>
          <p>Perfect for adding a festive touch to any</p>
          <p>space, this miniature tree brings the magic</p>
          <p>of Christmas right into your home. Crafted</p>
          <p>with care, it's a delightful...</p>

          <input type="button" value="Add to Cart" className="btn" />
          <img className="bag" src={props.bag} />

        </div>
      </div>
        
    </>
  );
}

export default CardsComp;
