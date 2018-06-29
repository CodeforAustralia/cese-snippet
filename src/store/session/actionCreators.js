import bows from 'bows';

import { ACTION_TYPES } from './reducer';

const log = bows('Session');
const win = typeof window !== 'undefined' ? window : global;


export const fetchSession = () => {
  return (dispatch) => {
    dispatch({
      type: ACTION_TYPES.fetchRequest,
    });

    if (!win.SNIPPET_SESSION) {
      log('Error fetching Session User');
      return dispatch({
        type: ACTION_TYPES.fetchError,
        payload: {
          message: 'No Session provided.',
        }
      });
    }

    log(`Fetched session: ${JSON.stringify(win.SNIPPET_SESSION)}`);
    return dispatch({
      type: ACTION_TYPES.fetchSuccess,
      payload: {
        session: win.SNIPPET_SESSION,
      }
    });
  };
};


export const createSession = (session = null) => {
  return (dispatch) => {
    return new Promise(resolve => setTimeout(resolve, 200)).then(() => {
      dispatch({
        type: ACTION_TYPES.fetchSuccess,
        payload: {
          session,
        }
      });
      return session;
    });
  }
};

export const clearSession = () => {
  return createSession();
};

export const saveSession = (session) => {
  // Steps:
  // 1. sanitize input
  // 2. POST
  // 3. Update client state

  log(`Saving: ${JSON.stringify(session)}`);

  return (dispatch, getState, api) => {
    // 2.
    return api('/session', {
      method: 'POST',
      body: JSON.stringify(session),
    })
      .then((resp) => {
        if (!resp.data) {
          throw new Error('Data not provided in response');
        }
        log(`Posted: ${resp.data}`);
        // 3.
        dispatch({
          type: ACTION_TYPES.setSession,
          payload: {
            session: resp.data,
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
