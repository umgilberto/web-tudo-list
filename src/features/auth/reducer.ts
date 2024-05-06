import { PayloadAction } from '@reduxjs/toolkit';
import { AuthState, SetTokenDTO } from './types';
import { storage } from '../../store/persist';

const setToken = (state: AuthState, action: PayloadAction<SetTokenDTO>) => {
  const { Authorization, isLogged } = action.payload;

  state.Authorization = Authorization;
  state.isLogged = isLogged;

  storage.setItem('Authorization', Authorization);
};

const logout = (state: AuthState) => {
  state.Authorization = '';
  state.isLogged = false;

  storage.removeItem('Authorization');
};

export {
  setToken,
  logout,
};
