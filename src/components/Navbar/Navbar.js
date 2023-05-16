import React from "react";
import { StyledNavbar } from "./StyledNavbar";
import { useNavigate } from "react-router-dom";
import cart from "../../images/cart.png";

function Navbar() {
  const navigate = useNavigate();

  const handleRouting = (route) => {
    console.log("shivam");
    navigate(route);
  };

  return (
    <StyledNavbar>
      <div>
        <nav className="navbar navbar-expand-lg nav">
          <div className="container-fluid d-flex justify-content-between">
            <h2
              className="navbar-brand title"
              onClick={() => handleRouting("/")}
            >
              Cheesy Slice
            </h2>
            <div>
              {/* <i
                className="fa-solid fa-cart-shopping cart position-relative"
                onClick={() => handleRouting("/cart")}
              >
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  2
                </span>
              </i> */}
              <img
                src={cart}
                alt="cart"
                onClick={() => handleRouting("/cart")}
                className="cart"
              />
            </div>
          </div>
        </nav>
      </div>
    </StyledNavbar>
  );
}

export default Navbar;
