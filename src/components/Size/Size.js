import React, { useEffect } from "react";
import { StyledSize } from "./StyledSize";
import { usePizza } from "../../context/pizzaContext";

function Size() {
  const { pizza, setPizza, setSizePrice } = usePizza();
  const { size } = pizza;
  const updateSize = (event) => {
    setPizza({ ...pizza, size: event.target.value });
    console.log(pizza);
  };

  useEffect(() => {
    let selectedSize = pizza.size;
    console.log(selectedSize);
    selectedSize === "medium"
      ? setSizePrice(199)
      : selectedSize === "large"
      ? setSizePrice(259)
      : setSizePrice(99);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pizza]);

  return (
    <StyledSize>
      <div className="wrapper" style={{ height: "156px" }}>
        <h3 className="sub-heading">Choose Size</h3>
        <div className="flex-size">
          <div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                value="regular"
                checked={size === "regular"}
                id="flexRadioDefault1"
                onChange={updateSize}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Little Buddy <span> ₹ 99</span>
              </label>
            </div>
          </div>
          <div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                value="medium"
                checked={size === "medium"}
                id="flexRadioDefault1"
                onChange={updateSize}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Happy Medium <span> ₹ 199</span>
              </label>
            </div>
          </div>
          <div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                value="large"
                checked={size === "large"}
                id="flexRadioDefault1"
                onChange={updateSize}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Super Yum <span> ₹ 259</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </StyledSize>
  );
}

export default Size;
