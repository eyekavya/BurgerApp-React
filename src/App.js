import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar.js";
import Cart from "./components/Cart/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import { PizzaProvider } from "./context/pizzaContext";

function App() {
  return (
    <PizzaProvider>
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/menu" element={<Home />}></Route>
          </Routes>
        </Router>
      </div>
    </PizzaProvider>
  );
}

export default App;
