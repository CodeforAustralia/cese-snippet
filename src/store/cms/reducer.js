export const ACTION_TYPES = {
  createCms: 'CMS/SET',
};

const cmsReducer = (state = null, action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTION_TYPES.createCms:
      return payload.cms;
    default:
      return state;
  }
};

export default cmsReducer;
