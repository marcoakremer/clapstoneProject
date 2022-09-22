import "./product-card.scss";
import Button from "../button/component.button";

const ProductCard = ({ product }) => {
  const { id, name, price, imageUrl } = product;
  return (
    <div className="products-card-container">
      <img src={imageUrl} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted">Add to Cart</Button>
    </div>
  );
};

export default ProductCard;
