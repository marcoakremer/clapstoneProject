import { useContext } from "react";
import { CartContext } from "../../context/cart-context";
import "./product-card.scss";
import Button from "../button/component.button";

const ProductCard = ({ product }) => {
  const { id, name, price, imageUrl } = product;

  const { addItemToCart } = useContext(CartContext);

  const addHandler = () => {
    addItemToCart(product);
    console.log(product);
  };
  return (
    <div className="products-card-container">
      <img src={imageUrl} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button onClick={addHandler}>add-</Button>
    </div>
  );
};

export default ProductCard;
