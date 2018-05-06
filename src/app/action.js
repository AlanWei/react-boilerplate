const login = () => ({
  type: 'APP_LOGIN_SUCCESS',
  payload: {
    user: {
      name: 'Alan',
    },
  },
});

export default {
  login,
};
