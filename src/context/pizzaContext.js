import { createContext, useContext, useState } from "react";
import React from "react";

export const PizzaContext = createContext();

export function usePizza() {
  return useContext(PizzaContext);
}

export function PizzaProvider({ children }) {
  console.log(children);
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

  const value = {
    pizza,
    setPizza,
  };

  return (
    <PizzaContext.Provider value={value}>{children}</PizzaContext.Provider>
  );
}
