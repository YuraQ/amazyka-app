import React from 'react';
import ProductItem from './ProductItem';
import { useSelector } from 'react-redux';
import './ProductList.css';
import LeftMenu from '../LeftMenu/LeftMenu';
import ProductTop from '../Items/ProductTop';
const ProductList = () => { 
  const products = useSelector((state) => state.products.products);
  const searchTerm = useSelector((state) => state.products.searchTerm);
  const selectedCategory = useSelector((state) => state.products.selectedCategory);

  // Фільтруємо товари за категорією та пошуком
  const priceFilter = useSelector((state) => state.products.priceFilter);

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice = product.price >= priceFilter.min && product.price <= priceFilter.max;
    return matchesCategory && matchesSearch && matchesPrice;
  });
  
  

  return (
  <><LeftMenu />
  <div className="product-list-container">
  <ProductTop />
    <div className="product-list">
    
    
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))
      ) : (
        <p>No products found.</p>
      )}
    </div>
    </div>
    </>
  );
};

export default ProductList;
