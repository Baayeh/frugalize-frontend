import { NewTransactionProps } from '@/utils/types';
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createTransaction } from '../services/endpoints';

const initialState = {
  transactions: [],
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

const transactionSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
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
