import { createSlice } from '@reduxjs/toolkit';

// Початковий стан
const initialState = {
  products: [], // Список товарів
  selectedCategory: "all", 
  loading: false, // Статус завантаження
  error: null, // Поточна помилка (якщо є)
  cart: [], // Кошик
  searchTerm: "", // Пошук
  priceFilter: { min: 0, max: Infinity }, // Фільтр за ціною
  orders: [], 
};




// Створення slice
const productsSlice = createSlice({
  name: 'products', // Ім'я slice
  initialState, // Початковий стан
  reducers: {

    // Встановити статус завантаження
    setLoading(state, action) {
      state.loading = action.payload;
    },

    // Встановити список товарів
    setProducts(state, action) {
      state.products = action.payload;
       
    },

    // Встановити помилку
    setError(state, action) {
      state.error = action.payload;
    },


    // Пошук 
    setSearchTerm(state, action) {
      state.searchTerm = action.payload; // Оновлюємо стан пошуку
    },


    // Фільтр за категорією    


    setCategoryFilter(state, action) {
      state.selectedCategory = action.payload;
    },


    setPriceFilter(state, action) {
  state.priceFilter = action.payload;
},
    // Фільтр за ціною


    



        //КОШИК//

    // Додати продукт до кошика
    addToCart(state, action) {
      const existingItem = state.cart.find(item => item.id === action.payload.id);

      if (existingItem) {
        // Якщо товар вже є в кошику, збільшуємо кількість
        existingItem.quantity += 1;
      } else {
        // Якщо товару немає в кошику, додаємо його з кількістю 1
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    // Збільшити кількість продукту в кошику
    increaseQuantity(state, action) {
      const item = state.cart.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      }
    },
    // Зменшити кількість продукту в кошику
    decreaseQuantity(state, action) {
      const item = state.cart.find(item => item.id === action.payload.id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
 

  //видалити товар з кошика
  removeFromCart(state, action) {
    state.cart = state.cart.filter(item => item.id !== action.payload.id);
  },


  //Очистити кошик
  clearCart: (state) => {
    state.cart = [];
  },


  orderData: (state, action) => {
    state.orderData = action.payload;
  },

  addOrder: (state, action) => {
    state.orders.push(action.payload);
  },


 }
});

// Експортуємо екшни та редюсер
export const { setLoading, setProducts, setError, addToCart, increaseQuantity, decreaseQuantity, removeFromCart, setSearchTerm, setCategoryFilter,  setPriceFilter, clearCart, addOrder } = productsSlice.actions;
export default productsSlice.reducer;
