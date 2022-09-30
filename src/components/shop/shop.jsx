import "./shop.scss";
import CategoriesPreview from "../../routes/categories-preview/categories-preview";
import Category from "../../routes/category/category";
import { Route, Router, Routes } from "react-router-dom";

function Shop() {
  return (
    <Routes>
      <Route index element={<CategoriesPreview></CategoriesPreview>} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
}

export default Shop;
