import React from "react";

export default function ItemsDetails(props) {
  return (
    <>
      <div className="container" style={{ display: "flex", width: "30rem" }}>
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
    </>
  );
}
