import initialState from 'store/initialState';

const appReducer = (state = initialState.app, action) => {
  const { type } = action;
  switch (type) {
    default:
      return state;
  }
};

export default appReducer;
