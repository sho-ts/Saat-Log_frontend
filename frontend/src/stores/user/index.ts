import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    isSignIn: false,
    userName: '',
    photoURL: ''
  },
  reducers: {}
});

export default userSlice.reducer;