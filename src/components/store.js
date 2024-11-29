import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../components/cartSlice';
import userReducer from '../components/userSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
  },
});

export default store;
