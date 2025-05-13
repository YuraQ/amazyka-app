
import Modal from 'react-bootstrap/Modal';
import { IoIosCart } from "react-icons/io";
import { useState } from 'react';
import { useSelector } from "react-redux";
import "./Cart.css";
import CartItem from "./CartItem";
import NoProduct from "./NoProduct.png";
import UserEdit from '../User/UserEdit';
import BtnBuyCart from './BtnBuyCart';






function Cast(props) {

  const cart = useSelector((state) => state.products.cart);
  const currentUser = useSelector((state) => state.user.currentUser);



  let totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0); //Total price


  


  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        Your shopping cart.
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
              {cart.length > 0 ? (
                <div className="cart-list">
                  {cart.map((cartItem) => (
                    <CartItem key={cartItem.id} cart={cartItem} />
                  ))}

                  <div className="cart-total">Total price: {totalPrice}</div>
                  <br/>
                  <div className="cart-user"> 
                    <h5>Delivery Information</h5>
                    <UserEdit />
                    {currentUser && <BtnBuyCart /> }


                    </div>

                 
                </div>
              ) : (
                <div className="no-product">
                    <img className='imgNoProduct' src={NoProduct} alt="No products in cart" />
                    <p>No products in cart.</p>
                </div>
              )}
      </Modal.Body>


      <Modal.Footer>
        
      </Modal.Footer>
    </Modal>
  );
}

function BtnCart() {
  const [modalShow, setModalShow] = useState(false);

  const cart = useSelector((state) => state.products.cart);

  return (
    <>
      
      <div className="cart-container" onClick={() => setModalShow(true)}>
      <IoIosCart size={30} color="gray"  />
    {cart.length > 0 && <span className="cart-badge">{cart.length}</span>}
  
     
    </div>


      <Cast
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default BtnCart;

