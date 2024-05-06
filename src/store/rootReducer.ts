import { combineReducers } from '@reduxjs/toolkit';
import { baseApi } from '../services';
import { persistConfig, persistReducer } from './persist';
import authSlice from '../features/auth';

const rootReducer = combineReducers({
  auth: authSlice,
  [baseApi.reducerPath]: baseApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
