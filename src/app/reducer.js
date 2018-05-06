import createReducer from 'utils/createReducer';

const defaultState = () => ({
  isLogin: false,
  user: {},
});

const loginSuccess = (state, action) => ({
  ...state,
  isLogin: true,
  user: action.payload.user,
});

export default createReducer(defaultState, {
  APP_LOGIN_SUCCESS: loginSuccess,
});
