import { ACTION_TYPES } from './reducer';

export const createCms = (cms) => {
  return {
    type: ACTION_TYPES.createCms,
    payload: {
      cms,
    }
  }
};
