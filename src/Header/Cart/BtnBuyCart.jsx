import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { addOrder, clearCart,} from '../../Redux/productsSlice';
import { useSelector } from 'react-redux';


function BtnBuyCart() {
  const [showAlert, setShowAlert] = useState(false);
  const cart = useSelector((state) => state.products.cart);
  const currentUser = useSelector((state) => state.user.currentUser);

  const dispatch = useDispatch();


  const handleBuyClick = () => {
    console.log('Buy button clicked');
    console.log(cart);


    const newOrder = {
      items: cart,
      user: {
        name: currentUser?.name ,
        address: currentUser?.address ,
      },
      date: new Date().toISOString(),
    };
  
    // Диспатчимо в store
    dispatch(addOrder(newOrder));

    


      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 2000);
      setTimeout(() => dispatch(clearCart()), 3000);
      
    
  };

  return (
    <div>
      <Button variant="success" onClick={handleBuyClick}>Buy</Button>

      {showAlert && (
        <Alert key="success" variant="success" className="mt-3">
          Your order has been placed successfully!
        </Alert>
      )}
    </div>
  );
}

export default BtnBuyCart;
