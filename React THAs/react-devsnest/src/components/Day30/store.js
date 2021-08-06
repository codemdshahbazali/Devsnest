import { configureStore } from '@reduxjs/toolkit';
import ecommerDataReducer from './slices/ecommerDataSlice';

export const store = configureStore({
  reducer: {
    productData: ecommerDataReducer,
  },
});
