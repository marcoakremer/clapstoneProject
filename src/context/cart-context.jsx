import { createContext, useState } from "react";

const addItem = (originalArray, product) => {
  // // check if the item its included in the array
  // const isIncluded = originalArray.find((el) => el.id === product.id);
  // // if its included, then update the quantity
  // if (isIncluded) {
  //   return originalArray.map((el) =>
  //     el.id === product.id ? { ...el, quantity: el.quantity + 1 } : el
  //   );
  // }

  let index = originalArray.findIndex((element) => element.id === product.id);
  if (index >= 0) {
    originalArray[index].quantity |= 5;
    return [...originalArray];
  }
  return [...originalArray, { ...product, quantity: 1 }];

  // not found

  // reduce function iterates and check if current value alreary exists by compare current value with previour
  // if it is, then quantity increase by 1
  // if its not, then add a new value to it
  // const newItem = originalArray.reduce((acc, cur) => {
  //   if (cur.id === product.id) return {cur. }
  // });
};

export const CartContext = createContext({
  isOpen: false,
  setIsOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setcartItems] = useState([]);

  const addItemToCart = (product) => {
    setcartItems(addItem(cartItems, product));
  };

  const value = { isOpen, setIsOpen, addItemToCart, cartItems };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
