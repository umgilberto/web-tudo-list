import { createSelector } from 'reselect';
import { RootState } from '../../store/store';

const selectSelf = (state: RootState) => state.auth;
const isLogged = createSelector(selectSelf, (state) => state.isLogged);

export { isLogged };
