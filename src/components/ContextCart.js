import React, { useContext } from "react";
import { CartContext } from "./Cart";
import Items from "./Items";
import "bootstrap/dist/css/bootstrap.css";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import Button from "react-bootstrap/Button";
import ItemsDetails from "./ItemsDetails";

export default function ContextCart() {
  const data = useContext(CartContext);
  const amount = data.totalQuantity * 39;
  return (
    <>
      <div>
        <div className="mainDiv">
          <div style={{ marginTop: "5px" }}>
            <h4 style={{ fontSize: "large", marginLeft: "5px" }}>${amount} </h4>
            <OverlayTrigger
              trigger="click"
              key="bottom"
              placement="bottom"
              overlay={
                <Popover id={`popover-positioned-bottom`}>
                  <Popover.Body style={{ backgroundColor: "lightgrey" }}>
                    {data.products.map((pd) => {
                      return <ItemsDetails key={pd.id} value={pd} />;
                    })}
                  </Popover.Body>
                </Popover>
              }
            >
              <Button
                style={{
                  backgroundColor: "white",
                  border: "none",
                  color: "black",
                  fontSize: "small",
                  paddingRight: "0px",
                }}
                variant="secondary"
              >
                {data.totalQuantity} itmes{" "}
              </Button>
            </OverlayTrigger>
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
