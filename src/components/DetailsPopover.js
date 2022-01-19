import React from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import Button from "react-bootstrap/Button";
import ItemsDetails from "./ItemsDetails";

export default function DetailsPopover(props) {
  return (
    <>
      <OverlayTrigger
        trigger="click"
        key="bottom"
        placement="bottom"
        overlay={
          <Popover id={`popover-positioned-bottom`}>
            <Popover.Body style={{ backgroundColor: "lightgrey" }}>
              {props.value.products.map((pd) => {
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
          {props.value.totalQuantity} itmes{" "}
        </Button>
      </OverlayTrigger>
    </>
  );
}
