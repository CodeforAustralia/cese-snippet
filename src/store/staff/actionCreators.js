import bows from 'bows';

import { objectify } from 'store/objectify';
import { ACTION_TYPES } from './reducer';

const log = bows('Staff');


/**
 * @param staff {Array|Object}
 * @returns {Object} FLUX Action creator
 */
export const createOrUpdateStaff = (staff) => {
  return {
    type: ACTION_TYPES.fetchSuccess,
    payload: {
      staff: objectify(staff),
    }
  }
};

export const fetchStaff = (ids = []) => {
  if (!Array.isArray(ids)) {
    throw new Error('Must supply array to fetchStaff.');
  }
  if (ids.length) {
    const reqList = ids.reduce((acc, val) => {
      return acc + `&id=${val}`;
    }, '');
    return fetchFromApi(`/staff?${reqList}`);
  }
  return fetchFromApi('/staff');
};



/**
 * Fetch Staff Thunk Sequence
 * @param path
 * @param props
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
        log(`Fetched`);
        // 2.
        dispatch(createOrUpdateStaff(resp.data));
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
      })
  }
};
