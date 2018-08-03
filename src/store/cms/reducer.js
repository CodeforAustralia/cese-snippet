export const ACTION_TYPES = {
  fetchSuccess: 'CMS/FETCH_SUCCESS',
};

const cmsReducer = (state = null, action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTION_TYPES.fetchSuccess:
      return {...state, ...payload.cms};
    default:
      return state;
  }
};

export default cmsReducer;
