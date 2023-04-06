import { NewCategoryProps } from '@/utils/types';
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createCategory } from '../services/endpoints';

const initialState = {
  message: '',
  status: '',
  errors: [],
  errMessage: '',
};

export const addCategory = createAsyncThunk(
  'categories/addCategory',
  async (payload: NewCategoryProps, thunkApi) => {
    try {
      const response = await createCategory(payload);
      return response.data;
    } catch (err: any) {
      return thunkApi.rejectWithValue(err.response.data);
    }
  }
);

const categorySlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addCategory.pending, (state) => {
      const IsPending = state;
      IsPending.status = 'pending';
    });
    builder.addCase(addCategory.fulfilled, (state, action) => {
      const IsFulfilled = state;
      IsFulfilled.status = 'fulfilled';
      IsFulfilled.message = action.payload.message;
      IsFulfilled.errMessage = '';
      IsFulfilled.errors = [];
    });
    builder.addCase(
      addCategory.rejected,
      (state, action: PayloadAction<any>) => {
        const IsRejected = state;
        IsRejected.status = 'rejected';
        IsRejected.message = action.payload.message;
      }
    );
  },
});

export default categorySlice.reducer;
