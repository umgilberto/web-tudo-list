import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { setToken, logout } from './reducer';

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken,
    logout,
  },
});

export default slice;
