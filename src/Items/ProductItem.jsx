
import React from 'react';
import './ProductItem.css';
import ProductAddclick from '../Header/Cart/ProductAddClick';
import { Link } from 'react-router-dom';
const ProductItem = ({ product }) => {
  return (
    <div className="cardProduct">
    <Link to={`/product/${product.id}`} className="cardProduct-link">
      <div className="cardProduct-DivImage">
        <img src={product.image} alt={product.title} className="cardProduct-image" />
      </div>
      <div className="cardProduct-DivTitle">
        <h2 className="cardProduct-title">{product.title}</h2>
      </div>
      <div className="cardProduct-description">{product.description}</div>
    </Link>
    <div className="cardProduct-PrBtn">
      <div className="cardProduct-price">
        <p>${product.price}</p>
      </div>
      <ProductAddclick product={product} />
    </div>
  </div>
);
};

export default ProductItem;
