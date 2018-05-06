import action from './action';

const initClient = (dispatch) => {
  const commonActions = [
    dispatch(action.login()),
  ];

  return commonActions;
};

export default initClient;
