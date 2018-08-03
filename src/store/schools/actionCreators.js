import bows from 'bows';

import { ACTION_TYPES } from './reducer';
import { objectify } from 'store/objectify';

const log = bows('Schools');


export const setSchool = (school) => {
  log(`setSchool success`);
  return {
    type: ACTION_TYPES.setSchool,
    payload: objectify(school, 'code'),
  }
};




/**
 * @param schools {Array|Object} school or schools
 * @returns {Object} FLUX Action creator
 */
export const createOrUpdateSchools = (schools) => {
  return {
    type: ACTION_TYPES.fetchSuccess,
    payload: {
      schools: objectify(schools, 'code'),
    }
  }
};


export const fetchSchool = (code) => {
  if (typeof code === 'undefined') {
    throw new Error('Must supply code to request a school.');
  }
  return fetchFromApi(`/schools?code=${code}`);
};

export const fetchSchools = (codes) => {
  if (typeof codes === 'undefined') { // todo
    return () => {};
  }
  const reqList = codes.reduce((acc, val, idx) => {
    return acc + `&code=${val}`;
  }, '');
  return fetchFromApi(`/schools?${reqList}`);
};



/**
 * Fetch Schools Thunk Sequence
 * @param path
 * @param props
 * @returns {function(*, *, *)}
 */
export const fetchFromApi = (path, props) => {
  // Steps:
  // 1. GET
  // 2. update byCode

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

        debugger

        dispatch(createOrUpdateSchools(resp.data));
        return resp.data;
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
