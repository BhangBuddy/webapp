// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const profile = createSlice({
  name: 'profile',
  initialState: null,
  reducers: {
    setUser: (state, action) => action.payload,
    clearUser: () => null,
  },
});

export const { setUser, clearUser }= profile.actions;
export default profile.reducer;
