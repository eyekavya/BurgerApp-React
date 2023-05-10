import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.js";
import Cart from "./components/Cart/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";

function App() {
  return (
    <>
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
