import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from '../Redux/productsSlice';


function SearchForm() {

  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.products.searchTerm);


  const handleSearch = (event) => {
    dispatch(setSearchTerm(event.target.value)); // Оновлюємо Redux-стан
  };



  return (

     <Form>
      <Form.Control 
        type="text" 
        placeholder="Search..." 
        value={searchTerm} 
        onChange={handleSearch} 
      />
    </Form>
  );
}

export default SearchForm;