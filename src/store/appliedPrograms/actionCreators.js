import mockApi from '_api';
import { ACTION_TYPES } from './reducer';

const USE_MOCKS = process.env.REACT_APP_USE_MOCKS || false;

const fetchFromCacheOrApi = (codes, year) => {

  const packet = {
    codes: null,
    year: null,
  };
  if (typeof codes !== 'undefined') {
    if (Array.isArray(codes)) {
      packet.codes = codes;
    } else {
      throw new Error('Param provided to fetchFromCacheOrApi is wrong type.');
    }
  }

  if (typeof year !== 'undefined') {
    packet.year = year;
  }

  return (dispatch, getState, api) => {
    dispatch({
      type: ACTION_TYPES.fetchRequest,
    });
    const req = USE_MOCKS ? mockApi('/appliedPrograms', packet) : api(`/appliedPrograms`);  // todo - api path
    return req.then(
      (appliedPrograms) => {
        dispatch({
          type: ACTION_TYPES.fetchSuccess,
          payload: {
            appliedPrograms: appliedPrograms,
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

export const fetchAppliedProgramsBySchool = (code, year) => {
  return fetchFromCacheOrApi([code], year);
};
