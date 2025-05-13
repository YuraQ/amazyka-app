import Carousel from 'react-bootstrap/Carousel';
import { useSelector } from 'react-redux';
import './ProductTop.css'

function ProductTop() {
  const products = useSelector((state) => state.products.products);

  // Вибираємо топ-3 товари (можна сортувати за рейтингом, якщо є)
  const topProducts = products.slice(0, 3);

  return (
    <Carousel className='product-top'>
      {topProducts.map((product) => (
        <Carousel.Item key={product.id}>
          <img
            className="d-block w-100"
            src={product.image}
            alt={product.title}
            style={{ maxHeight: "400px", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h3>{product.title}</h3>
            <p>{product.description.slice(0, 100)}...</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ProductTop;
