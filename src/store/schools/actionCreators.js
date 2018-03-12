import { ACTION_TYPES } from './reducer';
import mockApi from '_api';

const USE_MOCKS = process.env.REACT_APP_USE_MOCKS || false;

const fetchFromCacheOrApi = (codes) => {

  const packet = {
    codes: null,
  };
  if (typeof codes !== 'undefined') {
    if (Array.isArray(codes)) {
      packet.codes = codes;
    } else {
      throw new Error('Param provided to fetchFromCacheOrApi is wrong type.');
    }
  }

  return (dispatch, getState, api) => {
    dispatch({
      type: ACTION_TYPES.fetchRequest,
    });
    const req = USE_MOCKS ? mockApi('/schools', packet) : api(`/schools`); // todo - api path
    return req.then(
      (schools) => {
        dispatch({
          type: ACTION_TYPES.fetchSuccess,
          payload: {
            schools: schools,
          }
        });
      },
      (error) => {
        dispatch({
          type: ACTION_TYPES.fetchError,
          payload: {
            message: error.message || 'Something went wrong.'
          }
        })
      }
    );
  }
};

export const fetchSchool = (code) => {
  return fetchFromCacheOrApi([code]);
};

export const fetchSchools = (codes) => {
  return fetchFromCacheOrApi(codes);
};
