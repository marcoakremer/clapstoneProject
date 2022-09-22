import "./cart-icon.scss";
import { ReactComponent as CartIconSVG } from "./../../assets/shopping-bag.svg";
import { useContext } from "react";

import { CartContext } from "../../context/cart-context";

const CartIcon = () => {
  const { isOpen, setIsOpen } = useContext(CartContext);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div onClick={toggle} className="cart-icon-container">
      <CartIconSVG className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
