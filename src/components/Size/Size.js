import React from "react";
import { StyledSize } from "./StyledSize";

function Size({ size, setSize }) {
  const updateSize = (event) => {
    setSize(event.target.value);
  };

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
              <label className="form-check-label" for="flexRadioDefault1">
                Little Buddy
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
              <label className="form-check-label" for="flexRadioDefault1">
                Happy Medium
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
              <label className="form-check-label" for="flexRadioDefault1">
                Super Yum
              </label>
            </div>
          </div>
        </div>
      </div>
    </StyledSize>
  );
}

export default Size;
