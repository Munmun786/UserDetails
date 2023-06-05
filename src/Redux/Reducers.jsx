import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    data: null,
    error: null,
  },
  reducers: {
    fetchUserSuccess: (state, action) => {
      state.data = action.payload;
      state.error = null;
    },
    fetchUserFailure: (state, action) => {
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { fetchUserSuccess, fetchUserFailure } = userSlice.actions;

export default userSlice.reducer;
