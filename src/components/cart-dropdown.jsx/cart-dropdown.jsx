import "./cart-dropdown.scss";
import Button from "../button/component.button";
import { useContext } from "react";
import { CartContext } from "../../context/cart-context";
import CardItem from "../cart-item/cart-item";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((el) => (
          <CardItem key={el.id} product={el}></CardItem>
        ))}
      </div>
      <Button>add to cart</Button>
    </div>
  );
};

export default CartDropdown;
