import React, { useEffect, useState } from "react";
import { StyledCartBtn } from "./StyledCartBtn";
import { useNavigate } from "react-router-dom";
import { usePizza } from "../../context/pizzaContext";

function CartBtn() {
  const [addBtnDisabled, setAddBtnDisabled] = useState(true);

  const { pizza } = usePizza();
  const { toppings } = pizza;
  const navigate = useNavigate();

  const handleRouting = (route) => {
    navigate(route);
  };

  useEffect(() => {
    let selectedTopping = Object.keys(toppings).filter((key) => {
      return toppings[key];
    });
    selectedTopping.length > 0
      ? setAddBtnDisabled(false)
      : setAddBtnDisabled(true);
  }, [toppings]);

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
          disabled={addBtnDisabled}
          style={addBtnDisabled ? { cursor: "not-allowed" } : {}}
        >
          Add to Cart
        </button>
      </div>
    </StyledCartBtn>
  );
}

export default CartBtn;
