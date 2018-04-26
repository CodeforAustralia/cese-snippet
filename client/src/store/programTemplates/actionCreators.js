import bows from 'bows';

import { ACTION_TYPES } from './reducer';
import { objectify } from 'store/objectify';

const log = bows('Program Templates');


export const createOrUpdateProgramTemplates = (programTemplates) => {
  return {
    type: ACTION_TYPES.fetchSuccess,
    payload: {
      programTemplates: objectify(programTemplates),
    }
  }
};

export const fetchProgramTemplates = () => {
  return fetchFromApi(`/programTemplates`);
};

/**
 * Fetch Programs Thunk Sequence
 * @param path
 * @returns {function(*, *, *)}
 */
export const fetchFromApi = (path) => {
  // Steps:
  // 1. GET
  // 2. update byId

  log(`Fetching: ${path}`);

  return (dispatch, getState, api) => {
    dispatch({
      type: ACTION_TYPES.fetchRequest,
    });
    // 1.
    return api(path)
      .then((resp) => {
        if (!resp.data) {
          throw new Error('Data not provided in response');
        }
        log(`Fetched: ${resp.data}`);
        // 2.
        dispatch(createOrUpdateProgramTemplates(resp.data));
        return resp;
      })
      .catch((error) => {
        // todo - status messages
        log(`Error: ${error}`);
        dispatch({
          type: ACTION_TYPES.fetchError,
          payload: {
            message: error.message || 'Something went wrong.'
          }
        });
        return error;
      });
  }
};
