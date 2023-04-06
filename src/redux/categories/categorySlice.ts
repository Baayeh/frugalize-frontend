import { NewCategoryProps } from '@/utils/types';
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createCategory, fetchAllCategories } from '../services/endpoints';

const initialState = {
  categories: [],
  message: '',
  status: '',
  errors: [],
  errMessage: '',
};

// Fetch all categories
export const getAllCategories = createAsyncThunk(
  'categories/fetchCategories',
  async (_, thunkApi) => {
    const token = localStorage.getItem('token');
    try {
      const response = await fetchAllCategories(token!);
      return response.data;
    } catch (err: any) {
      return thunkApi.rejectWithValue(err.response.data);
    }
  }
);

// Add a new category
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
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllCategories.pending, (state) => {
      const IsPending = state;
      IsPending.status = 'pending';
    });
    builder.addCase(getAllCategories.fulfilled, (state, action) => {
      const IsFulfilled = state;
      IsFulfilled.status = 'fulfilled';
      IsFulfilled.categories = action.payload;
      IsFulfilled.message = '';
      IsFulfilled.errMessage = '';
      IsFulfilled.errors = [];
    });
    builder.addCase(
      getAllCategories.rejected,
      (state, action: PayloadAction<any>) => {
        const IsRejected = state;
        IsRejected.status = 'rejected';
        IsRejected.message = action.payload;
      }
    );
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
