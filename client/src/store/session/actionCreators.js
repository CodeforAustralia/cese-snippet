import bows from 'bows';

import { ACTION_TYPES } from './reducer';

const log = bows('Session');

const win = typeof window !== 'undefined' ? window : global;


export const setSession = (session = null) => {
  return (dispatch) => {
    return new Promise(resolve => setTimeout(resolve, 200)).then(() => {
      dispatch({
        type: ACTION_TYPES.setSession,
        payload: {
          session,
        }
      });
      win.localStorage.setItem('snippet_session', JSON.stringify(session));
      return session;
    });
  }
};


export const clearSession = () => {
  return setSession();
};


export const registerMySchool = (school) => {
  // Steps:
  // 1. sanitize input
  // 2. POST
  // 3. Update client state

  log(`Registering: ${JSON.stringify(school)}`);

  return (dispatch, getState, api) => {
    // 2.
    return api('/session', {
      method: 'POST',
      body: JSON.stringify(school),
    })
      .then((resp) => {
        if (!resp.data) {
          throw new Error('Data not provided in response');
        }
        log(`Posted: ${resp.data}`);
        // 3.
        dispatch({
          type: ACTION_TYPES.registerMySchool,
          payload: {
            school: resp.data,
          }
        });
        return resp;
      })
      .catch((error) => {
        log(`Error: ${error}`);
        // todo - status messages
        return error;
      });
  }
};
