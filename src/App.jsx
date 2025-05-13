import React, { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts, setLoading, setError } from './Redux/productsSlice';
import ProductList from './Items/ProductList';
import Header from './Header/Header';
import ProductDetail from './Items/ProductDetail';
import Footer from './Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const App = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);

  useEffect(() => {
    dispatch(setLoading(true));

    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => {
        dispatch(setProducts(json)); 
        dispatch(setLoading(false));
      })
      .catch((err) => {
        dispatch(setError('Failed to fetch products'));
        dispatch(setLoading(false));
      });
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <Router>
      <Header />
      <div className="App">
        
        <Routes>
          
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
        


      </div>
      <Footer />
    </Router>
  );
};

export default App;
