import { configureStore } from '@reduxjs/toolkit';
import categorySlice from './categories/categorySlice';
import transactionSlice from './transactions/transactionSlice';
import userSlice from './users/userSlice';

const store = configureStore({
  reducer: {
    user: userSlice,
    categories: categorySlice,
    transactions: transactionSlice,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
