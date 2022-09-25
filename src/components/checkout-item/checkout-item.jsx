import "./checkout-item.scss";
import { UserContext } from "../../context/context";
import { CartContext } from "../../context/cart-context";
import { useContext } from "react";

const CheckoutItem = ({ item }) => {
  const { imageUrl, name, price, quantity } = item;
  const { removeItemToCart, addItemToCart, clearItemFromCart } =
    useContext(CartContext);

  const addHandler = () => addItemToCart(item);
  const removeHandler = () => removeItemToCart(item);
  const clearHandler = () => clearItemFromCart(item);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt="" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div onClick={removeHandler} className="arrow">
          &#10094;
        </div>
        {quantity}
        <div onClick={addHandler} className="arrow">
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <button onClick={clearHandler} className="remove-button">
        &#10005;
      </button>
    </div>
  );
};

export default CheckoutItem;
