import bows from 'bows';
import { ACTION_TYPES } from './reducer';

const log = bows('Session');

export const fetchSessionFromPageState = (session) => {
  log('fetching');
  return (dispatch) => {
    log('fetch success');
    dispatch({
      type: ACTION_TYPES.fetchSuccess,
      payload: {
        session,
      }
    })
  }
};
