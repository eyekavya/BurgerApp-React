import React from "react";
import { StyledCartBtn } from "./StyledCartBtn";
import { useNavigate } from "react-router-dom";

function CartBtn() {
  const navigate = useNavigate();

  const handleRouting = (route) => {
    navigate(route);
  };

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
        <button
          className="btn-general"
          onClick={() => {
            handleRouting("/cart");
          }}
        >
          Add to Cart
        </button>
      </div>
    </StyledCartBtn>
  );
}

export default CartBtn;
