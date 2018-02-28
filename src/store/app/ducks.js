import initialState from 'store/initialState';

export const appReducer = (state = initialState.app, action) => {
  const { type } = action;
  switch (type) {
    default:
      return state;
  }
};
