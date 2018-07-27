import { ACTION_TYPES } from './reducer';

export const setSession = (session) => {
  return {
    type: ACTION_TYPES.setSession,
    payload: {
      session,
    }
  }
};
