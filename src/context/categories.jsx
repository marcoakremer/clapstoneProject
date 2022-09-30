import { React, createContext, useState, useEffect } from "react";

// import SHOP_DATA from "../shop-data.js";

import { getCategoriesAndDocs } from "../utils/firebase/utils.firebase.js";

export const CategoriesContext = createContext({
  categories: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState({});
  useEffect(() => {
    const getProds = async () => {
      const categoryMap = await getCategoriesAndDocs();
      // console.log(categoryMap);
      setCategories(categoryMap);
    };
    getProds();
  }, []);
  const value = { categories };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
