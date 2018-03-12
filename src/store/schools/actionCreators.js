import { ACTION_TYPES } from './reducer';
import mockApi from '_api';
import { objectify } from 'store/objectify';

const USE_MOCKS = process.env.REACT_APP_USE_MOCKS || false;

const fetchFromCacheOrApi = (path) => {
  return (dispatch, getState, api) => {
    dispatch({
      type: ACTION_TYPES.fetchRequest,
    });
    const req = USE_MOCKS ? mockApi(path) : api(path); // todo - api path
    return req.then(
      (resp) => {
        const { data } = resp;
        dispatch({
          type: ACTION_TYPES.fetchSuccess,
          payload: {
            schools: objectify(data, 'code'),
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
  return fetchFromCacheOrApi(`/schools/${code}`);
};

export const fetchSchools = (codes) => {
  const reqList = codes.reduce((acc, val, idx) => {
    return acc + `&id=${val}`;
  }, '');
  return fetchFromCacheOrApi(`/schools?${reqList}`);
};
