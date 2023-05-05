import React from "react";
import { StyledCheese } from "./StyledCheese";

function Cheese({ cheese, setCheese }) {
  const updateCheese = (event) => {
    setCheese(!cheese);
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
          </div>
        </div>
      </div>
    </StyledCheese>
  );
}

export default Cheese;
