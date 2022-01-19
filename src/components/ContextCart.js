import React, { useContext } from "react";
import { CartContext } from "./Cart";
import Items from "./Items";
import "bootstrap/dist/css/bootstrap.css";
import DetailsPopover from "./DetailsPopover";

export default function ContextCart() {
  const data = useContext(CartContext);
  const amount = data.totalQuantity * 39;
  return (
    <>
      <div>
        <div className="mainDiv">
          <div style={{ marginTop: "5px" }}>
            <h4 style={{ fontSize: "large", marginLeft: "5px" }}>${amount} </h4>
            <DetailsPopover value={data} />
          </div>
          <img style={{ height: "6rem" }} src="./cart.png" alt="Cart" />
        </div>
        <div style={{ paddingLeft: "15%" }}>
          <h1>Shopping cart({data.totalQuantity})</h1>
          <div>
            {data.products.map((pd) => {
              return <Items key={pd.id} value={pd} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}
