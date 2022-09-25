import "./shop.scss";
import { useContext } from "react";
import { ProductsContext } from "../../context/products";
import ProductCard from "../product-card/product-card";

function Shop() {
  const { products } = useContext(ProductsContext);
  return (
    <div className="products-container">
      {products.map((prod) => {
        return (
          <div>
            <ProductCard key={prod.id} product={prod} />
          </div>
        );
      })}
    </div>
  );
}

export default Shop;
