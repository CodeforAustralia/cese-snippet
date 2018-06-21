import initialState from 'store/initialState';

export const ACTION_TYPES = {
  fetchRequest: 'CMS/FETCH_REQUEST',
};

const cmsReducer = (state = initialState.cms, action) => {
  const { type, payload } = action;

  switch (type) {
    case ACTION_TYPES.fetchRequest:
      return {...state, ...payload};

    default:
      return state;
  }
};

export default cmsReducer;
