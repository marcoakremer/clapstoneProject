import "./category.scss";
import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { CategoriesContext } from "../../context/categories";
import ProductCard from "../../components/product-card/product-card";
const Category = () => {
  const { category } = useParams();
  const { categories } = useContext(CategoriesContext);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(categories[category]);
  }, [category, categories]);
  return (
    <div className="category-container">
      {products && products.map((el) => <ProductCard product={el} />)}
    </div>
  );
};

export default Category;
