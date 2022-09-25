import "./checkout.scss";
import CheckoutItem from "../checkout-item/checkout-item";
import { CartContext } from "../../context/cart-context";
import { useContext } from "react";

const CheckOut = () => {
  const { cartItems, totalPrice } = useContext(CartContext);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((el) => (
        <CheckoutItem key={el.id} item={el} />
      ))}
      <span className="total">Total: {totalPrice()}</span>
    </div>
  );
};
export default CheckOut;
