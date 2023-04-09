import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { logoutUser } from '../services/endpoints';

const initialState = {
  message: '',
  status: '',
  errors: [],
  errMessage: '',
};

export const signUserOut = createAsyncThunk(
  'users/logoutUser',
  async (payload: string, thunkApi) => {
    try {
      const response = await logoutUser(payload);
      return response.data;
    } catch (err: any) {
      return thunkApi.rejectWithValue(err.response.data);
    }
  }
);

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signUserOut.fulfilled, (state, action) => {
      const IsFulfilled = state;
      IsFulfilled.message = action.payload.message;
    });
  },
});

export default userSlice.reducer;
