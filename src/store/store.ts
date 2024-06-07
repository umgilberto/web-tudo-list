import { EnhancedStore, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { useDispatch } from 'react-redux';
import {
  persistStore,
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import persistedReducer from './rootReducer';
import { baseApi } from '../services';


const middlewares = [ // Use the Middleware type for the middlewares array
  thunk,
  baseApi.middleware,
];


const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE],
    },
  }).concat(middlewares),
});

const createStore = (): EnhancedStore => store;

export type RootState = ReturnType<typeof store.getState>;
const persistor = persistStore(store);
type AppDispatch = typeof store.dispatch;
const useAppDispatch = () => useDispatch<AppDispatch>();

export {
  createStore, useAppDispatch, persistor, store,
};
