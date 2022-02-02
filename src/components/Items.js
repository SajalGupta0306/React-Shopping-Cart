import React, { useContext } from "react";
import { CartContext } from "./Cart";

export default function Items(props) {
  const { increment, decrement } = useContext(CartContext);
  return (
    <>
      <div className="items-info">
        <div className="product-img">
          <img src={props.value.img} alt={props.value.image}></img>
        </div>
        <div className="title">
          <h2>{props.value.title}</h2>
          <p>{props.value.desc}</p>
        </div>
        <div className="add-minus-quantity">
          <i
            className="fas fa-minus"
            onClick={() => decrement(props.value.id)}
          />
          <input type="text" placeholder={props.value.quantity} disabled />
          <i
            className="fas fa-plus"
            onClick={() => increment(props.value.id)}
          />
        </div>
        <div className="price">
          <h3>
            {props.value.price}
            {props.value.currency}
          </h3>
        </div>
      </div>
      <hr />
    </>
  );
}
