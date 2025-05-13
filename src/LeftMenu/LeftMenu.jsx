import { useDispatch, useSelector } from "react-redux";
import { setCategoryFilter, setPriceFilter  } from "../Redux/productsSlice";
import React, { useState } from "react";

import "./LeftMenu.css";


function LeftMenu() {
  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.products.selectedCategory);
  const products = useSelector((state) => state.products.products);

  const [minPrice, setMinPrice] = useState("");
const [maxPrice, setMaxPrice] = useState("");

  // Отримуємо  категорії
  const categories = ["all", ...new Set(products.map((product) => product.category))];
  

  return (
    <div className="leftMenu">
      <div className="leftMenuH6">Filters:</div>
      {categories.map((category) => (
        <div className="category"
          key={category}
          onClick={() => dispatch(setCategoryFilter(category))}
          style={{ 
            backgroundColor: selectedCategory === category ? "blue" : "white",
            color: selectedCategory === category ? "white" : "black",
            margin: "5px",
            padding: "10px",
            
            cursor: "pointer",
            width: "100px",
          }}
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        
        </div>
      ))}
      <div className="leftMenuH6">Price filter:</div>
      <input
  className="priceInput"
  type="number"
  min="0"
  placeholder="Min price"
  value={minPrice}
  onChange={(e) => {
    const value = e.target.value;
    setMinPrice(value);
    dispatch(setPriceFilter({ min: Number(value) || 0, max: Number(maxPrice) || Infinity }));
  }}
/>
<input
  className="priceInput"
  type="number"
  min="0"
  placeholder="Max price"
  value={maxPrice}
  onChange={(e) => {
    const value = e.target.value;
    setMaxPrice(value);
    dispatch(setPriceFilter({ min: Number(minPrice) || 0, max: Number(value) || Infinity }));
  }}
/>

    </div>
  );
}

export default LeftMenu;
