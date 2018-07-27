import bows from 'bows';

import { objectify } from 'store/objectify';
import { ACTION_TYPES } from './reducer';

const log = bows('Users');

/**
 * Set user
 * One off, used to set a user from server rendered page variables.
 * @param user
 * @returns {{type: string, payload: *}}
 */
export const setUser = (user) => {
  log(`Set success - ${JSON.stringify(user)}`);
  return {
    type: ACTION_TYPES.setUser,
    payload: objectify(user),
  }
};

/**
 * Update user
 * @param user
 * @returns {function(*, *, *)}
 */
export const updateUser = (user) => {
  log(`Updating - ${JSON.stringify(user)}`);
  return (dispatch, getState, api) => {
    dispatch({
      type: ACTION_TYPES.updateRequest,
    });
    return api(`/users/${user.id}`).then(
      resp => {
        const user = resp.data;
        log(`Update success - ${JSON.stringify(user)}`);
        dispatch({
          type: ACTION_TYPES.updateSuccess,
          payload: objectify(user),
        });
        return user;
      },
      errors => {
        log(`Update error - ${JSON.stringify(errors)}`);
        dispatch({
          type: ACTION_TYPES.updateError,
          payload: {
            message: errors,
          },
        });
        return errors;
      }
    )
  }
};









/**
 * @param staff {Array|Object} single or multiple records
 * @returns {Object} FLUX Action creator
 */
const createOrUpdateStaff = (staff) => {
  return {
    type: ACTION_TYPES.fetchSuccess,
    payload: {
      staff: objectify(staff),
    }
  }
};

export const createStaff = (staff) => {
  return createOrUpdateStaff(staff);
};

export const updateStaff = (staff) => {
  return createOrUpdateStaff(staff);
};


export const fetchStaff = (ids = []) => {
  if (!Array.isArray(ids)) {
    throw new Error('Must supply array to fetchStaff.');
  }
  if (ids.length) {
    const reqList = ids.reduce((acc, val) => {
      return acc + `&id=${val}`;
    }, '');
    return fetchFromApi(`/users?${reqList}`);
  }
  return fetchFromApi('/users');
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


