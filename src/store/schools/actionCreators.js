import { ACTION_TYPES } from './reducer';
import mockApi from '_api';
import { objectify } from 'store/objectify';

const USE_MOCKS = process.env.REACT_APP_USE_MOCKS || false;

export const fetchSchool = (code) => {
  return (dispatch, getState, api) => {
    dispatch({
      type: ACTION_TYPES.fetchRequest,
    });
    const req = USE_MOCKS ? mockApi('/user/schools', {code}) : api(`/schools/${code}`);
    return req.then(
      (school) => {
        dispatch({
          type: ACTION_TYPES.fetchSuccess,
          payload: {
            schools: objectify([school], 'code'),
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

export const fetchSchools = (codes) => {
  return (dispatch, getState, api) => {
    dispatch({
      type: ACTION_TYPES.fetchRequest,
    });
    const req = USE_MOCKS ? mockApi('/user/schools', {codes}) : api(`/user/schools`);
    return req.then(
      (schools) => {
        dispatch({
          type: ACTION_TYPES.fetchSuccess,
          payload: {
            schools: objectify(schools, 'code'),
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
