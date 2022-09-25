import { createContext, useState } from "react";

const addItem = (originalArray, product) => {
  let index = originalArray.findIndex((element) => element.id === product.id);
  if (index >= 0) {
    originalArray[index].quantity += 1;
    return [...originalArray];
  }
  return [...originalArray, { ...product, quantity: 1 }];
};

const removeItem = (originalArray, product) => {
  let index = originalArray.findIndex((element) => element.id === product.id);
  if (index < 0) return [...originalArray];
  if (originalArray[index].quantity > 1) {
    originalArray[index].quantity -= 1;
    return [...originalArray];
  }
  return [...originalArray];
};
const clearItem = (originalArray, product) => {
  return originalArray.filter((el) => el.id !== product.id);
};
export const CartContext = createContext({
  isOpen: false,
  setIsOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemToCart: () => {},
  totalItems: () => {},
  totalPrice: 0,
  clearItemFromCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setcartItems] = useState([]);

  const addItemToCart = (product) => {
    setcartItems(addItem(cartItems, product));
  };
  const removeItemToCart = (product) => {
    setcartItems(removeItem(cartItems, product));
  };
  const totalItems = () => {
    let sum = cartItems.reduce((prev, cur) => {
      return prev + cur.quantity;
    }, 0);
    return sum;
  };

  const totalPrice = () => {
    let price = cartItems.reduce((prev, cur) => {
      return prev + +cur.quantity * +cur.price;
    }, 0);
    return price;
  };
  const clearItemFromCart = (product) => {
    setcartItems(clearItem(cartItems, product));
  };
  const value = {
    isOpen,
    setIsOpen,
    addItemToCart,
    cartItems,
    totalItems,
    totalPrice,
    removeItemToCart,
    clearItemFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
