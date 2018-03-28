import { ACTION_TYPES } from './reducer';

export const activateCreateProgramFormScope = (data) => {
  return {
    type: ACTION_TYPES.activateCreateProgramFormScope,
    payload: {
      data,
    }
  }
};
