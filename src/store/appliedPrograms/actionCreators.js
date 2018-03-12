import mockApi from '_api';
import { ACTION_TYPES } from './reducer';
import { objectify } from 'store/objectify';

const USE_MOCKS = process.env.REACT_APP_USE_MOCKS || false;

const fetchFromCacheOrApi = (code, year = null) => {
  if (typeof code === 'undefined') {
    throw new Error('Must provide code.');
  }
  const payload = {
    code,
    year,
  };

  return (dispatch, getState, api) => {
    dispatch({
      type: ACTION_TYPES.fetchRequest,
    });
    const req = USE_MOCKS ? mockApi('/appliedPrograms', payload) : api(`/appliedPrograms`);  // todo - api path
    return req.then(
      (resp) => {
        const { data } = resp;
        dispatch({
          type: ACTION_TYPES.fetchSuccess,
          payload: {
            appliedPrograms: objectify(data),
          }
        });
        dispatch({
          type: ACTION_TYPES.setFilter,
          payload: {
            key: `${code}_${year}`,
            ids: data.map(p => p.id),
            code,
            year,
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

export const fetchAppliedProgramsByFilters = (code, year = null) => {
  return fetchFromCacheOrApi(code, year);
};
