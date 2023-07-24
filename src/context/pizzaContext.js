import { createContext, useContext, useState } from "react";
import React from "react";

export const PizzaContext = createContext();

export function usePizza() {
  return useContext(PizzaContext);
}

export function PizzaProvider({ children }) {
  const [pizza, setPizza] = useState({
    toppings: {
      paneer: false,
      corn: false,
      onion: false,
      tomato: false,
      mushroom: false,
      redpepper: false,
      capsicum: false,
      jalapeno: false,
    },
    size: "regular",
    cheese: false,
  });

  const [toppingPrice, setToppingPrice] = useState(0);
  const [sizePrice, setSizePrice] = useState(99);
  const [cheesePrice, setCheesePrice] = useState(0);

  const value = {
    pizza,
    setPizza,
    toppingPrice,
    setToppingPrice,
    sizePrice,
    setSizePrice,
    cheesePrice,
    setCheesePrice,
  };

  return (
    <PizzaContext.Provider value={value}>{children}</PizzaContext.Provider>
  );
}
