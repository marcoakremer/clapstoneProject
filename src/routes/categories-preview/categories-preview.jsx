import "./categories-preview.scss";
import { useContext } from "react";
import { CategoriesContext } from "../../context/categories";

import Preview from "../../components/preview/preview";

function CategoriesPreview() {
  const { categories } = useContext(CategoriesContext);

  return (
    <div className="category-preview-container">
      {Object.keys(categories).map((el) => {
        return (
          <div>
            <Preview title={el} category={categories[el]} />
          </div>
        );
      })}
    </div>
  );
}

export default CategoriesPreview;
