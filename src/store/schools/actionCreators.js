import bows from 'bows';

import { ACTION_TYPES } from './reducer';
import { objectify } from 'store/objectify';


const log = bows('Schools');

export const fetchRequest = () => {
  log('fetching');
  return {
    type: ACTION_TYPES.fetchRequest,
  }
};

export const fetchSuccess = (schools) => {
  log(`fetch success`);
  return {
    type: ACTION_TYPES.fetchSuccess,
    payload: {
      schools: objectify(schools, 'code'),
    },
  }
};

export const fetchError = (error) => {
  log('fetch error');
  return {
    type: ACTION_TYPES.fetchError,
    payload: {
      message: error.message || 'Something went wrong.'
    }
  }
};

export const fetchSchool = (code) => {
  if (typeof code === 'undefined') {
    throw new Error('Must provide "code".');
  }
  return (dispatch, getState, api) => {
    dispatch(fetchRequest());
    return api(`/schools/${code}`)
      .then((resp) => {
        const school = resp.data;
        if (!school) {
          throw new Error('Data not provided in response.');
        }
        dispatch(fetchSuccess(school));
        return school;
      })
      .catch((error) => {
        dispatch(fetchError(error));
        return error;
      });
  }
};

export const fetchSchools = (codes) => {
  if (typeof code === 'undefined') {
    throw new Error('Must provide code.');
  }
  if (!Array.isArray(codes)) {
    throw new Error('Must provide codes as Array.');
  }

  const search = codes.reduce((acc, val, idx) => {
    return acc + `&code=${val}`;
  }, '');

  return (dispatch, getState, api) => {
    dispatch(fetchRequest());
    return api(`/schools?${search}`)
      .then((resp) => {
        const school = resp.data;
        if (!school) {
          throw new Error('Data not provided in response.');
        }
        dispatch(fetchSuccess(school));
        return school;
      })
      .catch((error) => {
        dispatch(fetchError(error));
        return error;
      });
  }
};


