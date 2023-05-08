const { createContext, useState } = require("react");

const CartContext = createContext({});

export function CartContextProvider({ children }) {
  const [cartProduct, setCartProduct] = useState([]);
  return (
    <CartContext.Provider value={{ cartProduct }}>
      {children}
    </CartContext.Provider>
  );
}
