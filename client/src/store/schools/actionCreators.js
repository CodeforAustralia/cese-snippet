import { ACTION_TYPES } from './reducer';
import { objectify } from 'store/objectify';

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


export const fetchFromCacheOrApi = (path) => {
  return (dispatch, getState, api) => {
    dispatch({
      type: ACTION_TYPES.fetchRequest,
    });

    return api(path)
      .then((resp) => {
        if (!resp.data) {
          throw new Error('Data not provided in response');
        }
        dispatch(createOrUpdateSchools(resp.data));
        return resp;
      })
      .catch((error) => {
        // todo - status messages
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

export const fetchSchool = (code) => {
  if (typeof code === 'undefined') {
    throw new Error('Must supply code to request a school.');
  }
  return fetchFromCacheOrApi(`/schools?code=${code}`);
};

export const fetchSchools = (codes) => {
  if (typeof codes === 'undefined') {
    return fetchFromCacheOrApi(`/schools`);
  }
  const reqList = codes.reduce((acc, val, idx) => {
    return acc + `&code=${val}`;
  }, '');
  return fetchFromCacheOrApi(`/schools?${reqList}`);
};
