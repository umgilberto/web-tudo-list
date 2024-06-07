import auth from './slice';

const { reducer } = auth;

export const { setToken, logout } = auth.actions;
export default reducer;
