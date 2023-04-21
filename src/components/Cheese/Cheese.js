import React from "react";
import { StyledCheese } from "./StyledCheese";

function Cheese() {
  return (
    <StyledCheese>
      <div className="wrapper">
        <h3 className="sub-heading">Extra Cheese</h3>
        <div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value="cheese"
              id="flexCheckDefault"
            />
            <label className="form-check-label" for="flexCheckDefault">
              Say Cheese! Add extra please!
            </label>
          </div>
        </div>
      </div>
    </StyledCheese>
  );
}

export default Cheese;
