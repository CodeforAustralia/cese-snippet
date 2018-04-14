import bows from 'bows';

import { ACTION_TYPES } from './reducer';

const log = bows('Session');


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
