import { NewTransactionProps } from '@/utils/types';
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  createTransaction,
  fetchAllTransactions,
  fetchLatestTransaction,
} from '../services/endpoints';

const initialState = {
  transactions: [],
  latest: {},
  totalExpenses: '',
  status: '',
  message: '',
  errMessage: '',
  errors: [],
};

export const addTransaction = createAsyncThunk(
  'transactions/addTransaction',
  async (payload: NewTransactionProps, thunkAPI) => {
    try {
      const response = await createTransaction(payload);
      return response.data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

export const getAllTransactions = createAsyncThunk(
  'transactions/getAllTransactions',
  async (payload: string, thunkAPI) => {
    try {
      const response = await fetchAllTransactions(payload);
      const { expenses } = response.data;
      return expenses;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

export const getTotalExpenses = createAsyncThunk(
  'transactions/totalExpenses',
  async (payload: string, thunkAPI) => {
    try {
      const response = await fetchAllTransactions(payload);
      const { total_expenses } = response.data;
      return total_expenses;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

export const getLatestTransaction = createAsyncThunk(
  'transactions/latest',
  async (payload: string, thunkAPI) => {
    try {
      const response = await fetchLatestTransaction(payload);
      return response.data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

const transactionSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getLatestTransaction.fulfilled, (state, action) => {
        const IsFulfilled = state;
        IsFulfilled.status = 'fulfilled';
        IsFulfilled.latest = action.payload;
        IsFulfilled.message = '';
        IsFulfilled.errMessage = '';
        IsFulfilled.errors = [];
      })
      .addCase(getTotalExpenses.fulfilled, (state, action) => {
        const IsFulfilled = state;
        IsFulfilled.status = 'fulfilled';
        IsFulfilled.totalExpenses = action.payload;
        IsFulfilled.message = '';
        IsFulfilled.errMessage = '';
        IsFulfilled.errors = [];
      })
      .addCase(getAllTransactions.pending, (state) => {
        const IsPending = state;
        IsPending.status = 'pending';
      })
      .addCase(getAllTransactions.fulfilled, (state, action) => {
        const IsFulfilled = state;
        IsFulfilled.status = 'fulfilled';
        IsFulfilled.transactions = action.payload;
        IsFulfilled.message = '';
        IsFulfilled.errMessage = '';
        IsFulfilled.errors = [];
      })
      .addCase(
        getAllTransactions.rejected,
        (state, action: PayloadAction<any>) => {
          const IsRejected = state;
          IsRejected.status = 'rejected';
          IsRejected.message = action.payload;
        }
      )
      .addCase(addTransaction.pending, (state) => {
        const IsPending = state;
        IsPending.status = 'pending';
      })
      .addCase(addTransaction.fulfilled, (state, action) => {
        const IsFulfilled = state;
        IsFulfilled.status = 'fulfilled';
        IsFulfilled.message = action.payload.message;
        IsFulfilled.errMessage = '';
        IsFulfilled.errors = [];
      })
      .addCase(addTransaction.rejected, (state, action: PayloadAction<any>) => {
        const IsRejected = state;
        IsRejected.status = 'rejected';
        IsRejected.message = '';
        IsRejected.errMessage = action.payload.message;
        IsRejected.errors = action.payload.errors;
      });
  },
});

export default transactionSlice.reducer;
