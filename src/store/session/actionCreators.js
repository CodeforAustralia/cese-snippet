import { ACTION_TYPES } from './reducer';

export const createSession = (session) => {
  return {
    type: ACTION_TYPES.createSession,
    payload: {
      session,
    }
  }
};
