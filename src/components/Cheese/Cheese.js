import React, { useEffect } from "react";
import { StyledCheese } from "./StyledCheese";
import { usePizza } from "../../context/pizzaContext";

function Cheese() {
  const { pizza, setPizza, setCheesePrice } = usePizza();
  const { cheese } = pizza;

  const updateCheese = (event) => {
    setPizza({ ...pizza, cheese: !cheese });
  };

  useEffect(() => {
    let selectedCheese = pizza.cheese;
    console.log(selectedCheese);
    selectedCheese ? setCheesePrice(50) : setCheesePrice(0);
  }, [pizza]);

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
            <label className="form-check-label" htmlFor="flexCheckDefault">
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
