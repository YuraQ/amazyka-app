
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Redux/productsSlice'; 

import Button from 'react-bootstrap/Button';


const ProductAddclick = ({ product }) => {
    const dispatch = useDispatch();

    const handleButtonClick = () => {
        dispatch(addToCart(product)); // Додаємо продукт до кошика
    };

    return (
       <div> <Button variant="outline-warning" className='card-button' onClick={handleButtonClick}>Buy</Button></div>
    );
};

export default ProductAddclick;
