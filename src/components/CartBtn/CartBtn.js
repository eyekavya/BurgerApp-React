import React from "react";
import { StyledCartBtn } from "./StyledCartBtn";

function CartBtn() {
  return (
    <StyledCartBtn>
      <div
        className="wrapper"
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "4rem",
          marginLeft: "-6rem",
        }}
      >
        <button className="addToCartBtn">Add to Cart</button>
      </div>
    </StyledCartBtn>
  );
}

export default CartBtn;
