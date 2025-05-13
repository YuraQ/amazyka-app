import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [
    { 
      username: 'yuraq', 
      password: 'pas123', 
      token: 'abc123',
      firstName: 'Yura',
      lastName: 'Matsiuk',
      address: '123 Main St, Kyiv, Ukraine',
    },
  ],
  token: null,
  isAuthenticated: false,
  currentUser: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login(state, action) {
      const user = state.users.find(user => user.token === action.payload.token);
      if (user) {
        state.currentUser = user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
      }
    },
    logout(state) {
      state.token = null;
      state.isAuthenticated = false;
      state.currentUser = null;
    },
    updateUser(state, action) {
      // Оновлюємо currentUser
      state.currentUser = { ...state.currentUser, ...action.payload };

      // Оновлюємо також користувача у списку users
      const userIndex = state.users.findIndex(
        user => user.username === state.currentUser.username
      );
      if (userIndex !== -1) {
        state.users[userIndex] = {
          ...state.users[userIndex],
          ...action.payload
        };
      }
    },
  },
});

export const { login, logout, updateUser } = userSlice.actions;
export default userSlice.reducer;
