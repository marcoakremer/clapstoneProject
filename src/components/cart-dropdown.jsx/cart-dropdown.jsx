import "./cart-dropdown.scss";
import Button from "../button/component.button";
import { useContext } from "react";
import { CartContext } from "../../context/cart-context";
import CardItem from "../cart-item/cart-item";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const checkoutHandler = () => {
    navigate("/checkout");
  };
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((el) => (
          <CardItem key={el.id} product={el}></CardItem>
        ))}
      </div>
      <Button onClick={checkoutHandler}>go to check</Button>
    </div>
  );
};

export default CartDropdown;
