import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./CartItem.css";
import { increaseQuantity, decreaseQuantity, removeFromCart  } from "../../Redux/productsSlice";
import { useDispatch } from 'react-redux';

function CartItem({cart}) {

  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeFromCart({ id: cart.id }));  // викликаємо екшн з id товару
  };

  // Збільшити кількість товару
  const handleIncrease = () => {
    dispatch(increaseQuantity(cart)); // передаємо cart item для збільшення
  };

  // Зменшити кількість товару
  const handleDecrease = () => {
    dispatch(decreaseQuantity(cart)); // передаємо cart item для зменшення
  };

  return (

<>
      <Card  className='cartItem'>
        <Card.Img variant="left"  src={cart.image}  className='cartItem-Img'/>
        <Card.Body className='cartItem-Body'>
          <Card.Text className='cartItem-Txt'>
          {cart.title}   
          <span className='cartItem-quantity'>   {cart.quantity} units.</span>
          </Card.Text>
           
          <Card.Text className='cartItem-Txt'><b>${cart.price * cart.quantity}</b></Card.Text>
          <div className="cartItem-Btns">
          
                <div className="cartItem-quantity-controls">
                  <Button variant="linkoutline-*" onClick={handleDecrease}>-</Button>
                  {cart.quantity}
                  <Button variant="outline-*" onClick={handleIncrease}>+</Button>
                </div>
                <Button variant="outline-danger" onClick={handleRemove}>Remove</Button>
          </div>

        </Card.Body>
      </Card>
    </>
    );
}

export default CartItem;


