import "./preview.scss";

import ProductCard from "../product-card/product-card";
import React from "react";
import { Link } from "react-router-dom";

const Preview = ({ category, title }) => {
  return (
    <div className="category-preview-container">
      <h2>
        <Link to={title} className="title">
          {title.toUpperCase()}
        </Link>
      </h2>
      <div className="preview">
        {category.slice(0, 4).map((prod) => {
          return (
            <div>
              <ProductCard key={prod.id} product={prod} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Preview;
