import bows from 'bows';
import { ACTION_TYPES } from './reducer';

const log = bows('Session');

export const fetchSessionFromPageState = (session) => {
  log('fetching (from page state)');
  return (dispatch) => {
    log('fetch success (from page state)');
    dispatch({
      type: ACTION_TYPES.fetchSuccess,
      payload: {
        session,
      }
    })
  }
};
