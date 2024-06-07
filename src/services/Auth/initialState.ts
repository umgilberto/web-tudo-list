import { AuthState } from './types';

export const initialState: AuthState = {
  Authorization: localStorage.getItem('Authorization') || '',
  isLogged: false,
};
