import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './productsSlice';
import userReducer from "./userSlice";

const store = configureStore({
  reducer: {
    products: productsReducer, // Використовуємо productsReducer для продуктів та кошика
    user: userReducer, // Використовуємо userReducer для користувача
  },
});

export default store;
