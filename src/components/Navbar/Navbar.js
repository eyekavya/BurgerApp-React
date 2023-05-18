import React from "react";
import { StyledNavbar } from "./StyledNavbar";
import { useLocation, useNavigate } from "react-router-dom";
import cart from "../../images/cart.png";
import menu from "../../images/menu.png";

function Navbar() {
  const navigate = useNavigate();

  const location = useLocation();

  const handleRouting = (route) => {
    navigate(route);
  };

  return (
    <StyledNavbar>
      <div>
        <nav className="navbar navbar-expand-lg nav">
          <div className="container-fluid d-flex justify-content-between">
            <h2
              className="navbar-brand title"
              onClick={() => {
                handleRouting("/");
              }}
            >
              Cheesy Slice
            </h2>
            <div>
              {location.pathname !== "/cart" ? (
                <img
                  src={cart}
                  alt="cart"
                  onClick={() => {
                    handleRouting("/cart");
                  }}
                  className="cart"
                />
              ) : (
                <img
                  src={menu}
                  alt="menu"
                  onClick={() => {
                    handleRouting("/menu");
                  }}
                />
              )}
            </div>
          </div>
        </nav>
      </div>
    </StyledNavbar>
  );
}

export default Navbar;
