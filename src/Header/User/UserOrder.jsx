
import { useSelector, } from 'react-redux';
import "./UserOrder.css";




function UserOrder() {

  const orders = useSelector((state) => state.products.orders);

  




  return (
    <div>
   {orders.length > 0 && <h5>Your Orders</h5>}

      {orders.map((order, index) => (
        <div key={index} className="order">
          <h5>Order {index + 1}</h5>
          <strong>Items:</strong>
          
            {order.items.map((item, itemIndex) => (
              <li key={itemIndex}>
                {item.title} - {item.price} UAH
              </li>
            ))}
          
         
          <p><strong>Address:</strong> {order.user.address}</p>
         
        </div>
      ))}
    </div>
  );}
export default UserOrder;

