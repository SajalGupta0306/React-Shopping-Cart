import React, { useContext } from "react";
import { CartContext } from "./Cart";

export default function ItemsDetails(props) {
  const { removeItem } = useContext(CartContext);

  const deleteItem = () => {
    const id = props.value.id;
    const quantity = props.value.quantity;
    document.getElementById(id).hidden = true;
    removeItem(id, quantity);
  };

  return (
    <>
      <div id={props.value.id}>
        <div style={{ display: "flex" }}>
          <div style={{ marginRight: "10px", marginTop: "5px" }}>
            <i className="fas fa-trash-alt" onClick={() => deleteItem()} />
          </div>
          <div>
            <h2>{props.value.title}</h2>
            <h3>
              {props.value.price}
              {props.value.currency}
            </h3>
          </div>
          <div>
            <h3 style={{ marginLeft: "10rem" }}>Qty {props.value.quantity}</h3>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
}
