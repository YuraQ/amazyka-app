import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import './ProductDetail.css';
//import Button from 'react-bootstrap/Button';

import ProductAddclick from '../Header/Cart/ProductAddClick';

const ProductDetail = () => {
  const { id } = useParams(); // Отримуємо ID товару з URL
  const product = useSelector((state) =>
    state.products.products.find((p) => p.id === Number(id))
  );

  if (!product) {
    return <div>Product not found</div>;
  }

  return (

      <Card className="detail-card">
        <Card.Img variant="top" src={product.image} className="detail-img" />
        <Card.Body>
          <Card.Title className="detail-title">{product.title}</Card.Title>
          <Card.Text className="detail-text">{product.description}</Card.Text>
          <Card.Text><b>Price:</b> ${product.price}</Card.Text>
          <ProductAddclick  product={product}/>
        </Card.Body>
      </Card>

  );
};

export default ProductDetail;
