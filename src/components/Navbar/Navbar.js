import React from "react";

function Navbar() {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid d-flex justify-content-between">
            <a className="navbar-brand" href="/">
              Cheesy Slice
            </a>
            <div>Cart</div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
