import bows from 'bows';
import { ACTION_TYPES } from './reducer';

const log = bows('Session');

export const fetchSuccess = (session) => {
  log('fetch success');
  return {
    type: ACTION_TYPES.fetchSuccess,
    payload: {
      session,
    }
  }
};
