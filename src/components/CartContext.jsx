const { createContext, useState, useEffect } = require("react");

export const CartContext = createContext({});

export function CartContextProvider({ children }) {
  const ls = typeof window !== "undefined" ? window.localStorage : null;
  const [cartProduct, setCartProduct] = useState([]);
  const [isRegister, setIsRegister] = useState(false);
  useEffect(() => {
    if (cartProduct?.length > 0) {
      ls?.setItem("cart", JSON.stringify(cartProduct));
    }
  }, [cartProduct]);
  useEffect(() => {
    if (ls && ls.getItem("cart")) {
      setCartProduct(JSON.parse(ls.getItem("cart")));
    }
  }, []);
  const addProduct = (productId) => {
    setCartProduct((prev) => [...prev, productId]);
  };
  const removeProduct = (productId) => {
    setCartProduct((prev) => {
      const pos = prev.indexOf(productId);
      if (pos !== -1) {
        return prev.filter((value, index) => index !== pos);
      }
      return prev;
    });
  };
  function clearCart() {
    setCartProduct([]);
    localStorage.removeItem("cart");
  }
  const RegisterForm = () => {
    setIsRegister(!isRegister);
    localStorage.setItem("register", isRegister);
  };
  return (
    <CartContext.Provider
      value={{
        cartProduct,
        setCartProduct,
        removeProduct,
        addProduct,
        clearCart,
        RegisterForm,
      }}>
      {children}
    </CartContext.Provider>
  );
}
