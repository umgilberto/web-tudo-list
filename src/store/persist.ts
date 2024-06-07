import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import auth from '../features/auth/slice';

const persistConfig = {
  key: 'tudo-list',
  storage,
  whitelist: [auth.name],
};

export { persistConfig, persistReducer, storage };
