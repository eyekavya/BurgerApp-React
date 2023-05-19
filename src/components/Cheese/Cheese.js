import React from "react";
import { StyledCheese } from "./StyledCheese";
import { usePizza } from "../../context/pizzaContext";

function Cheese() {
  const { pizza, setPizza } = usePizza();
  const { cheese } = pizza;

  const updateCheese = (event) => {
    setPizza({ ...pizza, cheese: !cheese });
    console.log(pizza);
  };

  return (
    <StyledCheese>
      <div className="wrapper" style={{ height: "156px" }}>
        <h3 className="sub-heading">Extra Cheese</h3>
        <div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value="cheese"
              checked={cheese}
              onChange={updateCheese}
              id="flexCheckDefault"
            />
            <label className="form-check-label" for="flexCheckDefault">
              Say Cheese! Add extra please!
            </label>
            <div className="price-cheese"> @ just ₹ 50</div>
          </div>
        </div>
      </div>
    </StyledCheese>
  );
}

export default Cheese;
