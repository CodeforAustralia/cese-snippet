import initialState from 'store/initialState';

export const ACTION_TYPES = {};

const appReducer = (state = initialState.app, action) => {
  const { type } = action;
  
  switch (type) {
    default:
      return state;
  }
};

export default appReducer;
